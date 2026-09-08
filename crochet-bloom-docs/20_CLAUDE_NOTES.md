# 20 — Claude Notes

Internal working notes: version-specific facts discovered during
planning, decisions made, and things still pending input. Same spirit
as the reference project's own notes file — keep this updated as
decisions get made during the build, not just during planning.

## Next.js 16.2.12 — differences from general Next.js knowledge

This is the **same repository and `node_modules`** as the reference
project, so its own version analysis (confirmed by reading
`node_modules/next/dist/docs/` directly, per `AGENTS.md`) still
applies unchanged:

- **`middleware.ts` → `proxy.ts`**: request-interception file was
  renamed. Not needed for this project.
- **New global route-prop helpers**: `PageProps<'/route/[param]'>` and
  `LayoutProps<'/route'>` are auto-generated (via `next dev`/`next
  build`/`next typegen`) and globally available with no import —
  prefer these over hand-rolling `{ params: Promise<{...}> }` prop
  types on page/layout components.
- **`params`/`searchParams` are Promises** and must be `await`ed.
- **Tailwind CSS v4 is CSS-first**: `app/globals.css` already uses
  `@import "tailwindcss"` + `@theme inline` instead of a
  `tailwind.config.js`/`.ts` file.
- **`lucide-react` is on `1.28.0`**, not the more commonly seen `0.x`
  line — standard named-icon-import usage is unaffected.

## Business decisions confirmed by project owner (2026-09-08)

- **Checkout model**: Cart + WhatsApp checkout, same architecture as
  the reference project — not a per-product "enquire only" flow, not
  the hybrid customize-then-order option. Customization requests
  (color, personalization) route through the general-inquiry WhatsApp
  button instead of website UI.
- **Product photos**: the images in `crochet-bloom-assets/products/`
  carry visible third-party branding/watermarks — "ishmades" as a
  faint watermark on some photos, and a "P Palettes" ribbon/tag
  visible in-frame on others (these appear to be sourced from two
  different existing crochet sellers' product photography, not
  original photography for this brand). **The owner explicitly chose
  to use these images as-is** for this build phase rather than wait
  for original photography or crop out the branding. This is a
  deliberate, informed tradeoff, not an oversight — but it **must be
  revisited before any public launch**: shipping another business's
  watermarked/branded product photography on a live commercial site
  is both a copyright and passing-off risk, independent of how the
  site itself looks. Revisit by either commissioning/taking original
  product photography, or securing explicit licensing from the
  original photographers/sellers, before this goes live publicly.
- **Hero image**: `heroImage.png`/`hero-mobile.png` show a crochet
  teddy bear, which doesn't match the flowers-only product catalog.
  The owner chose to use it anyway as a generic handmade/cozy mood
  shot rather than swap in a bouquet photo. If a toy/amigurumi
  product line is ever added, this hero choice will already fit;
  until then it's an intentional mismatch the owner accepted.
- **Site scope**: Home, Shop, About, Contact + a Testimonials
  *section* (not a dedicated route), no Blog. Leaner than the
  reference project by design.
- **Brand color palette**: sampled programmatically from
  `crochet-bloom-assets/logo.png` (see
  [07_COLOR_SYSTEM.md](./07_COLOR_SYSTEM.md) for the full sampling
  method and exact pixel counts) — Bloom `#F84E8B` / Bloom Dark
  `#D70F51` from the logo's "B", Yarn `#1D8AE5` / Yarn Dark `#0262CC`
  from the logo's "C". Only two brand hues, deliberately — the logo
  doesn't have a third distinctly-colored element the way the
  reference project's three-word logo did, and a third hue was not
  invented to force a parallel structure.
- **Display font**: **proposed** Fraunces (replacing the reference
  project's Fredoka, which reads as a kids/toddler choice). This
  recommendation was made from design-system knowledge and the
  `ui-ux-pro-max` skill's Quick Reference rules (font-pairing should
  match brand personality) rather than that skill's full curated
  database — **Python is not installed on this machine**, so the
  skill's `search.py` CLI tool couldn't run; per the skill's own
  instructions, this wasn't treated as a blocker (don't install
  Python without being asked), and the recommendation proceeded on
  design judgment instead. Not yet visually confirmed against real
  rendered content — confirm/adjust at Step 2 (Hero) of the roadmap.
  If deeper font-pairing exploration via that skill's database is
  wanted later, ask the user whether to install Python first.
- **Logo asset**: unlike the reference project's logo (which needed
  cropping — actual content was only ~31% of the canvas), Crochet
  Bloom's `logo.png` (326×220) already has its visible content filling
  ~78–83% of the canvas (measured via alpha-channel trim). **No crop
  is needed** before using it in the Navbar.

## Product catalog — photo-to-product mapping (worked out during planning)

`crochet-bloom-assets/products/` contains 24 image files. Three are
duplicate/alternate shots of a product already covered by another
file and are **not** used as separate catalog entries (noted below).
The remaining 21 map to distinct `Product` entries as follows —
categories and placeholder INR prices are draft, marked `TODO` in the
actual data file per [15_DATA_STRUCTURE.md](./15_DATA_STRUCTURE.md)'s
policy:

### Bouquets (13)

