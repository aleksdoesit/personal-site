# personal-site

Personal portfolio (React + TypeScript + Vite). Live at [imaleks.dev](https://imaleks.dev).

## Scripts

- `npm run dev` - local dev server
- `npm run build` - production build to `dist/`
- `npm run preview` - serve `dist/` locally
- `npm run lint` - ESLint

## Deploy

**Important (Vite):** Production is whatever `npm run build` writes to **`dist/`**. The root `index.html` is only for development and points at `/src/main.tsx`. If your host serves the repo root instead of `dist/`, the browser will request `.tsx` files and you will see **MIME type `application/octet-stream`** and a broken app.

### Netlify

[`netlify.toml`](netlify.toml) and [`.nvmrc`](.nvmrc) configure:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node:** `20` via `NODE_VERSION` - Netlify’s older default Node can crash the build inside `tsc` with **`SyntaxError: Unexpected token ?`** (TypeScript 5 uses modern JS). If you set `NODE_VERSION` in the Netlify UI, use **`20`** or remove it so `netlify.toml` wins.

**Site configuration → Build & deploy → Build settings** should match the file (or stay empty to use `netlify.toml`). Trigger a new deploy after pushing changes.

### Other hosts

Upload or sync the **contents** of `dist/` to the site root (not the whole monorepo).

### Assets

Ensure files exist under `public/assets/` so they are copied into `dist/assets/` (images, CV PDF, favicon PNGs under `public/assets/Favicon/` including those referenced in [`site.webmanifest`](public/assets/Favicon/site.webmanifest)).
