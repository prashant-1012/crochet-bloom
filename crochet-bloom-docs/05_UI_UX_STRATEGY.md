# 05 — UI/UX Strategy

## Reference brands and what we borrow from each

| Brand | What we borrow | What we avoid |
|---|---|---|
| **Apple** | Generous whitespace, restrained color use per screen, large confident typography, product-as-hero photography | Cold/sterile minimalism — a handmade brand needs warmth |
| **Bloom & Wild / The Bouqs Co.** (flower delivery brands) | Elegant, gift-forward product photography treatment; confident use of a single accent color per screen | Overly slick/corporate flower-shop feel that reads as mass-produced, undercutting "handmade" |
| **Etsy** (handmade marketplace) | The "meet the maker" trust narrative — a real person's story matters as much as the product for a handmade purchase | Cluttered marketplace density, seller-comparison chrome |
| **Anthropologie / boho-editorial retail** | Textured warmth, soft layered compositions, a slightly organic/imperfect-on-purpose feel that suits crochet's handcrafted texture | Costly/inaccessible luxury positioning — this is a warm, approachable gifting brand, not high fashion |

The site should read as **"a real person crocheted this for you,"**
not "a dropship catalog of plastic flowers." Warmth and texture matter
more here than in the reference project — crochet is inherently
tactile, and the photography/layout should let that texture show.

## Core visual principles

1. **Whitespace first.** Every section gets room to breathe. Never
   stack more than 3 content density levels on one screen.
2. **One playful accent per view.** A thread-swirl flourish, not five
   decorative elements competing at once — see the yarn/thread motif
   below.
3. **Photography over illustration.** Real bouquet/product photos are
   the hero, not generic icons — the actual crochet texture is the
   product's main selling point.
4. **Rounded, soft, layered.** Large border radii (see
   [06_DESIGN_SYSTEM.md](./06_DESIGN_SYSTEM.md)), soft multi-stop
   shadows, cards that visually float above the background — same
   proven pattern as the reference project.
5. **Motion with purpose.** Framer Motion is used for entrance reveals
   and micro-interactions, never decoration for its own sake — see
   [10_ANIMATION_GUIDELINES.md](./10_ANIMATION_GUIDELINES.md).

## The Hero (special focus)

The hero must **not** be a boring centered headline+button. Target
composition:

- Asymmetric split layout: headline + CTA on one side, a layered
  floating composition of hero imagery on the other (using
  `heroImage.png`/`hero-mobile.png`, and product photography).
- Decorative background elements positioned behind the imagery,
  animated with slow float/parallax on mount and subtle scroll
  parallax — using the thread-swirl motif rather than the reference
  project's generic blobs, to tie back to the logo's own yarn-ball
  detail.
- Logo integrated tastefully (small, in the navbar — not competing in
  the hero itself unless it reads as part of the composition).
- Strong single CTA ("Shop Bouquets" or similar) plus a secondary
  lower-emphasis link (e.g. "Meet the Maker" scrolling to that
  section).
- On mobile, the layered composition simplifies to a single centered
  hero image with the same decorative accents scaled down — never
  literally the desktop layout squeezed smaller.

## Interaction feel

- Buttons: soft press (scale-down on tap), color shift on hover, never
  an abrupt/instant state change.
- Cards: gentle lift (translateY + shadow increase) on hover.
- Cart drawer: slides in from the right with spring easing, backdrop
  fades in behind it.
