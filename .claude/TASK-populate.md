# Task: populate the site with placeholder content, then debug and optimise

Work autonomously on branch `main`. Commit and push when done.

## What this repo is

A static marketing site for **The Degen Emporium**, a PulseChain-adjacent crypto
brand with a graffiti / sticker-art identity. The design system, all brand art
and the page structure are finished. Most pages are near-empty shells.

Your job: fill them with **placeholder** content so the owner can see what a
fully populated site looks like, then debug and optimise. Real copy replaces it
later.

## Stack and conventions — read before writing code

- **Astro 5, static output.** Plain CSS in `src/styles/global.css`. No Tailwind,
  no CSS framework. Images go through `astro:assets`.
- **Single dark theme, deliberately.** Design tokens are CSS custom properties at
  the top of `global.css`. Do **not** change the palette, the typefaces or the
  theme.
- Fonts: Bungee (display), Archivo (body), Space Mono (labels/data).
- `npm install`, then `npm run build`. Dev server: `npm run dev`.
- Read `brand/README.md` — it documents the art pipeline and why the image
  cutouts work the way they do. `scripts/*.py` regenerate derived art.
- Pages: `/`, `/news` (+ post template), `/projects`, `/team`, `/shop`,
  `/links`, `/about`, `/contact`, `404`.
- News is an Astro **content collection**: markdown in `src/content/news/`,
  schema in `src/content.config.ts` (`title`, `date`, `summary`, `draft`).
- `src/data/team.ts` — five **fictional** characters: Degen, Rekt, Ngmi,
  Diamond, Oracle. Extending these in-voice is fine.
- `src/data/links.ts` — four **real** projects: PulseChain, HEX, PulseX, ProveX.

## Task A — content

1. **News.** Delete `src/content/news/hello.md`. Write 6–8 posts dated across
   recent weeks, in the brand voice: dry, punchy, self-aware degen humour — a
   mechanic who hates marketing, not a press release. Vary length.
2. **`/projects`.** Currently an empty shell with a "needs content" notice.
   Build a real page structure — a grid or list of project entries with names,
   a line each, and a status. Invent plausible in-house projects for the
   Emporium (sticker drops, art series, community things). These are the
   Emporium's *own* projects, distinct from `/links`.
3. **`/about`.** Write the story of the Emporium in-voice. It is a brand with a
   cast of characters; lean on that.
4. **`/contact`.** Give it real structure — a form layout is fine, but it must
   be clearly non-functional (a static site cannot submit). Say so on the page.
5. **`/links`.** Add a short description under each of the four projects. See
   the guardrails below — these are real projects, so keep descriptions
   generic and non-factual, and keep the existing "replace before launch"
   notice visible.
6. **`/shop`.** It shows the sticker sheet. Add placeholder product entries
   around it (name, a line, a price placeholder). Keep the existing notice
   saying checkout is not wired.
7. **Homepage.** Make sure it reflects the newly populated sections.

## Task B — debug and optimise

- `npm run build` must pass clean.
- No broken internal links. Every page reachable from the nav.
- **No horizontal overflow at 375px width.** Check every page.
- Accessibility: sensible heading order (one `h1` per page), alt text on every
  meaningful image, visible focus states, adequate contrast.
- Every page has a `<title>`, meta description, and OG tags.
- Images: correct `widths`/`sizes` hints so nothing is upscaled into its box,
  and no oversized source assets.
- Remove dead CSS and any unused files you are confident are unused.
- Report `dist` size before and after.

## Guardrails — these matter

- **PulseChain, HEX, PulseX and ProveX are real crypto projects.** Do not state
  facts, statistics, prices, returns, roadmaps, team members, partnerships or
  history about them. Keep any description generic and atmospheric.
- **Never write investment or financial advice**, or copy implying returns.
- **Do not invent** testimonials, user numbers, metrics, press mentions, audits
  or partnerships. Nothing that would be a lie if published.
- All new copy is placeholder. Where a page carries user-facing claims, keep or
  add a visible notice saying the copy is draft.
- **Do not build a forum.** This was explicitly dropped.
- Do not change the visual identity, and do not delete brand art.

## Done means

Build passes, every page is populated and renders, no overflow at 375px, and
the work is committed and pushed to `main` with a clear commit message
explaining what was placeholder and what was structural.
