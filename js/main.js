(() => {
  const S = window.SITE;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  $("#year").textContent = new Date().getFullYear();

  /* ---------- rain canvas ---------- */
  const cv = $("#rain");
  const ctx = cv.getContext("2d");
  let drops = [];
  function sizeRain() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    cv.width = innerWidth * dpr;
    cv.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round((innerWidth * innerHeight) / 9000);
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
      c: Math.random() < 0.55 ? "167,139,250" : "96,165,250",
    };
  }
  function rain() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.lineWidth = 1;
    for (const d of drops) {
      ctx.strokeStyle = `rgba(${d.c},${d.a})`;
      ctx.beginPath();
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x - d.len * 0.15, d.y + d.len);
      ctx.stroke();
      d.y += d.v;
      d.x -= d.v * 0.15;
      if (d.y > innerHeight) Object.assign(d, newDrop(false));
    }
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

  /* ---------- terminal typewriter ---------- */
  const script = [
    ["cmd", "whoami"],
    ["out", "RainyLofi — Roblox developer · GAR / SWRP"],
    ["cmd", "cat focus.txt"],
    ["out", "gameplay systems · game UI · backend APIs · dev tooling"],
    ["cmd", "cat education.txt"],
    ["out", "BSc Software Engineering — July 2022"],
    ["cmd", "play lofi --with rain"],
    ["out", "♪ now playing… (hit “lofi radio” up top)"],
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
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  type();

  /* ---------- content ---------- */
  $("#stack").innerHTML = S.stack.map((s) => `<span class="pill">${esc(s)}</span>`).join("");

  $("#features").innerHTML = S.features
    .map((f) => `
      <article class="feature reveal">
        <div class="media">
          <video muted loop playsinline preload="none" poster="${f.video}.webp" aria-label="${esc(f.title)} gameplay clip">
            <source src="${f.video}.mp4" type="video/mp4">
          </video>
          <span class="badge">● rec</span>
        </div>
        <div class="info">
          <span class="kicker">${esc(f.kicker)}</span>
          <h3>${esc(f.title)}</h3>
          <p>${esc(f.body)}</p>
          <div class="tags">${f.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
        </div>
      </article>`)
    .join("");

  const card = (c) => `
    <article class="card reveal">
      <div class="thumb" data-full="${c.img}" data-cap="${esc(c.title)}"><img src="${c.img}" alt="${esc(c.title)}" loading="lazy"></div>
      <div class="body">
        <h4>${esc(c.title)}</h4>
        <p>${esc(c.body)}</p>
        ${c.tags ? `<div class="tags">${c.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>` : ""}
      </div>
    </article>`;
  $("#showcase").innerHTML = S.showcase.map(card).join("");
  $("#projects").innerHTML = S.projects.map(card).join("");

  $("#toolsList").innerHTML = S.tools
    .map((t) => `
      <article class="tool reveal">
        <div class="cmd"><b>$</b> cd ~/projects/${esc(t.name)}</div>
        <h4>${t.icon ? `<img src="${t.icon}" alt="" loading="lazy">` : ""}${esc(t.name)}</h4>
        <div class="lang">${esc(t.lang)}</div>
        <p>${esc(t.body)}</p>
      </article>`)
    .join("");

  // icons, characters & logos look better centred on a glow than cropped
  const containCats = new Set(["art", "char", "brand"]);
  $("#grid").innerHTML = S.gallery
    .map(([p, cat, cap]) => {
      const src = `assets/img/${p}.webp`;
      return `<figure class="tile${containCats.has(cat) ? " contain" : ""}" data-cat="${cat}" data-full="${src}" data-cap="${esc(cap)}">
        <img src="${src}" alt="${esc(cap)}" loading="lazy"><span>${esc(cap)}</span></figure>`;
    })
    .join("");

  $("#filters").addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    document.querySelectorAll("#filters button").forEach((x) => x.classList.toggle("on", x === b));
    const f = b.dataset.f;
    document.querySelectorAll(".tile").forEach((t) => t.classList.toggle("hide", f !== "all" && t.dataset.cat !== f));
  });

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
  document.querySelectorAll(".feature video").forEach((v) => {
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
    list = [...document.querySelectorAll("[data-full]")].filter((el) => !el.classList.contains("hide"));
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
  btn.addEventListener("click", () => {
    const on = btn.getAttribute("aria-pressed") !== "true";
    btn.setAttribute("aria-pressed", on);
    panel.hidden = !on;
    if (on) window.Lofi.start({ beats: $("#rpBeats").checked, rain: $("#rpRain").checked, vol: +$("#rpVol").value });
    else window.Lofi.stop();
  });
  $("#rpBeats").addEventListener("change", (e) => window.Lofi.set({ beats: e.target.checked }));
  $("#rpRain").addEventListener("change", (e) => window.Lofi.set({ rain: e.target.checked }));
  $("#rpVol").addEventListener("input", (e) => window.Lofi.set({ vol: +e.target.value }));
  document.addEventListener("click", (e) => {
    if (!panel.hidden && !panel.contains(e.target) && !btn.contains(e.target)) panel.hidden = true;
  });
})();
