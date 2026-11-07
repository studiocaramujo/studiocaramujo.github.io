# Studio Caramujo

Architecture office website (React + Vite), deployed to GitHub Pages.

## Develop
```
npm install
npm run dev
```

## Where to edit
- `src/data/site.js` — office name, contact, form endpoint, about text
- `src/data/projects.js` — portfolio projects (images go in `public/images/`)
- `src/data/process.js` — the steps from briefing to execution
- `src/styles.css` — color palette lives in the `:root` variables at the top
- `public/logo.svg` — replace with the real logo

## Deploy
Push to `main`; the GitHub Actions workflow builds and publishes to Pages
(Settings → Pages → Source: GitHub Actions).
