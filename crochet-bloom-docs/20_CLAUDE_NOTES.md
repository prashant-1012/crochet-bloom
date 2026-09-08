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

## Business decisions confirmed by project owner (2026-09-09)

- **Testimonials scope reversed**: Step 6 originally shipped
  Testimonials as a homepage section only, with the dedicated
  `/testimonials` route and its `TestimonialsColumn` marquee component
  removed as out of scope. The owner asked for both back, plus a
  larger testimonial set — `lib/data/testimonials.ts` grew from 9 to
  20 entries (`t1`–`t20`), split 7/7/6 across the three marquee
  columns on `/testimonials`. `NAV_LINKS` now includes Testimonials
  (between Shop and About, matching the reference project's original
  ordering). `TestimonialsColumn.tsx` was recreated rather than
  restored from git history, with one deliberate simplification: the
  avatar-image branch was dropped since none of the 20 testimonials
  have a photo — all render via the initials fallback.

## Step 9 — Full QA pass (2026-09-09)

Ran the full [19_TESTING_CHECKLIST.md](./19_TESTING_CHECKLIST.md)
against real browser interaction rather than code review alone —
`puppeteer-core` (driver only, no bundled browser download) pointed at
the system's already-installed Chrome via `executablePath`, installed
with `npm install --no-save` and fully removed afterward (confirmed
`package.json`/`package-lock.json` never changed). Tested against a
real `next build && next start` production server, not just `next
dev`. This surfaced real, fixable issues that a static code read had
missed:

- **`CartProvider`'s context value had unstable function
  identities.** `value`'s `useMemo` depended on `[state, isDrawerOpen]`,
  so `addItem`/`removeItem`/`closeDrawer`/etc. all got a new reference
  on *every* cart mutation, not just when the drawer opened or closed.
  Any consumer effect keyed on one of those functions (e.g. an
  Escape-key listener depending on `closeDrawer`) would tear down and
  rebuild on every add/remove/quantity-change while open — wasted
  work, and a real if narrow risk window. Fixed by wrapping each
  function in `useCallback` with stable dependencies (`dispatch` and
  `useState` setters are guaranteed stable, so `[]` is correct).
- **`CartDrawer` and `MobileMenu` hardened against the same class of
  bug** using a "latest ref" pattern: `closeDrawer`/`onClose` are
  stored in a ref updated on every render, so the listener-attachment
  effect depends on `isOpen` alone and can never re-subscribe for an
  unrelated reason, regardless of whether the context fix above holds.
- **A long investigation into an apparent Escape-key bug turned out to
  be a test-script bug, not an app bug.** A synthetic test sequence
  (add items → mutate quantity → checkout → Escape, all within ~1.5s)
  reliably showed the cart drawer "still open" after Escape — but
  disproven as a real bug by systematic elimination: ruled out stale
  hydration (3s settle time didn't change it), duplicate dialog
  elements (confirmed exactly one throughout), dev-vs-production
  (identical in both), and confirmed via direct event tracing that the
  Escape keydown *did* fire the app's own listener correctly (proven
  by watching the listener's cleanup actually run). The real
  explanation: the cart drawer's exit is a Framer Motion spring
  transition, not an instant unmount — `AnimatePresence` keeps the
  dialog in the DOM until the spring settles (observed up to ~650ms
  under load), and the test's fixed 400ms wait sometimes sampled
  mid-animation. Not a UX problem (650ms is a normal panel-close
  duration) — just a test that needed to poll for the node's actual
  removal instead of checking once. The two defensive fixes above are
  still kept — genuinely better practice, just not the cause of this
  particular finding.
- **Neither overlay actually implemented the focus trap this project's
  own [12_ACCESSIBILITY.md](./12_ACCESSIBILITY.md) requires** —
  pre-existing in both (MobileMenu never moved focus in at all;
  neither trapped Tab within itself or returned focus to the trigger
  on close). Fixed properly, matching the doc's own prescribed
  approach: a new `lib/utils/inert-background.ts` toggles the native
  `inert` attribute on `header`, `#main-content` (id added to `<main>`
  in `app/layout.tsx`), `footer`, and the floating WhatsApp button
  (`#whatsapp-float`, previously not covered by any trap since it's a
  layout sibling, not inside those landmarks) while either overlay is
  open — verified with real repeated `Tab` key presses that focus
  never reaches that content. Both overlays now also capture
  `document.activeElement` before stealing focus and restore it in
  the effect cleanup, so focus genuinely returns to whichever element
  triggered the overlay (previously: nothing did this; focus fell
  through to whatever the browser defaults to, observed landing on
  the *next* focusable element in DOM order — in one case, the
  WhatsApp float button).
- **Two real 44px touch-target violations**, caught by measuring
  actual rendered `getBoundingClientRect()` sizes on mobile rather
  than assuming Tailwind classes matched the intended size: the navbar
  logo `<Link>` (40px tall) and all `/shop` category filter chips
  (38px tall, `ShopGrid.tsx`'s `FilterChip`). Both now use `min-h-11`
  the same way `Button` already did — this was a case of the newer
  code (Step 3's filter chips) not reusing the sizing convention
  already established elsewhere.
- **Fixed a pre-existing, unrelated lint error** in `Navbar.tsx`
  (`react-hooks/set-state-in-effect`, present since the reference
  project's original scaffolding, flagged but deliberately left alone
  in Steps 1 and 2 as out of scope) — encountered a third time while
  editing this file for the touch-target fix, so fixed it this time
  using React's own documented pattern for this exact case (reset
  state during render when a prop changes, not in a `useEffect`).
  Verified the nav's optimistic active-link-highlight behavior still
  works identically via direct interaction (immediate highlight on
  click, correct handoff once the route commits).
- **Operational note**: cleaning up headless Chrome processes after
  each test round needed care — `browser.close()` doesn't always fully
  terminate every child process on Windows, and zombie accumulation
  (17 at one point) was the actual cause of a batch of unrelated
  navigation timeouts, not an app issue. One cleanup pass used a
  broad `taskkill /IM chrome.exe /F`, which would have also closed any
  real Chrome windows the project owner had open — flagged to them
  directly; later cleanups instead verified each process's command
  line (`--headless=new`, `--enable-automation`,
  `puppeteer_dev_chrome_profile-*` user-data-dir) before killing by
  specific PID.

Not covered in this pass, left for before-launch follow-up: Lighthouse
audit, Safari/Firefox (neither available in this environment), and a
literal re-check of the empty-cart state after emptying a previously
populated cart (low risk, same code path as the already-verified
fresh-session empty state, but not literally re-exercised).
