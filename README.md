# rainylofi.xyz

Personal portfolio: Roblox systems, UI and tooling built for GAR / SWRP.

Plain static site (no build step): `index.html`, `css/`, `js/`, `assets/`.

- **Edit content** in `js/data.js` (features, showcase, tools, stack).
- **Preview locally:** `python -m http.server 5173` then open http://127.0.0.1:5173
- **Deploy:** bump the `?v=` version on the CSS/JS and replaced-image links in `index.html` (Cloudflare caches them for hours), push to `main`, then on the VPS: `cd /var/www/Portfolio && git pull`

The lo-fi radio is generated live with the Web Audio API (`js/lofi.js`), so there are no audio files.
