# Project Images

- `my-photo.png` — About page profile photo, referenced directly in `src/pages/About.tsx`.
- `projects/<slug>/1.png, 2.png, ...` — per-project screenshots. Each project in `src/data/projects.ts` has a `slug` and an `images` array built from this folder; the first image is used as the card thumbnail on `/projects`, and the full set renders in the gallery on `/projects/:slug`.

When adding a new project, create `public/images/projects/<slug>/` with numbered screenshots and add a matching entry to `src/data/projects.ts`.
