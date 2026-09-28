// Tiny generative lo-fi + rain machine. Everything is synthesised live with WebAudio,
// so there are no audio files to download (or licence).
window.Lofi = (() => {
  let ac, master, analyser, bins, beatsBus, rainBus, timer, stopTimer, hitBuf, rainSrc, crackleSrc;
  let state = { beats: true, rain: true, vol: 0.5 };
  let step = 0;
  let nextTime = 0;
  let bar = 0;

  const BPM = 74;
  const SIX = 60 / BPM / 4; // sixteenth note
  const midi = (n) => 440 * Math.pow(2, (n - 69) / 12);
  // Dm9, G13, Cmaj9, Am9: a ii-V-I-vi progression
  const CHORDS = [
    [50, 57, 60, 64, 65],
    [43, 53, 57, 59, 64],
    [48, 55, 59, 62, 64],
    [45, 55, 60, 64, 67],
  ];
  const PENTA = [72, 74, 76, 79, 81, 84];

  function noiseBuffer(seconds, brown) {
    const len = ac.sampleRate * seconds;
    const buf = ac.createBuffer(1, len, ac.sampleRate);
    const d = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1;
      if (brown) { last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; } else d[i] = w;
    }
    return buf;
  }

  const ctx = () => ac || (ac = new (window.AudioContext || window.webkitAudioContext)());

  function init() {
    ctx();
    master = ac.createGain();
    const comp = ac.createDynamicsCompressor();
    // the analyser feeds the nav equaliser bars
    analyser = ac.createAnalyser();
    analyser.fftSize = 64;
    analyser.smoothingTimeConstant = 0.8;
    bins = new Uint8Array(analyser.frequencyBinCount);
    master.connect(comp).connect(analyser).connect(ac.destination);

    // warm "tape" low-pass on the music bus
    beatsBus = ac.createGain();
    const tape = ac.createBiquadFilter();
    tape.type = "lowpass";
    tape.frequency.value = 2400;
    beatsBus.connect(tape).connect(master);

    hitBuf = noiseBuffer(0.3, false);
    rainBus = ac.createGain();
    rainBus.connect(master);

    // steady rain: brown + filtered white noise
    const white = noiseBuffer(4, false);
    const brown = noiseBuffer(4, true);
    rainSrc = [brown, white].map((b, i) => {
      const s = ac.createBufferSource();
      s.buffer = b;
      s.loop = true;
      const f = ac.createBiquadFilter();
      f.type = i ? "highpass" : "lowpass";
      f.frequency.value = i ? 3000 : 900;
      const g = ac.createGain();
      g.gain.value = i ? 0.05 : 0.5;
      s.connect(f).connect(g).connect(rainBus);
      s.start();
      return s;
    });

    // vinyl crackle
    const cbuf = ac.createBuffer(1, ac.sampleRate * 3, ac.sampleRate);
    const cd = cbuf.getChannelData(0);
    for (let i = 0; i < cd.length; i++) if (Math.random() < 0.0006) cd[i] = (Math.random() * 2 - 1) * 0.6;
    crackleSrc = ac.createBufferSource();
    crackleSrc.buffer = cbuf;
    crackleSrc.loop = true;
    const cg = ac.createGain();
    cg.gain.value = 0.35;
    crackleSrc.connect(cg).connect(beatsBus);
    crackleSrc.start();
  }

  function env(g, t, peak, a, r) {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t + a + r);
  }

  function keys(notes, t, dur) {
    notes.forEach((n, i) => {
      [-6, 6].forEach((det) => {
        const o = ac.createOscillator();
        o.type = "triangle";
        o.frequency.value = midi(n);
        o.detune.value = det + Math.sin(t * 0.7) * 8; // gentle wow & flutter
        const g = ac.createGain();
        env(g, t + i * 0.012, 0.05, 0.04, dur);
        o.connect(g).connect(beatsBus);
        o.start(t);
        o.stop(t + dur + 0.2);
      });
    });
  }

  function bass(n, t, dur) {
    const o = ac.createOscillator();
    o.type = "sine";
    o.frequency.value = midi(n - 12);
    const g = ac.createGain();
    env(g, t, 0.28, 0.02, dur);
    o.connect(g).connect(beatsBus);
    o.start(t);
    o.stop(t + dur + 0.1);
  }

  function kick(t) {
    const o = ac.createOscillator();
    o.frequency.setValueAtTime(130, t);
    o.frequency.exponentialRampToValueAtTime(42, t + 0.18);
    const g = ac.createGain();
    env(g, t, 0.9, 0.005, 0.3);
    o.connect(g).connect(beatsBus);
    o.start(t);
    o.stop(t + 0.4);
  }

  function noiseHit(t, type, freq, peak, len) {
    const s = ac.createBufferSource();
    s.buffer = hitBuf;
    const f = ac.createBiquadFilter();
    f.type = type;
    f.frequency.value = freq;
    const g = ac.createGain();
    env(g, t, peak, 0.003, len);
    s.connect(f).connect(g).connect(beatsBus);
    s.start(t);
    s.stop(t + len + 0.05);
  }

  function pluck(n, t) {
    const o = ac.createOscillator();
    o.type = "sine";
    o.frequency.value = midi(n);
    const g = ac.createGain();
    env(g, t, 0.07, 0.01, 0.9);
    const d = ac.createDelay();
    d.delayTime.value = SIX * 3;
    const fb = ac.createGain();
    fb.gain.value = 0.35;
    o.connect(g);
    g.connect(beatsBus);
    g.connect(d).connect(fb).connect(d);
    fb.connect(beatsBus);
    o.start(t);
    o.stop(t + 1.2);
  }

  function schedule() {
    while (nextTime < ac.currentTime + 0.15) {
      const swing = step % 2 ? SIX * 0.18 : 0;
      const t = nextTime + swing;
      if (state.beats) {
        const chord = CHORDS[bar % 4];
        if (step === 0) { keys(chord.slice(1), t, SIX * 14); bass(chord[0], t, SIX * 6); }
        if (step === 10) bass(chord[0] + 7, t, SIX * 4);
        if (step === 0 || step === 7 || step === 10) kick(t);
        if (step === 4 || step === 12) noiseHit(t, "bandpass", 1800, 0.35, 0.18);
        if (step % 2 === 0) noiseHit(t, "highpass", 7000, step % 4 ? 0.06 : 0.1, 0.05);
        if (Math.random() < 0.12 && step % 2 === 0) pluck(PENTA[(Math.random() * PENTA.length) | 0], t);
      }
      if (state.rain && Math.random() < 0.25) noiseHit(t + Math.random() * SIX, "bandpass", 2500 + Math.random() * 3000, 0.02, 0.02);
      nextTime += SIX;
      step = (step + 1) % 16;
      if (step === 0) bar++;
    }
  }

  function apply() {
    if (!master) return;
    const now = ac.currentTime;
    master.gain.setTargetAtTime(state.vol * 0.8, now, 0.2);
    beatsBus.gain.setTargetAtTime(state.beats ? 1 : 0, now, 0.3);
    rainBus.gain.setTargetAtTime(state.rain ? 0.6 : 0, now, 0.4);
  }

  return {
    start(opts) {
      Object.assign(state, opts);
      clearTimeout(stopTimer);
      if (!master) init();
      ac.resume();
      master.gain.value = 0;
      apply();
      nextTime = ac.currentTime + 0.1;
      clearInterval(timer);
      timer = setInterval(schedule, 40);
    },
    stop() {
      if (!master) return;
      clearInterval(timer);
      master.gain.setTargetAtTime(0, ac.currentTime, 0.2);
      stopTimer = setTimeout(() => ac.suspend(), 900);
    },
    // Spread the spectrum into n bands, 0..1 each.
    levels(n) {
      if (!analyser) return new Array(n).fill(0);
      analyser.getByteFrequencyData(bins);
      const per = Math.floor(bins.length / n);
      return Array.from({ length: n }, (_, i) => {
        let sum = 0;
        for (let j = i * per; j < (i + 1) * per; j++) sum += bins[j];
        return sum / per / 255;
      });
    },
    // A short synthesised goose honk; works whether or not the radio is on.
    honk(pitch = 1) {
      ctx().resume();
      const t = ac.currentTime;
      const out = ac.createGain();
      out.gain.setValueAtTime(0.0001, t);
      out.gain.exponentialRampToValueAtTime(0.25, t + 0.02);
      out.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);
      const band = ac.createBiquadFilter();
      band.type = "bandpass";
      band.frequency.value = 1100;
      band.Q.value = 1.2;
      band.connect(out).connect(ac.destination);
      [1, 1.5].forEach((m) => {
        const o = ac.createOscillator();
        o.type = "sawtooth";
        o.frequency.setValueAtTime(420 * m * pitch, t);
        o.frequency.exponentialRampToValueAtTime(300 * m * pitch, t + 0.25);
        o.connect(band);
        o.start(t);
        o.stop(t + 0.3);
      });
    },
    // The easter egg honk: low, loud and long, with a wobble and a sub rumble underneath.
    megaHonk() {
      ctx().resume();
      const t = ac.currentTime + 0.25; // land as the goose reaches full size
      const out = ac.createGain();
      out.gain.setValueAtTime(0.0001, t);
      out.gain.exponentialRampToValueAtTime(0.42, t + 0.05);
      out.gain.setValueAtTime(0.42, t + 0.8);
      out.gain.exponentialRampToValueAtTime(0.0001, t + 1.3);
      const band = ac.createBiquadFilter();
      band.type = "bandpass";
      band.frequency.value = 520;
      band.Q.value = 0.9;
      band.connect(out).connect(ac.destination);
      const wobble = ac.createOscillator();
      const depth = ac.createGain();
      wobble.frequency.value = 7;
      depth.gain.value = 9;
      wobble.connect(depth);
      [[1, "sawtooth"], [1.5, "sawtooth"], [0.5, "square"]].forEach(([m, type]) => {
        const o = ac.createOscillator();
        o.type = type;
        o.frequency.setValueAtTime(170 * m, t);
        o.frequency.linearRampToValueAtTime(150 * m, t + 0.8);
        o.frequency.exponentialRampToValueAtTime(95 * m, t + 1.3);
        depth.connect(o.frequency);
        o.connect(band);
        o.start(t);
        o.stop(t + 1.35);
      });
      wobble.start(t);
      wobble.stop(t + 1.35);
    },
    set(opts) {
      Object.assign(state, opts);
      apply();
    },
  };
})();
