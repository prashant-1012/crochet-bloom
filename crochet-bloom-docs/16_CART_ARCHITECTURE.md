# 16 — Cart Architecture

Ported near-verbatim from the reference project — this pattern is
proven and Crochet Bloom's cart requirements (add/remove/update
quantity, persist locally, WhatsApp checkout) are functionally
identical to the reference project's, just with different product
data flowing through it. See [20_CLAUDE_NOTES.md](./20_CLAUDE_NOTES.md)
for what changes vs. what's copied unchanged.

## State management

- `React.createContext` + `useReducer`, defined in
  `components/cart/CartProvider.tsx` (`'use client'`).
- Reducer implements the `CartAction` union from
  [15_DATA_STRUCTURE.md](./15_DATA_STRUCTURE.md):
  `ADD_ITEM` (merges quantity if the product already exists in cart),
  `REMOVE_ITEM`, `UPDATE_QUANTITY` (clamps to `>= 1`; use
  `REMOVE_ITEM` to go to zero), `CLEAR_CART`, `HYDRATE` (used once on
  mount to load persisted state).
- Exposes a `useCart()` hook returning `{ items, addItem, removeItem,
  updateQuantity, clearCart, subtotal, itemCount, isDrawerOpen,
  openDrawer, closeDrawer, toggleDrawer }`. Components never dispatch
  raw actions directly — they call the hook's named methods.

## Persistence

- `localStorage` key: `cb_cart_v1` (versioned key, same pattern as the
  reference project's `etd_cart_v1`, so a future schema change can
  invalidate old carts safely rather than crash on malformed data).
- On mount (`useEffect`, client-only), read from `localStorage`,
  `JSON.parse` inside a `try/catch` (corrupt/old data → fall back to
  empty cart, don't throw), dispatch `HYDRATE`.
- On every state change after hydration, write the current state back
  to `localStorage`. Guard against writing the empty initial state
  over a not-yet-hydrated real cart (use a `hydrated` ref, same as the
  reference project).
- No cross-tab sync required for this phase — single-tab usage is the
  expected pattern.

## Where it's wired

- `CartProvider` wraps `{children}` in `app/layout.tsx`, inside
  `<body>`, so `useCart()` is available to `Navbar` (badge count),
  `CartDrawer`, and any `ProductCard`'s "Add to Cart" button
  everywhere in the tree.

## Cart drawer behavior

- Triggered by `CartButton` (navbar icon), drawer open/close state
  lives alongside the cart *data* reducer in the same provider (same
  approach as the reference project) so opening/closing the drawer
  never risks touching cart contents.
- Empty state: friendly message + "Browse the Shop" CTA linking to
  `/shop`, not just a blank panel.
- Checkout CTA at the bottom builds the WhatsApp message — see
  [17_WHATSAPP_CHECKOUT.md](./17_WHATSAPP_CHECKOUT.md).

## Explicitly not built

- No stock-decrement-on-purchase (there's no backend to enforce it) —
  `inStock` on `Product` is purely a display flag to disable "Add to
  Cart" in the UI.
- No per-item customization UI (color swaps, personalization) in the
  cart — those requests happen in the WhatsApp conversation after
  checkout, per the owner's decision to keep checkout as a simple cart
  flow rather than build a hybrid customize-then-order path.
