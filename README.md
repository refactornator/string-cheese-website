# String Cheese Website

A static, content-focused website about string cheese, built with [Astro](https://astro.build).

## Tech Stack

- **Framework:** Astro (latest 7.x) — static-first, zero JS by default, Islands Architecture
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite`, with design tokens in an `@theme`
  block in `src/styles/global.css` (no `tailwind.config` file)
- **Content:** Markdown files in `src/content/`, versioned in git alongside the code
- **Fonts:** Self-hosted via `@fontsource` (Playfair Display, Nunito, JetBrains Mono) —
  no Google Fonts runtime dependency
- **Build output:** Static HTML (`output: 'static'`) — no server required

See the [Tech Stack & Dev Environment Spec](https://app.plane.so/cosmic-labs/projects/e349affd-66fb-4aa2-8ab1-86e8922116b1/pages/ea98aba2-15fb-4760-8508-bff4353e4721/) page for full rationale.

## Prerequisites

- Node.js 22 LTS ([nvm](https://github.com/nvm-sh/nvm) recommended for version management)
- pnpm: `npm install -g pnpm`
- Git

## First-time Setup

```bash
# Clone the repo
git clone https://github.com/[org]/string-cheese-website.git
cd string-cheese-website

# Install dependencies
pnpm install

# Start the dev server
pnpm dev
# → http://localhost:4321
```

## Common Commands

- `pnpm dev` — start local dev server with hot reload
- `pnpm build` — build for production (outputs to `/dist`)
- `pnpm preview` — preview the production build locally
- `pnpm check` — run TypeScript + Astro diagnostics
- `pnpm lint` — run ESLint
- `pnpm format` — run Prettier

## Content Architecture

All content lives in the repository — no CMS, no external API, no database.

- `src/content/learn/` — one `.md` file per Learn sub-topic (e.g. `history.md`, `science.md`)
- `src/content/facts/` — "Did You Know?" fact entries (`question` / `answer`) for the homepage
  callout
- `src/pages/` — Astro page files for Home, About, Learn index (`.astro` files)
- `src/layouts/` — shared layout components (`BaseLayout`, `ArticleLayout`)
- `src/components/` — reusable UI components (`Header`, `Footer`, `Card`, `FactCallout`)
- `public/` — static assets (images, fonts, favicon)

Adding a new Learn article = drop a new `.md` file in `src/content/learn/` and open a PR.
No CMS login required.

Content collections use the Content Layer API (`loader: glob(...)` in
`src/content.config.ts`) and reference entries by `entry.id`.
