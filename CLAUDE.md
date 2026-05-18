# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start Vite dev server (localhost:5173)
npm run build      # production build → dist/
npm run preview    # preview production build locally
npm run lint       # ESLint check
npm run typecheck  # TypeScript type check (no emit)
```

```bash
# Docker (local dev with hot-reload)
docker compose up --build
# App available at http://localhost:5173
```

There are no automated tests in this project.

## Architecture

Single-page React 18 + TypeScript portfolio site built with Vite, styled with Tailwind CSS, and deployed to Netlify.

**Routing** — `react-router-dom` v7 with client-side routing. All unknown paths redirect to `/`. Active routes: `/`, `/about`, `/projects`, `/skills`, `/experience`, `/contact`. The `/testimonials` route still exists in `App.tsx` but the page is hidden from nav and footer. Netlify is configured (`netlify.toml` + `public/_redirects`) to serve `index.html` for every route so deep links work after deploy.

**Page layout** — `App.tsx` wraps every page in a persistent `<Navbar>` / `<Footer>` shell with `<main className="flex-1">` in between, ensuring the footer always sticks to the bottom.

**Animations** — `AnimatedSection` (Intersection Observer, fires once on enter) accepts `direction: 'up' | 'left' | 'right' | 'none'` and an optional `delay` (ms). Wrap any block you want to slide in on scroll.

**Design tokens** — Two custom Tailwind color palettes: `navy` (50–900) and `gold` (50–900). Reusable utility classes are defined in `src/index.css` under `@layer components`:
- `.section-heading` — large gradient heading
- `.section-subheading` — muted body text under headings
- `.btn-primary` / `.btn-outline` — CTA buttons
- `.card` — elevated white card with hover lift
- `.gradient-text` — navy-to-gold gradient text
- `.gold-underline` — pseudo-element underline accent

**Projects data** — Stored in `src/data/projects.json` (not inline in the component). Each entry has `title`, `description`, `stack`, `aiAssisted`, `isProduction?`, `hasGithub?`, `demoUrl?`, and `thumbnail?` (path relative to `public/`, e.g. `"images/my-project.png"`). Add or update projects by editing the JSON file only. Thumbnail images go in `public/images/` — see `public/images/README.md` for the filename map. When no thumbnail is provided the card falls back to a gradient accent bar.

**Contact form** — Wired to **Netlify Forms**. The form POSTs to `/` with `form-name: contact` via `fetch`. A shadow `<form data-netlify="true">` in `index.html` lets Netlify detect the form at build time (required for React SPAs). The form does **not** work locally — use `netlify dev` (Netlify CLI) to test it. After the first Netlify deploy, enable email notifications in the Netlify dashboard under **Forms → contact → Form notifications**.

**About photo** — Served from `public/images/my-photo.png`. Referenced in `src/pages/About.tsx` as `src="/images/my-photo.png"` with `object-cover object-top` so the face stays centered in the circular crop.

**Supabase** — `@supabase/supabase-js` is installed but not yet wired up.

**No state management library** — all state is local `useState`. No context or global store.
