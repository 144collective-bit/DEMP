---
tags:
  - degenemporium
  - design
  - brief
status: hold
updated: 2026-09-06
---

# DegenEmporium Design Brief

HOLD on build until user greenlights Phase 1. Source: Neo + Dave + Degen, Emporium room, 2026-09-06.

## What it is

PulseChain-first crypto hub (covers all crypto). Merch store + blog + social/links + dedicated PulseDex section. Creators of PulseDex.net. Brand loves HEX and PulseX.

Voice bible: [[DegenEmporium Voice]]

## Roles

- Neo — UI/build
- Degen — merch + blog/social + PulseDex copy
- Obsidian — shelf this brief + art inventory
- Dave — route / call go

## Site map (planned)

Home · Store (`/store`, `/store/[slug]`) · Blog · Links · PulseDex · Chat later

## Stack

Next.js App Router + TypeScript + Tailwind + shadcn + Stripe Checkout. **Host: Hostinger (not Vercel).** Domain: `degenemporium.com`.

Host locked: Hostinger. Live Stripe store exists; Phase 1 is premium finish deployed on Hostinger, not Vercel.

## Visual direction

North star: passweird.com feel (sparse, one punch per screen, oversized neon CTA). Street-art kit, not sterile crypto gradients.

| Token | Hex |
| --- | --- |
| Black | `#0A0A09` |
| Cream | `#FBFBEF` |
| CTA neon green | `#08F816` |

Logo cyan + magenta splatters as accents. Graphic-led merch (not lifestyle photography). Homepage punch: Degen + logo + Enter store.

## Art kit

Stored on Neo’s machine: `/workspace/degenemporium-refs/`
Inventory: `brief/ART-KIT.md`

- `logo-main.png` — THE DEGEN EMPORIUM graffiti mark
- `mascot-degen.png` — Degen mascot
- `product-tee-fabric.jpg` — FABRIC gradient tee mock (nested hex ≈ HEX geometry)
- `mark-pulse-hex.png` — Pulse hex + EKG
- `mark-hex.png` — HEX nested hexagons
- `mark-pulsex.png` — PulseX X
- `pulsedex-wordmark.png` + `pulsedex-pulse-icon.png` (+ alt) — PulseDex brand
- `passweird-*.png` — UI reference screenshots

## Voice split (Degen)

- **Merch:** pure Degen — punch, gossip, hangover honesty. Mechanic who hates marketing. Graphic-led, no lifestyle fluff.
- **PulseDex:** same bible, tighter. More war correspondent, less bar prophet. Field report on the tape. No SaaS soft-sell.
- Blog/social: desk voice. Sample post when Phase 1 greens.

## Phase 1 (when greenlit)

Shell of those pages, assets wired, Stripe test mode, 2–3 placeholder SKUs from mocks, 1 sample post. Real catalogue/SKUs from user later.

## Still open

- Live store URL / Hostinger type (if still relevant to migrate from)
- Real merch SKUs
- Social account links

See also: [[DegenEmporium Store]] · [[DegenEmporium Voice]]

## Forum (added 2026-09-06)

Classic forum board in scope: categories → topics → posts, registered profiles. Auth locked: email+password AND wallet connect (PulseChain/EVM); start with either, link later. Empty states / board chrome: short, sharp, no Discord-corporate (Degen). Profiles stay human. Not Phase 1 until greenlit with the rest.


## Host (locked 2026-09-06)

**Hostinger, not Vercel.** Deploy Phase 1 there.

## Auth (locked 2026-09-06)

Forum auth: **email + password AND wallet connect (PulseChain/EVM)**. User can start with either and link the other later.

## Forum permissions (locked 2026-09-06)

Members post/reply. Only mods create topics.

## Forum starter categories (locked 2026-09-06)

1. PulseChain / HEX / PulseX
2. PulseDex support & feedback
3. General degen chat

No merch category day one.

## Build status (2026-09-06)

User greenlit **homepage only** for design iteration (not full Phase 1). Neo building homepage now. Full site still HOLD. Hostinger deploy later.

## Repo status (2026-09-06)

Homepage: local preview on Neo’s machine first. Remote blocked: Origin needs a namespace; GitHub PAT can’t create repos. Waiting on user for Origin unlock or a repo URL.

## Homepage preview (2026-09-06)

Local preview live on Neo’s box (`localhost:3000`). Project path: `/workspace/degenemporium`. Screenshots sent to user for design feedback. Iterating home only.
