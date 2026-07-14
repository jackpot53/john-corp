# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm install      # install dependencies
npm run dev       # start dev server at http://localhost:3000
npm run build     # production build (also type-checks and lints)
npm run start      # run the production build
npm run lint       # eslint
```

There is no test suite configured yet.

## Architecture

Single-page Next.js (App Router) portfolio site. There is only one route (`/`), composed in `src/app/page.tsx` from section components rendered in order: Hero → About → Projects → Experience.

- `src/app/` — root layout (`layout.tsx`, wraps pages with `SiteHeader`/`SiteFooter`, sets metadata from `src/content/profile.ts`) and `globals.css` (Tailwind v4 CSS-first theme via `@theme inline`, light-only design tokens — no dark mode).
- `src/components/sections/` — one component per page section (`hero.tsx`, `about.tsx`, `projects.tsx`, `experience.tsx`), each importing its data from the matching file in `src/content/`.
- `src/components/` — `site-header.tsx` (sticky nav with anchor links to section ids) and `site-footer.tsx`.
- `src/components/ui/` — small shared UI primitives (e.g. `badge.tsx`).
- `src/content/*.ts` — all editable site content (profile, about, projects, experience) as typed static data. **This is the primary place to update real information** — there is no CMS or database.
- `src/types/content.ts` — shared content types (`Profile`, `AboutContent`, `Project`, `Experience`) that the `content/*.ts` files implement.
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge) used for conditional class names.

No database, authentication, or API routes — the site is fully static content rendered server-side.
