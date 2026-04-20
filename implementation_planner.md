# Implementation Planner — CRA to Next.js 14 (Pastel Edition)

This planner converts `refactor_plan.md` into an executable migration path for the current repo (`react-scripts` + React 16 + styled-components).

## 0) Snapshot and branch strategy

- Baseline snapshot: `legacy_snapshot/` (created from current code, excluding `.git`, `node_modules`, `build`).
- Keep old app deployable until cutover.
- Recommended branches:
  - `main` (current production)
  - `refactor/next-foundation`
  - feature branches per phase (`refactor/p1-foundation`, `refactor/p2-content`, etc.)

## 1) Current-state mapping

- App shell + theme
  - Current: `src/App.js`, `src/theme.js`, `src/global.js`
  - Target: `app/layout.tsx`, `app/globals.css`, `components/ThemeToggle.tsx`
- Routing
  - Current: `src/containers/Main.js` (`react-router-dom`)
  - Target: App Router pages (`app/page.tsx`, `app/projects/page.tsx`, `app/writing/page.tsx`)
- Content/config
  - Current: `src/portfolio.js`, `src/shared/*.json`
  - Target: typed config in `config/site.ts`, `config/skills.ts`, `config/experience.ts`, `config/featured-repos.ts`
- Sections/components
  - Current: mixed under `src/pages`, `src/containers`, `src/components`
  - Target: `app/_sections/*` + reusable `components/*`

## 2) Phase plan (implementation order)

### Phase 1 — Foundation bootstrap

Scope:
- Create Next.js 14 + TypeScript + Tailwind app in-place.
- Add top-level structure from `refactor_plan.md`.
- Configure lint/typecheck/build pipeline.

Tasks:
- Initialize Next app files (`app/`, `next.config.ts`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`).
- Add fonts via `next/font/google` and CSS variables in `app/globals.css`.
- Build base `app/layout.tsx` + metadata + OG wiring.
- Add minimal `app/page.tsx` with placeholder sections and anchor IDs.

Acceptance:
- `npm run dev` starts Next app.
- `npm run build` succeeds.
- Home route renders with global pastel tokens.

### Phase 2 — Typed content extraction

Scope:
- Move mutable content out of UI into typed config files.

Tasks:
- Split `src/portfolio.js` into:
  - `config/site.ts`
  - `config/skills.ts`
  - `config/experience.ts`
  - `config/featured-repos.ts`
- Normalize fields and remove legacy shape inconsistencies.
- Add TypeScript types for each config.

Acceptance:
- No hardcoded profile text in section components.
- All section data imported from `config/*`.

### Phase 3 — Core section migration

Scope:
- Port existing pages into new section architecture.

Tasks:
- Implement:
  - `app/_sections/Hero.tsx`
  - `app/_sections/About.tsx`
  - `app/_sections/Skills.tsx`
  - `app/_sections/Experience.tsx`
  - `app/_sections/Projects.tsx`
  - `app/_sections/Writing.tsx`
  - `app/_sections/Contact.tsx`
- Build `components/Nav.tsx` with anchor links and mobile collapse.
- Compose all sections in `app/page.tsx`.

Acceptance:
- Single-scroll home experience matches the order from `refactor_plan.md`.
- Existing content parity is maintained.

### Phase 4 — Data integrations

Scope:
- Replace legacy data wiring with ISR + API routes.

Tasks:
- Add `app/api/articles/route.ts` using `rss-parser` with `revalidate = 3600`.
- Add GitHub repo fetch (server component) with daily revalidation.
- Support optional `GITHUB_TOKEN` in `.env.local`.
- Build `ProjectCard.tsx` and `ArticleCard.tsx` data contracts.

Acceptance:
- `/api/articles` returns parsed Medium items.
- Projects section shows only curated repos from `config/featured-repos.ts`.

### Phase 5 — UI system and interactivity

Scope:
- Implement polished UI components and theme behavior.

Tasks:
- `components/ThemeToggle.tsx` using `data-theme` + localStorage.
- `components/SkillBar.tsx` with IntersectionObserver animation.
- `components/RadarChart.tsx` (Chart.js) with theme-aware redraw.
- `components/Doodles.tsx` for decorative SVG motifs.
- Route-level pages:
  - `app/projects/page.tsx`
  - `app/writing/page.tsx`

Acceptance:
- Theme toggles correctly and persists between reloads.
- Skill animations trigger once on viewport entry.
- Radar chart updates colors on theme change.

### Phase 6 — SEO, quality, and deployment cutover

Scope:
- Production readiness and migration switch.

Tasks:
- Add metadata, OG image, favicon, sitemap/robots.
- Performance pass: image optimization, font loading, Lighthouse quick check.
- Regression tests (at least smoke-level): home render, API route, projects/writing pages.
- Update README for new stack and deployment steps.
- Deploy Next app to Vercel and verify domain behavior.

Acceptance:
- Vercel production deployment healthy.
- Primary routes and integrations validated.
- Old CRA deployment path can be retired.

## 3) Recommended task slicing (PR plan)

1. PR-1: Next foundation + Tailwind + globals + basic layout.
2. PR-2: Config extraction from `src/portfolio.js` to `config/*`.
3. PR-3: Hero/About/Contact/Nav migration.
4. PR-4: Skills + SkillBar + RadarChart.
5. PR-5: Experience timeline + cards.
6. PR-6: Projects ISR + featured repo filtering.
7. PR-7: Medium API route + Writing section/page.
8. PR-8: SEO/metadata/OG + deployment docs + cleanup.

## 4) Risks and mitigations

- Legacy dependency mismatch (React 16 -> Next 14/React 18+):
  - Mitigation: do not port legacy component patterns blindly; rewrite to functional TSX.
- Data shape drift from `portfolio.js`:
  - Mitigation: define strict TS types and a one-time normalization layer.
- Medium RSS variability:
  - Mitigation: defensive parsing + fallback UI when feed is unavailable.
- GitHub API rate limits:
  - Mitigation: ISR caching + optional token + graceful empty state.

## 5) Definition of done (migration)

- Next.js 14 app replaces CRA as primary app.
- All target sections are implemented and themed per pastel palette.
- GitHub and Medium integrations are live with revalidation.
- No runtime errors on `npm run dev` and successful production `npm run build`.
- Deployment docs and env requirements are updated.
