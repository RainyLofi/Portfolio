# rainylofi.xyz

Personal portfolio — Roblox systems, UI and tooling built for GAR / SWRP.

Plain static site (no build step): `index.html`, `css/`, `js/`, `assets/`.

- **Edit content** in `js/data.js` (features, showcase, tools, stack, gallery).
- **Preview locally:** `python -m http.server 5173` then open http://127.0.0.1:5173
- **Deploy:** push to `main`, then on the VPS: `cd /var/www/Portfolio && git pull`

The lo-fi radio is generated live with the Web Audio API (`js/lofi.js`) — no audio files.
