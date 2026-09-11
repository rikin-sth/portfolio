# Rikin Bahadur Shrestha Portfolio

A single-page developer portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion. All content is sourced from Rikin's resume and structured as data, separate from presentation.

## Tech stack

- **React 19 + TypeScript** — component architecture
- **Vite** — build tooling and dev server
- **Tailwind CSS v4** — styling (CSS-first `@theme` configuration, no `tailwind.config.js` needed)
- **Framer Motion** — section reveals, hover states, page transitions (respects `prefers-reduced-motion`)
- **Lucide React** — iconography (GitHub/LinkedIn marks are hand-rolled SVGs, since brand icons aren't in Lucide's icon set)

## Project structure

```
src/
  components/
    Nav.tsx, Footer.tsx        # layout chrome
    sections/                  # one file per page section (Hero, About, Experience, Work, Research, Skills, Education, Contact)
    ui/                        # reusable primitives (Button, Tag, Reveal, SectionHeading, BrandIcons)
  data/
    portfolio.ts                # ALL site content lives here — edit this file, not the components
  hooks/
    useActiveSection.ts         # scrollspy for nav highlighting
  lib/
    utils.ts                    # small helpers (cn, scrollToSection)
  index.css                     # design tokens (colors, type, radius) + base styles
  App.tsx                       # assembles sections
public/
  resume.pdf                    # linked from the nav + hero "Resume" buttons
  favicon.svg, og-image.svg
.github/workflows/deploy.yml    # GitHub Pages deploy on push to main
```

## Local development

```bash
npm install
npm run dev
```

Opens the dev server (default: http://localhost:5173).

## Build

```bash
npm run build
```

Type-checks with `tsc -b` and outputs a production build to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Customizing content

Almost everything on the page is driven by **`src/data/portfolio.ts`**: personal info and social links, the about-section narrative, work experience, projects, the research write-up, skills groups, education, certifications, and publications. Update that file rather than the section components for content changes.

A few fields are intentionally left blank as `TODO`s because they weren't available on the source resume — fill these in when you have them:

- `personal.linkedin` / `personal.github` — the resume lists these as short handles (`linkedin/rikin-shrestha`, `github/Rikin148`); confirm the full profile URLs.
- `projects[].github` / `projects[].demo` — no repository or live-demo links were provided for the three independent projects (2D Space Shooter, Internship DBMS, SRMS). Add them and the corresponding links will appear automatically; until then, those buttons stay hidden.

## Deploying to GitHub Pages

This repo is pre-configured for GitHub Pages via `.github/workflows/deploy.yml`.

1. **Set the base path.** Open `vite.config.ts` and set `REPO_NAME` to your repository's name (this determines the `/<repo>/` prefix Vite uses for all asset URLs). If you're deploying to a `username.github.io` root site or a custom domain instead, set `REPO_NAME` to `''`.
2. **Push to GitHub** (see below).
3. In your repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
4. Push to `main` — the workflow builds the site and deploys it automatically. Subsequent pushes to `main` redeploy automatically.

Your site will be live at `https://<username>.github.io/<repository>/`.

## Pushing to GitHub

From inside the project directory:

```bash
git remote add origin https://github.com/<username>/<repository>.git
git branch -M main
git push -u origin main
```

(The repo already has an initial commit — see below.)
