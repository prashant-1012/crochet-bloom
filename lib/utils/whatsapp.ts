import type { CartItem } from '@/lib/types/cart'
import { formatPrice } from '@/lib/utils/format-price'
import { WHATSAPP_NUMBER } from '@/lib/constants'

export function buildOrderMessage(items: CartItem[]): string {
  const lines = items.map(
    (item, index) =>
      `${index + 1}. ${item.name} x${item.quantity} — ${formatPrice(item.price * item.quantity)}`
  )
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return [
    "Hi Crochet Bloom! I'd like to order:",
    '',
    ...lines,
    '',
    `Total Items: ${totalItems}`,
    `Total Price: ${formatPrice(totalPrice)}`,
    '',
    '(Sent from the website cart)',
  ].join('\n')
}

export function buildInquiryMessage(): string {
  return "Hi! I have a question about Crochet Bloom — I'd also love to ask about a custom bouquet."
}

export function buildContactMessage(data: { name: string; email: string; message: string }): string {
  return `Hi Crochet Bloom! My name is ${data.name} (${data.email}).\n\n${data.message}`
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function openWhatsApp(message: string): void {
  window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
}
