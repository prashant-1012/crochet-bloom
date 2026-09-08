# 18 — Development Roadmap

Same working agreement as the reference project: built
**section-by-section with a pause for approval after each major
section**. Order below builds foundational pieces before content
sections that depend on them.

## Step 0 — Foundation (build once, no pause needed, but reviewed together)
- Folder structure ([14_FOLDER_STRUCTURE.md](./14_FOLDER_STRUCTURE.md))
- Design tokens in `globals.css` ([06](./06_DESIGN_SYSTEM.md), [07](./07_COLOR_SYSTEM.md), [08](./08_TYPOGRAPHY.md))
- Core types + placeholder product/testimonial data (`lib/types`, `lib/data`, `lib/constants.ts`)
- Asset migration: move needed files from `crochet-bloom-assets/` into `public/images/`
- `ui/` primitives: `Button`, `Card`, `Badge`, `SectionHeading`, `Blob`, `ThreadSwirl`, `Reveal`, `Wordmark`

## Step 1 — Shell
- `Navbar` + `MobileMenu` + `Footer`
- `CartProvider` + `CartButton` (badge only, drawer stubbed)
- Wire into `app/layout.tsx`, set real root metadata (never leave the
  Next.js scaffold default)
→ **pause for approval**

## Step 2 — Hero
- Maximum-effort composition per
  [05_UI_UX_STRATEGY.md](./05_UI_UX_STRATEGY.md)
- Confirm the Fraunces typography choice looks right once rendered
  with real content (see [08_TYPOGRAPHY.md](./08_TYPOGRAPHY.md))
→ **pause for approval**

## Step 3 — Featured Products + Shop catalog
- `ProductCard`, `FeaturedProducts` (homepage), `/shop` page with
  category grouping (Bouquets, Keychains, Hampers, Decor)
- Real "Add to Cart" wiring against `CartProvider`
→ **pause for approval**

## Step 4 — Cart Drawer + WhatsApp Checkout
- `CartDrawer`, `CartItemRow`, `QuantityStepper`
- `lib/utils/whatsapp.ts` checkout flow
- `WhatsAppFloat` (general inquiry + custom-order request button)
→ **pause for approval**

## Step 5 — Meet the Maker (About)
- Homepage condensed section + `/about` full page, using the maker
  photography in `crochet-bloom-assets/about-me-*.png`
→ **pause for approval**

## Step 6 — Testimonials
- Homepage section only (no dedicated route in this phase)
→ **pause for approval**

## Step 7 — Contact
- Homepage condensed section + `/contact` full page + form (opens
  WhatsApp, same pattern as cart checkout)
→ **pause for approval**

## Step 8 — SEO pass
- `sitemap.ts`, `robots.ts`, JSON-LD, OG images, per-page metadata
  ([13_SEO_STRATEGY.md](./13_SEO_STRATEGY.md))
→ **pause for approval**

## Step 9 — Full QA pass
- Run through [19_TESTING_CHECKLIST.md](./19_TESTING_CHECKLIST.md)
  end-to-end before calling the build done.

## Step 10 — Remove Easy Toddler Day legacy content
- Delete `docs/`, toddler-specific `lib/data`/`lib/types`, unused
  `public/images/*` (book covers, blog images, old logo assets), and
  update `package.json`'s `name` field.
- This is a destructive step — **confirm explicitly with the project
  owner immediately before running it**, even though the overall
  intent was agreed during planning, per this project's own working
  agreement around destructive actions.

## Working agreement

Before starting each step, restate: what's being built, which files
change, and why. Don't start the next step until the current one is
approved.