| Product name (draft) | Source image | Price (draft) |
|---|---|---|
| Daisy Blossom Bouquet | `daisy_blossom_bouquet_900x.jpeg` | ₹399 |
| Single Rose Bouquet | `ishmades-crochet-rose-bouquet-8428931_1080x.jpeg` | ₹249 |
| Forget-Me-Not Bunch | `ishmades-forget-me-not-bunch-1858242_1080x.jpeg` | ₹349 |
| Daisy Bouquet | `p-palettes-daisie-bouquet-handmade-gifting-decor-crochet-1494679_720x.jpeg` | ₹379 |
| Double Love Bouquet | `p-palettes-double-love-handmade-gifting-decor-crochet-5451352_540x.jpeg` | ₹449 |
| Ensemble Mixed Bouquet | `p-palettes-ensemble-bouquet-handmade-gifting-decor-crochet-1546442_1080x.jpeg` | ₹799 |
| Heartfelt Love Bouquet | `p-palettes-heartfelt-love-bouquet-handmade-gifting-decor-crochet-8456739_720x.jpeg` | ₹499 |
| Lilia Bouquet | `p-palettes-lilia-bouquet-gifting-handmade-3856740_900x.jpeg` | ₹429 |
| Red Romance Bouquet | `p-palettes-red-romance-bouquet-handmade-gifting-decor-crochet-2181831_900x.jpeg` | ₹479 |
| Roseate Bouquet | `p-palettes-roseate-bouquet-handmade-gifting-decor-crochet-5232972_720x.jpeg` | ₹459 |
| Twirling Tulips Bouquet | `p-palettes-twirling-tulips-bouquet-handmade-gifting-decor-crochet-3091869_1080x.jpeg` | ₹529 |
| Teddy & Bunny Bouquet | `p-palettes-teddy-and-bunny-bouquet-handmade-gifting-decor-crochet-7587017_1080x.jpeg` | ₹549 |
| Teddy Bunny Stem | `p-palettes-teddy-bunny-stem-handmade-gifting-decor-crochet-3984114_1080x.jpeg` | ₹349 |

### Keychains (4)

| Product name (draft) | Source image | Price (draft) |
|---|---|---|
| Avocado Keychain | `p-palettes-avacado-keychain-handmade-gifting-crochet-7947761_720x.jpeg` | ₹149 |
| Daisy Keychain | `p-palettes-daisy-keychain-handmade-gifting-crochet-9448680_1080x.jpeg` | ₹149 |
| Sunflower Keychain | `p-palettes-sunflower-keychain-handmade-gifting-crochet-9840667_1080x.jpeg` | ₹149 |
| Unicorn Keychain | `p-palettes-unicorn-keychain-handmade-gifting-crochet-1030979_1080x.jpeg` | ₹179 |

### Hampers (1)

| Product name (draft) | Source image | Price (draft) |
|---|---|---|
| Hamper for Her | `p-palettes-hamper-for-her-gifting-candle-bouquet-6837873_1080x.jpeg` | ₹1299 |

### Decor (3)

| Product name (draft) | Source image | Price (draft) |
|---|---|---|
| Potted Sunflower | `ishmades-crochet-sunflower-pot-3281581_1080x.jpeg` | ₹699 |
| LED Bouquet Table Decor | `p-palettes-led-bouquet-table-decor-gifting-handmade-7345297_1080x.jpeg` | ₹899 |
| Sunflower Boho Basket | `p-palettes-sunflower-boho-basket-gifting-handmade-1367427_1080x.jpeg` | ₹799 |

### Excluded (duplicate/alternate photos, not separate catalog entries)

- `ishmades-forget-me-not-bunch-3170731_1080x.jpeg` — alternate photo
  of the Forget-Me-Not Bunch above; unused for now, could become a
  secondary gallery image if `/shop/[slug]` detail pages are ever
  built.
- `p-palettes-led-bouquet-table-decor-gifting-handmade-7345297_720x.jpeg` —
  smaller duplicate resolution of the LED Bouquet Table Decor photo
  above; the 1080x version is used instead.
- `p-palettes-teddy-bunny-stem-handmade-gifting-decor-crochet-4597809_720x.jpeg` —
  smaller duplicate resolution of the Teddy Bunny Stem photo above;
  the 1080x version is used instead.

### Proposed `featured: true` set (for homepage Featured Products, spanning all 4 categories)

Ensemble Mixed Bouquet, Twirling Tulips Bouquet, Single Rose Bouquet,
Sunflower Keychain, LED Bouquet Table Decor, Hamper for Her.

## Open items still to revisit with the user

1. Real WhatsApp checkout number — currently a placeholder, blocks a
   real launch but not development.
2. Real contact email/phone/address — placeholder, marked `TODO`.
3. Real product names/descriptions/prices — the table above is a
   reasonable draft, not confirmed pricing.
4. The product-photo watermark issue (see above) — needs a resolution
   path before public launch, independent of anything else in this
   build.
5. Confirm the Fraunces typography choice once it's actually rendered
   in the Hero (Step 2) — it's a reasoned proposal, not yet
   user-approved against real content.
6. Whether Testimonials should get its own route eventually (default:
   homepage section only, for now).
