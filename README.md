# bishesh-portfolio

Minimalist, monospace, dark-first personal site. Built with Astro + Tailwind v4.
Inspired by [nischal-dahal.com.np](https://nischal-dahal.com.np/), with additions:
live GitHub activity feed, reading time, OG/Twitter meta, sitemap, view transitions.

## Commands

```bash
npm run dev       # local dev at http://localhost:4321
npm run build     # production build → ./dist
npm run preview   # preview the build locally
```

## Make it yours

1. **`src/config.ts`** — name, bio, projects, links, uses. Single source of truth.
2. **`astro.config.mjs`** + **`src/config.ts`** — set your real `site` / `url` domain.
3. **`src/content/blog/*.mdx`** — delete the starter posts, write your own. Frontmatter: `title`, `date`, `description`, `tags`, `draft`.
4. **`public/resume.pdf`** — drop in your real resume (placeholder note there now).
5. **`public/og.png`** — 1200×630 social preview image (placeholder note there now).
6. **Projects with `repo: "owner/name"`** get live star counts. `repo: null` = no badge.

### Optional: raise GitHub API limit

Build-time star/activity fetches use the unauthenticated API (60 req/hr). If you
have many repos, set a token:

```bash
# .env
GITHUB_TOKEN=ghp_xxx   # a classic PAT with public_repo scope is enough
```

## Deploy (Cloudflare Pages)

- Build command: `npm run build`
- Output dir: `dist`
- Framework preset: Astro

Or any static host (Vercel / Netlify / GitHub Pages) — it's a static build.

## Routes

| Path | What |
|---|---|
| `/` | home — hero, projects, dotfiles, latest writing |
| `/blog` · `/blog/[slug]` | blog index + posts |
| `/activity` | live GitHub activity (build-time) |
| `/links` · `/use` | link list + uses/gear |
| `/blog.rss` · `/feed.json` · `/llms.txt` | feeds + LLM summary |
| `/sitemap-index.xml` | sitemap (auto) |
