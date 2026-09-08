# 15 — Data Structure

All content is typed TypeScript data — no CMS, no database. Types live
in `lib/types/`, data lives in `lib/data/`.

## `lib/types/product.ts`

```ts
export interface Product {
  id: string
  slug: string
  name: string
  shortDescription: string
  description: string
  price: number          // in INR, integer (display formats via format-price.ts)
  compareAtPrice?: number
  image: string           // path under /public/images
  category: 'bouquets' | 'keychains' | 'hampers' | 'decor'
  tags: string[]
  inStock: boolean
  featured: boolean
  madeToOrder: boolean    // true for most items — surfaces a "Handcrafted to order" badge instead of implying instant dispatch
}
```

`category` replaces the reference project's `ageRange` field — this
catalog is organized by product type, not an age range.
`madeToOrder` is new: since these are handmade items rather than
stocked inventory, product cards and detail copy should set gentle
expectations (a small badge/label) rather than implying same-day
dispatch, per
[02_USER_PERSONAS.md](./02_USER_PERSONAS.md)'s design implications.

## `lib/types/cart.ts`

Unchanged from the reference project — the cart doesn't need to know
about product categories, only what's in it:

```ts
export interface CartItem {
  productId: string
  name: string
  price: number
  image: string
  slug: string
  quantity: number
}

export interface CartState {
  items: CartItem[]
}

export type CartAction =
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity'>; quantity?: number }
  | { type: 'REMOVE_ITEM'; payload: { productId: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'HYDRATE'; payload: CartState }
```

## Testimonial (inline type, `lib/data/testimonials.ts`)

```ts
export interface Testimonial {
  id: string
  name: string
  relation: string        // e.g. "Bought a birthday bouquet"
  quote: string
  rating: 1 | 2 | 3 | 4 | 5
  avatar?: string
}
```

`relation` describes the purchase occasion rather than a family
relationship, since that's the more relevant trust signal for a
gifting brand (see [02_USER_PERSONAS.md](./02_USER_PERSONAS.md)).

## Product catalog policy

`lib/data/products.ts` maps the usable photos in
`crochet-bloom-assets/products/` to draft `Product` entries — realistic
placeholder names/descriptions/prices per item, each flagged with a
`// TODO: replace with real product info before launch` comment. See
[20_CLAUDE_NOTES.md](./20_CLAUDE_NOTES.md) for the specific
photo-to-product mapping and category assignment worked out during
planning (21 distinct products across the four categories, after
excluding 3 photos that are duplicate/alternate shots of another
listed product).

Same placeholder policy applies to `lib/constants.ts` for the WhatsApp
number and contact email/phone/address, and to `lib/data/testimonials.ts`
(no real customer testimonials provided yet).
