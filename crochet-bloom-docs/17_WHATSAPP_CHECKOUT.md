# 17 — WhatsApp Checkout

## Number — not yet confirmed

Unlike the reference project (which had a confirmed real number from
day one), **Crochet Bloom's WhatsApp business number has not been
provided yet**. `lib/constants.ts` will use an obvious placeholder
(e.g. `WHATSAPP_NUMBER = '910000000000'`) marked `TODO` until the
project owner supplies the real number — this blocks a real launch
but not development, since the checkout flow works identically with a
placeholder number for testing.

## Message format

Built in `lib/utils/whatsapp.ts`, a pure function
`buildOrderMessage(items: CartItem[]): string`:

```
Hi Crochet Bloom! I'd like to order:

1. Twirling Tulips Bouquet x1 — ₹649
2. Sunflower Keychain x2 — ₹398

Total Items: 3
Total Price: ₹1047

(Sent from the website cart)
```

Rules (same as the reference project):
- One line per item: `<name> x<quantity> — ₹<line total>`.
- `Total Items` = sum of quantities (not distinct product count).
- `Total Price` = sum of `price * quantity` across items, formatted via
  the same `format-price.ts` helper used everywhere else (no separate
  formatting logic here).
- Trailing `(Sent from the website cart)` line so the business owner
  can distinguish website orders from organic WhatsApp messages.

## Link construction

```ts
const encoded = encodeURIComponent(message)
const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
window.open(url, '_blank', 'noopener,noreferrer')
```

- Always `encodeURIComponent` the full message — never hand-build the
  query string.
- Open in a new tab (`_blank`) with `noopener,noreferrer` so the
  storefront tab stays open and the cart isn't lost if the user comes
  back.
- Do **not** clear the cart automatically after opening WhatsApp — the
  order isn't confirmed until the business owner replies. Provide a
  separate manual "Clear Cart" affordance instead.

## Floating WhatsApp button (general inquiries)

- Separate from checkout — a fixed link to a generic-greeting WhatsApp
  chat, not tied to cart contents. Since this project has no
  per-product customization UI, this button is also the primary path
  for custom bouquet/color requests — copy should invite that
  explicitly (e.g. "Have a custom bouquet in mind? Chat with us on
  WhatsApp"), not just handle generic questions the way the reference
  project's version did.

## Edge cases

- Empty cart: the checkout CTA in the drawer should be disabled (or
  hidden in favor of the empty-state CTA) rather than sending a blank
  order message.
- Very long carts: WhatsApp URLs have a practical length limit in some
  clients; not expected to be a real concern given typical handmade-gift
  order sizes, same as the reference project's assessment — revisit
  only if it becomes one.
