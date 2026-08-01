# jeanjacquesjansevanrensburg.com

Personal platform on my own rails. Clones the 20% of Ghost that earns SEO and AI-search placement (server-rendered semantic HTML, clean URLs, canonicals, OG cards, JSON-LD, sitemap, RSS, robots.txt, llms.txt) and none of the lock-in.

## Publish flow (under 60 seconds)

1. Drop a markdown file in `content/posts/` named `YYYY-MM-DD-slug.md` with frontmatter:

```
---
title: The title
slug: the-slug
date: 2026-07-31
description: One-sentence hook. This becomes the meta description, so write it for the click.
image: /assets/images/optional-hero.jpg
tags: [ai, capital]
---
```

2. `npm run build`
3. Deploy `dist/` (or just `git push` if the host builds for you).

## Commands

- `npm install` once.
- `npm run build` renders everything into `dist/`.
- `npm run dev` builds and serves at localhost:3000 (Express, local only; production is static).

## Deploy (Vercel or Netlify)

- Build command: `npm run build`
- Output directory: `dist`
- Add domain `jeanjacquesjansevanrensburg.com`, and set `www` to redirect to apex (one canonical host only).

## Before going live: the CHANGE-ME list

1. `site.config.json` → `buttondownUsername`: create the account at buttondown.com, drop the username in, rebuild. The forms then work with zero JS.
2. `site.config.json` → `author.sameAs`: put in the real LinkedIn and X URLs. This is the entity graph that AI search uses to resolve you. Every URL here must use the exact same name and bio as this site.
3. Drop the cyberpunk city image at `assets/images/mind-city.jpg` (the first post's hero) and an `assets/images/og-default.png` at 1200x630 (a placeholder ships with the repo; replace it with a designed one).
4. Analytics: the layout ships with Plausible wired to the domain. Create the site at plausible.io, or swap the script tag in `build.js` for your preferred analytics.
5. Register `jjjvr.com` and 301 it to the apex. Thirty-character domains need a short alias.

## The off-site half of AI search (matters more than anything on this site)

Models cite entities they can resolve and corroborate. After launch:

- Identical name, bio, and headshot on YouTube, LinkedIn, X, SBS, Crunchbase.
- Get the entity referenced on domains you do not own: podcasts, guest essays, GitHub, press.
- Keep the biweekly cadence. Recency and consistency beat cleverness.

## Architecture notes

- `build.js` is the whole engine. Templates are functions inside it. No framework, no CMS, no database.
- Content is pure HTML at request time. The particle field (`assets/js/field.js`) is progressive enhancement: crawlers, no-JS readers, and reduced-motion users get the complete site without it.
- Decorative motion never enters DOM text. Nothing decorative is extractable.
