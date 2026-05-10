# The Calling Stone Chronicles — Website

Built with [Eleventy](https://11ty.dev) (static site generator) and [Decap CMS](https://decapcms.org) (browser-based content editor).

---

## Quick-start: deploy to Netlify

1. **Push this repo to GitHub** (or fork it).
2. **Import into Netlify** → New site → Import from Git → pick your repo.
3. Build settings are already in `netlify.toml` — just click **Deploy**.
4. In Netlify → **Identity** → Enable Identity.
5. Under Identity → **Registration** → set to *Invite only*.
6. Under Identity → **Git Gateway** → Enable Git Gateway.
7. Invite yourself (or the author) via Identity → **Invite users**.
8. Visit `https://YOUR-SITE.netlify.app/admin/` and log in.

The author can then edit everything — books, characters, creatures, realms, blog posts — directly in the browser, with no code knowledge needed.

---

## Local development

```bash
npm install
npm start          # starts dev server at http://localhost:8080
```

## Content structure

| Content type | Location | Editable in CMS |
|---|---|---|
| Books | `src/books/*.md` | ✅ |
| Characters | `src/characters/*.md` | ✅ |
| Creatures | `src/creatures/*.md` | ✅ |
| Realms | `src/realms/*.md` | ✅ |
| Blog posts | `src/blog/*.md` | ✅ |
| Homepage text | `src/_data/homepage.json` | ✅ |
| About page | `src/_data/about.json` | ✅ |
| Media page | `src/_data/media.json` | ✅ |
| Images / uploads | `src/images/` | ✅ |

## Adding new pages

Create `src/your-page.njk` with:
```
---
layout: layouts/base.njk
title: Your Page Title
permalink: /your-page/
---
<section class="page-hero">…</section>
```

Then add it to the nav in `src/_includes/layouts/base.njk`.
