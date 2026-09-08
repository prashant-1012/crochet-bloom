# 00 — Project Overview

## What this is

**Crochet Bloom** sells handmade, made-to-order crochet flower bouquets
and gifting items — single roses, mixed bouquets, potted sunflowers,
keychains, gift hampers, and table/LED decor. The website is a
marketing + catalog + lightweight ordering site — not a full
e-commerce platform. There is no backend, no payment gateway, and no
user accounts. Orders are collected via a **WhatsApp handoff**: the
customer builds a cart in the browser, clicks checkout, and a
pre-filled WhatsApp message opens so the actual sale is closed in a
chat with the business owner.

This project reuses the architecture (not the content or visual
design) of a prior project, **Easy Toddler Day**, which lives in the
same repository under `docs/` for reference. That project proved out a
solid, backend-free pattern — typed data files, Context+reducer cart,
WhatsApp checkout — that Crochet Bloom's requirements match closely
enough to build on directly. See
[20_CLAUDE_NOTES.md](./20_CLAUDE_NOTES.md) for what's being reused
verbatim vs. rebuilt.

## Business goals

1. Build trust in a **handmade, artisanal** product in the first 3
   seconds — premium visual quality signals "a real maker crafted
   this," not a mass-produced import.
2. Let the actual crochet work be the hero — real product photography,
   texture, color, detail — rather than icons or illustration.
3. Make browsing the catalog and adding to cart frictionless on mobile
   — most traffic is expected to come from Instagram shares, the
   primary discovery channel for handmade/gifting brands.
4. Convert intent into a WhatsApp conversation, since there's no
   payment gateway and many orders (custom color combinations,
   personalized bouquets) benefit from a quick chat anyway.

## Tech stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 16.2.12 (App Router) | Same version/config as the reference project — see [20_CLAUDE_NOTES.md](./20_CLAUDE_NOTES.md) for version-specific API differences from older Next.js knowledge. |
| Language | TypeScript | Strict mode, no `any` in shipped code. |
| Styling | Tailwind CSS v4 | CSS-first config via `@theme inline` in `globals.css`, not `tailwind.config.js`. |
| Motion | Framer Motion 12 | Hero composition, scroll reveals, cart drawer transitions. |
| Icons | lucide-react 1.28 | Tree-shakeable, consistent stroke-based icon set. |
| Fonts | `next/font/google` — Geist Sans (body/UI) + Fraunces (display/headings) | See [08_TYPOGRAPHY.md](./08_TYPOGRAPHY.md) — Fraunces replaces the reference project's Fredoka, which read too "kids/toddler" for this brand. |
| State | React Context + `useReducer` for cart, `localStorage` for persistence | Same pattern as the reference project — proven, and the app is small enough that Context is sufficient. |
| Deployment | Vercel | Static/ISR where possible; no server runtime needed since there's no backend. |

## Non-goals (explicitly out of scope)

- User authentication / accounts
- A real payment gateway (Razorpay, Stripe, etc.)
- A CMS or database — content (products, testimonials) is authored as
  typed TypeScript data files (see
  [15_DATA_STRUCTURE.md](./15_DATA_STRUCTURE.md)).
- Server-side order storage — the cart lives entirely in the browser.
- Per-product customization flows (custom color picker, engraving,
  etc.) — for this phase, customization requests happen in the
  WhatsApp conversation after checkout, not as website UI. Flagged as
  a possible future enhancement, not built now.
- A blog. The reference project had one; Crochet Bloom's scope was
  deliberately kept leaner — see
  [03_INFORMATION_ARCHITECTURE.md](./03_INFORMATION_ARCHITECTURE.md).

## Known placeholders / open items in this build

Per the project owner's explicit decisions during planning:

- **Product photos**: sourced from `crochet-bloom-assets/products/` —
  these carry **visible third-party watermarks/branding** ("ishmades",
  a "P Palettes" ribbon tag) from other crochet sellers. The owner
  chose to use them as-is for this build phase rather than wait for
  original photography. **This must be revisited before a public
  launch** — see [20_CLAUDE_NOTES.md](./20_CLAUDE_NOTES.md) for the
  full tradeoff record.
- **Hero image**: `heroImage.png`/`hero-mobile.png` show a crochet
  teddy bear, which is not currently part of the product catalog
  (all-flowers/gifting). The owner chose to use it anyway as a
  generic handmade/cozy mood shot.
- **Product names, descriptions, categories, and prices**: drafted as
  realistic placeholder content per photo, clearly marked `TODO` in
  `lib/data/products.ts`, to be swapped for real pricing before
  launch.
- **WhatsApp checkout number, contact email/phone/address**:
  placeholder values in `lib/constants.ts`, marked `TODO` — not yet
  provided by the project owner.

## Related docs

Start with [01_REQUIREMENTS.md](./01_REQUIREMENTS.md), then
[05_UI_UX_STRATEGY.md](./05_UI_UX_STRATEGY.md) and
[06_DESIGN_SYSTEM.md](./06_DESIGN_SYSTEM.md) before touching code.
