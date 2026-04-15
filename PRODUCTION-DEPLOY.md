# Production deployment (Knight InfoTek website)

Single source of truth for shipping **Knight-Infotek-web2** to the VPS. Older notes in `QUICK-DEPLOY.md` and `DEPLOYMENT-WORKFLOW.md` may repeat details; follow this doc when they conflict.

## How production works today

| Layer | Role |
|--------|------|
| **Nginx** | TLS termination on `knightinfotek.com` / `www.knightinfotek.com`, proxies `/` to the Node app. See `nginx-knightinfotek.conf` in the repo. |
| **PM2** | Runs `node dist/index.cjs` with **`PORT=5001`**. Process name: **`knightinfotek`**. Config: `ecosystem.config.cjs`. |
| **Express** | Serves the Vite build from **`dist/public`** (SPA fallback to `index.html`). Blog and docs assets come from **`content/`** copied into `dist/public/content` at build time. |

**Important:** The live Nginx config proxies to **localhost:5001**. You do **not** need to copy `dist/public` into `/var/www/knightinfotek.com/html` for the main site (that tree is mainly for ACME `/.well-known` on HTTP). If you ever switch to **static-only** Nginx, change Nginx accordingly and use a different deploy step.

**Multi-site VPS:** Do not change **5001** in `ecosystem.config.cjs` without updating Nginx and avoiding clashes with other apps.

---

## One-time VPS setup

1. **Directory:** App lives at **`/var/www/knightinfotek.com`** (adjust if yours differs).
2. **Clone (first time only):**
   ```bash
   sudo mkdir -p /var/www/knightinfotek.com
   sudo chown "$USER:$USER" /var/www/knightinfotek.com
   cd /var/www/knightinfotek.com
   git clone https://github.com/brkn404/Knight-Infotek-web2.git .
   ```
3. **Git safe directory (if needed):**
   ```bash
   git config --global --add safe.directory /var/www/knightinfotek.com
   ```
4. **Install Node** (18+), **npm**, **PM2** (`npm install -g pm2`).
5. **Install deps and build:**
   ```bash
   cd /var/www/knightinfotek.com
   npm install
   npm run build
   ```
6. **PM2:**
   ```bash
   mkdir -p logs
   pm2 start ecosystem.config.cjs
   pm2 save
   pm2 startup   # follow the printed instructions once
   ```
7. **Nginx:** Install the site config (see `nginx-knightinfotek.conf`), `sudo nginx -t`, `sudo systemctl reload nginx`.
8. **`.env`:** If the server uses DB/API features, place `.env` in `/var/www/knightinfotek.com` (not committed). For a static marketing SPA, defaults may be enough.

---

## Every release: procedure

### A. On your machine (before the VPS)

1. **Sync content** (blog + docs from `content/` into `client/public` for local dev; production build also copies `content/` → `dist`):
   ```bash
   npm run sync:content
   ```
   Skip only if you did not touch `content/` and already synced.

2. **Verify:**
   ```bash
   npm run check
   npm run build
   ```

3. **Commit and push** (include `content/blog`, `content/docs`, and source changes):
   ```bash
   git status
   git add -A
   git commit -m "Describe the change"
   git push origin main
   ```

### B. On the VPS

**Option 1 – use the repo script (recommended):**

```bash
cd /var/www/knightinfotek.com
chmod +x deploy.sh   # once
./deploy.sh
```

**Option 2 – manual (same as `deploy.sh`):**

```bash
cd /var/www/knightinfotek.com
git pull origin main
npm install
npm run build
mkdir -p logs
pm2 restart knightinfotek
pm2 status
```

### C. Smoke test

- Open `https://www.knightinfotek.com` and `https://knightinfotek.com` (hard refresh).
- Spot-check **Blog**, a **blog post**, **/faq**, **/privacy**, **/terms**.
- Optional: `curl -sI https://www.knightinfotek.com/sitemap.xml`

### D. If something breaks

```bash
cd /var/www/knightinfotek.com
pm2 logs knightinfotek --lines 80
sudo tail -n 50 /var/log/nginx/knightinfotek.com-error.log
```

Rollback: `git checkout <previous-commit>`, then `npm install && npm run build && pm2 restart knightinfotek`.

---

## Build-only deploy to Nginx `html` (optional / legacy)

Only if you intentionally serve **only static files** from `html/` **without** the Node proxy. The stock `nginx-knightinfotek.conf` in this repo **does not** do that for HTTPS.

On a machine that has `/var/www/knightinfotek.com/html`:

```bash
export BUILD_TO_HTML=true
npm run build
```

`script/build.ts` will copy `dist/public/*` into `/var/www/knightinfotek.com/html` when that path exists. You must align Nginx `root` / `try_files` with that layout.

---

## Checklist (printable)

- [ ] `npm run sync:content` (when `content/` changed)
- [ ] `npm run check` && `npm run build` locally
- [ ] `git push origin main`
- [ ] VPS: `git pull origin main` && `npm install` && `npm run build`
- [ ] VPS: `pm2 restart knightinfotek`
- [ ] Browser smoke test + `sitemap.xml`

---

## Repository

- **Remote:** `https://github.com/brkn404/Knight-Infotek-web2.git`
- **Branch:** `main`
