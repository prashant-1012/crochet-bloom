# 01 — Requirements

## Functional requirements

### Navigation
- Sticky/floating navbar with: Home, Shop, About, Contact, Cart (with
  item-count badge).
- Mobile: hamburger → full-screen or slide-in menu.
- Smooth-scroll to in-page sections from the homepage nav where
  applicable (Home is a single long page composed of sections).

### Catalog / Shop
- Featured Products section on the homepage (subset, e.g. 4–8 items
  spanning categories).
- Full `/shop` listing page with all products, filterable/grouped by
  category: **Bouquets, Keychains, Hampers, Decor**.
- Each product: image, name, short description, category badge,
  price, "Add to Cart" action.
- Product data driven entirely by `lib/data/products.ts` — no CMS.

### Cart
- Add / remove / update quantity, persisted in `localStorage`.
- Slide-over drawer (not a separate page) accessible from the navbar
  cart icon at any time.
- Drawer shows line items, quantity steppers, subtotal, and a
  "Checkout via WhatsApp" CTA.
- Cart must survive a page refresh (hydrated from `localStorage` on
  mount).

### Checkout
- No payment gateway. Clicking checkout builds a formatted WhatsApp
  message (item names, quantities, per-item price, total items, total
  price) and opens `wa.me/<number>?text=<encoded message>` in a new
  tab.
- See [17_WHATSAPP_CHECKOUT.md](./17_WHATSAPP_CHECKOUT.md) for the
  exact message format.

### Content sections (homepage)
Hero, Featured Products, Meet the Maker (condensed), Testimonials,
Contact (condensed), Footer — see
[03_INFORMATION_ARCHITECTURE.md](./03_INFORMATION_ARCHITECTURE.md).

### About / "Meet the Maker"
- `/about` full page telling the maker's story (personal, handmade
  brand narrative), using the maker photography in
  `crochet-bloom-assets/about-me-*.png`.
- Condensed version of the same story appears as a homepage section.

### Contact
- Contact section/page with a simple form (name, email, message).
  Since there's no backend, submitting opens a WhatsApp chat with the
  form content pre-filled as the message (same pattern as cart
  checkout) rather than a `mailto:` link.

### Floating WhatsApp button
- Persistent floating action button (bottom-right) that opens a direct
  WhatsApp chat (not tied to cart contents) for general inquiries —
  including custom bouquet requests, since customization isn't
  handled as website UI in this phase.

## Non-functional requirements

- **Performance**: Lighthouse ≥ 90 on Performance, Accessibility, Best
  Practices, SEO for the homepage. Use `next/image` for all raster
  images.
- **Responsive**: Mobile-first; must look premium from 360px up to
  large desktop. See
  [11_RESPONSIVE_STRATEGY.md](./11_RESPONSIVE_STRATEGY.md).
- **Accessibility**: Keyboard-navigable cart drawer and mobile menu,
  visible focus states, sufficient color contrast, semantic landmarks.
- **SEO**: Per-page metadata, Open Graph images, JSON-LD
  `Product`/`Organization` structured data, sitemap, robots.txt. See
  [13_SEO_STRATEGY.md](./13_SEO_STRATEGY.md).
- **Type safety**: All data shapes defined in `lib/types/`, no implicit
  `any`.
- **No backend dependency**: The site must build and run fully static
  (or with client-only interactivity) with zero environment variables
  required for a fresh clone to run `npm run dev` successfully.

## Open questions resolved (2026-09-08, with the project owner)

| Question | Resolution |
|---|---|
| Checkout model | Cart + WhatsApp checkout (same pattern as the reference project), not a per-product "enquire only" flow |
| Product photos with visible competitor watermarks | Use as-is for this build phase; revisit before public launch |
| Hero image mismatch (teddy bear vs. flower catalog) | Use the teddy bear photo anyway, as a generic handmade/cozy mood shot |
| Site scope | Home, Shop, About, Contact + a Testimonials section (no blog, no dedicated Testimonials route) |
| Brand colors | Sampled from the logo — see [07_COLOR_SYSTEM.md](./07_COLOR_SYSTEM.md) |
| Display font | Proposed: Fraunces (replacing the reference project's Fredoka) — pending final confirmation, see [08_TYPOGRAPHY.md](./08_TYPOGRAPHY.md) |
| Contact form | Opens WhatsApp chat, consistent with cart checkout |

## Open questions NOT yet resolved

- Real WhatsApp checkout number (placeholder used until provided).
- Real contact email/phone/address (placeholder, marked `TODO`).
- Real product names/descriptions/prices per item (placeholder drafted
  per photo, marked `TODO`).
- Whether Testimonials should eventually get its own route (the
  reference project added one after launch) — default is homepage
  section only for now.
