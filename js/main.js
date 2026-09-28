(() => {
  const S = window.SITE;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const tags = (list) => `<div class="tags">${list.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>`;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  $("#year").textContent = new Date().getFullYear();

  /* ---------- rain canvas ---------- */
  // Heavier rain and splashes while the radio's rain track is playing.
  const cv = $("#rain");
  const ctx = cv.getContext("2d");
  let drops = [];
  let splashes = [];
  let intensity = 1;
  let target = 1;
  function sizeRain() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    cv.width = innerWidth * dpr;
    cv.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round((innerWidth * innerHeight) / 5000);
    drops = Array.from({ length: n }, () => newDrop(true));
  }
  function newDrop(anywhere) {
    const z = Math.random();
    return {
      x: Math.random() * innerWidth * 1.1,
      y: anywhere ? Math.random() * innerHeight : -20,
      len: 8 + z * 18,
      v: 4 + z * 9,
      a: 0.08 + z * 0.35,
      z,
      c: Math.random() < 0.6 ? "52,224,234" : "147,197,253",
    };
  }
  function rain() {
    intensity += (target - intensity) * 0.02;
    const active = Math.floor(drops.length * Math.min(1, 0.55 * intensity));
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.lineWidth = 1;
    for (let i = 0; i < active; i++) {
      const d = drops[i];
      ctx.strokeStyle = `rgba(${d.c},${d.a})`;
      ctx.beginPath();
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x - d.len * 0.15, d.y + d.len);
      ctx.stroke();
      d.y += d.v;
      d.x -= d.v * 0.15;
      if (d.y > innerHeight) {
        if (d.z > 0.55 && splashes.length < 120) {
          for (let k = 0; k < 3; k++) {
            splashes.push({ x: d.x, y: innerHeight - 2, vx: (Math.random() - 0.5) * 2.4, vy: -1.5 - Math.random() * 2, life: 1, c: d.c });
          }
        }
        Object.assign(d, newDrop(false));
      }
    }
    for (const s of splashes) {
      s.x += s.vx;
      s.y += s.vy;
      s.vy += 0.18;
      s.life -= 0.04;
      ctx.fillStyle = `rgba(${s.c},${Math.max(0, s.life) * 0.5})`;
      ctx.fillRect(s.x, s.y, 1.5, 1.5);
    }
    splashes = splashes.filter((s) => s.life > 0);
    requestAnimationFrame(rain);
  }
  if (!reduced) {
    sizeRain();
    addEventListener("resize", sizeRain);
    requestAnimationFrame(rain);
  }

  /* ---------- nav ---------- */
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("scrolled", scrollY > 30);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  $("#menuBtn").addEventListener("click", () => $("#links").classList.toggle("open"));
  $("#links").addEventListener("click", (e) => e.target.tagName === "A" && $("#links").classList.remove("open"));

  const navLinks = [...document.querySelectorAll(".links a")];
  const spy = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
    }),
    { rootMargin: "-45% 0px -50% 0px" }
  );
  document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));

  /* ---------- live stats ---------- */
  const compact = (n) => {
    if (n >= 1e6) return (n / 1e6).toFixed(n >= 1e8 ? 0 : 1).replace(/\.0$/, "") + "M";
    if (n >= 1e3) return Math.round(n / 1e3) + "K";
    return String(n);
  };
  let stats = { ...S.stats };
  let gen = 0; // bumps on every render so an in-flight count-up never overwrites newer numbers
  function renderStats(animate) {
    const mine = ++gen;
    document.querySelectorAll("[data-stat]").forEach((el) => {
      const end = stats[el.dataset.stat];
      if (end == null) return;
      if (!animate || reduced) { el.textContent = compact(end); return; }
      const t0 = performance.now();
      const step = (t) => {
        if (mine !== gen) return;
        const p = Math.min(1, (t - t0) / 1400);
        el.textContent = compact(Math.round(end * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }
  renderStats(true);
  fetch("data/stats.json", { cache: "no-store" })
    .then((r) => (r.ok ? r.json() : null))
    .then((live) => {
      // ignore data older than a day so a broken cron never shows stale numbers
      if (live && Date.now() / 1000 - live.updated < 86400) { stats = { ...stats, ...live }; renderStats(false); }
    })
    .catch(() => {});

  /* ---------- terminal typewriter ---------- */
  const script = [
    ["cmd", "whoami"],
    ["out", "RainyLofi · developer of Star Wars: Roleplay · Partner @ Blueprint"],
    ["cmd", "cat stack.txt"],
    ["out", "luau · rojo · node.js · express · mongodb · discord.js"],
    ["cmd", "play lofi --with rain"],
    ["out", "♪ hit “lofi radio” up top"],
  ];
  const term = $("#term");
  async function type() {
    const prompt = '<span class="p">rainy@coruscant:~$</span> ';
    let html = "";
    for (const [kind, text] of script) {
      if (kind === "cmd") {
        html += prompt;
        for (const ch of text) {
          html += esc(ch);
          term.innerHTML = html + '<span class="caret-blink">█</span>';
          if (!reduced) await wait(45 + Math.random() * 60);
        }
        html += "\n";
      } else {
        html += `<span class="o">${esc(text)}</span>\n`;
        term.innerHTML = html;
        if (!reduced) await wait(350);
      }
    }
    term.innerHTML = html + prompt + '<span class="caret-blink">█</span>';
  }
  type();

  /* ---------- content ---------- */
  const video = (src, label) =>
    `<video muted loop playsinline preload="none" poster="${src}.webp" aria-label="${esc(label)} gameplay clip"><source src="${src}.mp4" type="video/mp4"></video>`;

  /* ---------- skills ---------- */
  const T0 = 2018, T1 = 2027, NOW = 2026.74;
  const pos = (t) => (((t - T0) / (T1 - T0)) * 100).toFixed(2) + "%";
  const icon = (inner) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
  const years = [];
  for (let y = T0; y < T1; y++) years.push(y);
  $("#skillmap").style.setProperty("--ai", pos(S.ai.since));
  $("#skillmap").innerHTML = `
    <div class="sm-head" aria-hidden="true">
      <span></span>
      <div class="sm-axis">
        ${years.map((y) => `<span style="left:${pos(y)}">${y}</span>`).join("")}
        <b class="sm-ai-label" style="left:${pos(S.ai.since)}">AI-assisted &rarr;</b>
      </div>
    </div>
    ${S.skills
      .map((k, i) => `
      <div class="sm-row" role="listitem" data-i="${i}" tabindex="0" aria-label="${esc(k.name)}, since ${k.since}">
        <span class="sm-label">${icon(k.svg)}<span>${esc(k.name)}</span></span>
        <div class="sm-track">
          <div class="sm-bar" style="left:${pos(k.items[0][1])};width:calc(${pos(NOW)} - ${pos(k.items[0][1])})"></div>
          ${k.items
            .map(([when, t, what]) => `<span class="sm-dot${t >= S.ai.since ? " ai" : ""}" style="left:${pos(t)}" data-tip="${esc(when)} · ${esc(what)}"></span>`)
            .join("")}
        </div>
      </div>`)
      .join("")}`;

  $("#skillCards").innerHTML = S.skills
    .map((k, i) => `
      <article class="skill hud reveal" id="skill-${i}">
        <header>
          <span class="s-icon">${icon(k.svg)}</span>
          <div><h4>${esc(k.name)}</h4><span class="s-since">since ${k.since}</span></div>
        </header>
        <p class="s-blurb">${esc(k.blurb)}</p>
        <ul class="s-items">
          ${k.items.map(([when, , what]) => `<li><span class="s-when">${esc(when)}</span><span>${esc(what)}</span></li>`).join("")}
        </ul>
        <p class="s-learnt"><span>what I learnt</span>${esc(k.learnt)}</p>
      </article>`)
    .join("");

  // Clicking (or pressing Enter on) a timeline row jumps to its card and flashes it.
  const jump = (row) => {
    const card = $(`#skill-${row.dataset.i}`);
    card.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
    card.classList.remove("flash");
    void card.offsetWidth;
    card.classList.add("flash");
  };
  document.querySelectorAll(".sm-row").forEach((row) => {
    row.addEventListener("click", () => jump(row));
    row.addEventListener("keydown", (e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), jump(row)));
  });

  $("#aiIntro").textContent = S.ai.intro;
  $("#aiSteps").innerHTML = S.ai.steps
    .map(([title, text], i) => `<li><span class="ps-num">${i + 1}</span><div><h4>${esc(title)}</h4><p>${esc(text)}</p></div></li>`)
    .join("");
  $("#aiFeats").innerHTML = S.ai.features
    .map(([when, what]) => `<li><span class="af-hash">feat</span><span class="af-when">${esc(when)}</span><span>${esc(what)}</span></li>`)
    .join("");
  $("#aiStat").textContent = S.ai.stat;

  $("#projects-list").innerHTML = S.projects
    .map((p) => {
      const link = (inner, cls = "") => (p.url ? `<a class="${cls}" href="${p.url}" target="_blank" rel="noopener">${inner}</a>` : inner);
      const thumb = `<div class="thumb"><img src="${p.img}" alt="${esc(p.title)}" loading="lazy">${p.badge ? `<span class="p-badge">${esc(p.badge)}</span>` : ""}</div>`;
      const live = p.featured
        ? `<div class="p-stats">
            <div><b data-stat="visits"></b><span>visits</span></div>
            <div><b data-stat="favorites"></b><span>favourites</span></div>
            <div><b data-stat="upvotes"></b><span>upvotes</span></div>
            <div><b data-stat="groupMembers"></b><span>group members</span></div>
            ${(p.facts || []).map(([n, l]) => `<div><b>${esc(n)}</b><span>${esc(l)}</span></div>`).join("")}
          </div>`
        : "";
      return `
      <article class="card project hud${p.featured ? " featured" : ""} reveal">
        ${link(thumb, "thumb-link")}
        <div class="body">
          <h4>${link(esc(p.title))}</h4>
          <p>${esc(p.body)}</p>
          ${live}
          ${p.url ? link("play on Roblox &#8599;", "play") : ""}
        </div>
      </article>`;
    })
    .join("");
  // fill the project stats without restarting the hero count-up
  document.querySelectorAll("#projects-list [data-stat]").forEach((el) => (el.textContent = compact(stats[el.dataset.stat])));

  $("#features").innerHTML = S.features
    .map((f) => `
      <article class="feature hud${f.lead ? " lead" : ""} reveal">
        <div class="media">
          ${video(f.video, f.title)}
          <span class="badge">● rec · ${f.year}</span>
        </div>
        <div class="info">
          <span class="kicker">${esc(f.kicker)}</span>
          <h3>${esc(f.title)}</h3>
          <p>${esc(f.body)}</p>
          ${tags(f.tags)}
        </div>
      </article>`)
    .join("");

  $("#showcase").innerHTML = S.showcase
    .map((c) => `
      <article class="card hud reveal">
        ${c.video
          ? `<div class="thumb media-thumb">${video(c.video, c.title)}</div>`
          : `<div class="thumb" data-full="${c.img}" data-cap="${esc(c.title)}"><img src="${c.img}" alt="${esc(c.title)}" loading="lazy"></div>`}
        <div class="body">
          <h4>${esc(c.title)}</h4>
          <p>${esc(c.body)}</p>
          ${tags(c.tags)}
        </div>
      </article>`)
    .join("");

  $("#places").innerHTML = S.places.map((p) => `<span class="place">${esc(p)}</span>`).join("");

  $("#practices").innerHTML = S.practices
    .map((p, i) => `
      <article class="practice reveal">
        <span class="p-num">${String(i + 1).padStart(2, "0")}</span>
        <h4>${esc(p.title)}</h4>
        <p>${esc(p.body)}</p>
      </article>`)
    .join("");

  $("#toolsList").innerHTML = S.tools
    .map((t) => `
      <article class="tool reveal">
        <div class="cmd"><b>$</b> cd ~/projects/${esc(t.name)}</div>
        <h4>${t.icon ? `<img src="${t.icon}" alt="" loading="lazy">` : ""}${esc(t.name)}${t.note ? `<span class="t-note">${esc(t.note)}</span>` : ""}</h4>
        <div class="lang">${esc(t.lang)}</div>
        <p>${esc(t.body)}</p>
      </article>`)
    .join("");

  $("#stackList").innerHTML = Object.entries(S.stack)
    .map(([group, items]) => `
      <div class="stack-group">
        <span class="stack-key">${esc(group)} =</span>
        <div class="stack-items">${items.map((s) => `<span class="pill">${esc(s)}</span>`).join("")}</div>
      </div>`)
    .join("");

  // Short hashes derived from the text, so they stay stable between visits.
  const hash = (s) => {
    let h = 2166136261;
    for (const ch of s) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
    return (h >>> 0).toString(16).padStart(8, "0").slice(0, 7);
  };
  $("#logList").innerHTML = [...S.log]
    .reverse()
    .map(([when, msg, ref]) => `
      <li>
        <span class="l-hash">${hash(when + msg)}</span>
        ${ref ? `<span class="l-ref">(${esc(ref)})</span>` : ""}
        <span class="l-when">${esc(when)}</span>
        <span class="l-msg">${esc(msg)}</span>
      </li>`)
    .join("");

  /* ---------- reveal + video autoplay ---------- */
  const rev = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); rev.unobserve(e.target); }
    }),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => rev.observe(el));

  const vids = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      const v = e.target;
      if (e.isIntersecting && !reduced) v.play().catch(() => {});
      else v.pause();
    }),
    { threshold: 0.35 }
  );
  document.querySelectorAll("main video").forEach((v) => {
    vids.observe(v);
    if (reduced) v.controls = true;
  });

  /* ---------- lightbox ---------- */
  const lb = $("#lightbox");
  const lbImg = $("#lbImg");
  const lbCap = $("#lbCap");
  let list = [];
  let idx = 0;
  function show(i) {
    idx = (i + list.length) % list.length;
    lbImg.src = list[idx].dataset.full;
    lbImg.alt = list[idx].dataset.cap;
    lbCap.textContent = list[idx].dataset.cap;
  }
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-full]");
    if (!t) return;
    list = [...document.querySelectorAll("[data-full]")];
    show(list.indexOf(t));
    lb.hidden = false;
    document.body.style.overflow = "hidden";
  });
  const close = () => { lb.hidden = true; document.body.style.overflow = ""; };
  $(".lb-close").addEventListener("click", close);
  $(".lb-prev").addEventListener("click", () => show(idx - 1));
  $(".lb-next").addEventListener("click", () => show(idx + 1));
  lb.addEventListener("click", (e) => e.target === lb && close());
  addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(idx - 1);
    if (e.key === "ArrowRight") show(idx + 1);
  });

  /* ---------- lofi radio ---------- */
  const btn = $("#radioBtn");
  const panel = $("#radioPanel");
  const bars = [...document.querySelectorAll("#eq i")];
  let playing = false;
  function meter() {
    if (!playing) { bars.forEach((b) => (b.style.height = "")); return; }
    const lv = window.Lofi.levels(bars.length);
    bars.forEach((b, i) => (b.style.height = `${20 + lv[i] * 80}%`));
    requestAnimationFrame(meter);
  }
  const syncRain = () => (target = playing && $("#rpRain").checked ? 2 : 1);
  btn.addEventListener("click", () => {
    playing = btn.getAttribute("aria-pressed") !== "true";
    btn.setAttribute("aria-pressed", playing);
    panel.hidden = !playing;
    if (playing) {
      window.Lofi.start({ beats: $("#rpBeats").checked, rain: $("#rpRain").checked, vol: +$("#rpVol").value });
      requestAnimationFrame(meter);
    } else window.Lofi.stop();
    syncRain();
  });
  $("#rpBeats").addEventListener("change", (e) => window.Lofi.set({ beats: e.target.checked }));
  $("#rpRain").addEventListener("change", (e) => { window.Lofi.set({ rain: e.target.checked }); syncRain(); });
  $("#rpVol").addEventListener("input", (e) => window.Lofi.set({ vol: +e.target.value }));
  document.addEventListener("click", (e) => {
    if (!panel.hidden && !panel.contains(e.target) && !btn.contains(e.target)) panel.hidden = true;
  });

  /* ---------- goose ---------- */
  // Every goose shares the footer goose's drawing; data-pitch makes the small one honk higher.
  const geese = [...document.querySelectorAll(".goose")];
  geese.forEach((g) => { if (!g.innerHTML.trim()) g.innerHTML = $("#goose").innerHTML; });
  let honks = 0;
  geese.forEach((g) => g.addEventListener("click", () => {
    honks++;
    window.Lofi.honk(+g.dataset.pitch || 1);
    g.classList.remove("hop");
    void g.offsetWidth; // restart the animation
    g.classList.add("hop");
    geese.forEach((x) => (x.title = honks === 1 ? "honk" : `honk ×${honks}`));
  }));
})();
