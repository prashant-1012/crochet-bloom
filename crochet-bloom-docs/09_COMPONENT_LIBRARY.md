# 09 — Component Library

Component inventory to be built under `components/`. See
[14_FOLDER_STRUCTURE.md](./14_FOLDER_STRUCTURE.md) for exact file
paths. Most `ui/` and `cart/` primitives port over from the reference
project with only visual/token changes — noted per-component below.

## `ui/` — primitive, reusable, no business logic

| Component | Purpose | vs. reference project |
|---|---|---|
| `Button` | Variants: `primary` (Bloom Dark fill), `secondary` (Yarn outline), `ghost`. Sizes: `sm`/`md`/`lg`. Handles hover/press motion internally. | Recolored only |
| `Badge` | Small pill label (e.g. category tag, "Best Seller"). | Recolored only |
| `Card` | Base card shell with `shadow-soft`, `rounded-2xl`, hover → `shadow-lift`. | Unchanged |
| `SectionHeading` | Consistent eyebrow + H2 + optional subtext pattern used across all homepage sections. | Unchanged structurally, uses `font-display` (Fraunces) |
| `Blob` | Decorative SVG background shape, accepts `color`/`className`. | Ported unchanged, now paired with `ThreadSwirl` |
| `ThreadSwirl` | New — organic single-line SVG curl motif evoking yarn/thread, same prop API as `Blob` (`color`/`className`) so it's a drop-in alternative. | New component, no reference-project equivalent |
| `ProductCard` | Image, name, price, category badge, Add to Cart button — used in Featured Products and `/shop`. | Field changes: `ageRange` → `category`, otherwise same shape |
| `QuantityStepper` | `-` / count / `+` control, used in cart. | Unchanged |
| `Wordmark` | Renders "Crochet" (Yarn) / "Bloom" (Bloom) as colored text, optional tagline. | Two words instead of three, otherwise same pattern |

## `layout/`

| Component | Purpose |
|---|---|
| `Navbar` | Logo, nav links (Home/Shop/About/Contact), Cart button with badge, mobile hamburger trigger. Sticky on scroll. |
| `MobileMenu` | Slide-in/full-screen nav for small viewports. |
| `Footer` | Nav links, social placeholders, contact placeholder, copyright, `Wordmark`. |

## `sections/` — homepage sections, one component per section

`Hero`, `FeaturedProducts`, `MeetTheMaker`, `Testimonials`, `Contact`
— each self-contained, imported in order into `app/page.tsx`. No
`LearningBenefits` or `BlogPreview` equivalents — see
[03_INFORMATION_ARCHITECTURE.md](./03_INFORMATION_ARCHITECTURE.md)
for why this project's section list is shorter than the reference
project's.

## `cart/`

| Component | Purpose |
|---|---|
| `CartProvider` | Client Component wrapping the app in `layout.tsx`; owns cart state + localStorage sync. Ported near-verbatim from the reference project (see [16_CART_ARCHITECTURE.md](./16_CART_ARCHITECTURE.md)). |
| `CartButton` | Navbar icon + item-count badge, opens drawer. |
| `CartDrawer` | Slide-over panel: line items, totals, WhatsApp checkout CTA. |
| `CartItemRow` | Single line item with image, name, price, `QuantityStepper`, remove action. |

## `shared/`

| Component | Purpose |
|---|---|
| `WhatsAppFloat` | Persistent floating action button, bottom-right, opens general-inquiry WhatsApp chat (including custom bouquet requests, since customization isn't website UI in this phase). |
| `JsonLd` | Ported unchanged — renders arbitrary JSON-LD script tags. |

## Composition rule

Sections and layout components may import `ui/` primitives freely.
`ui/` primitives must never import from `sections/` or `cart/` —
keeps the dependency graph one-directional and the primitives
reusable. Same rule as the reference project.
