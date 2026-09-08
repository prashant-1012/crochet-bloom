export const SITE_NAME = 'Crochet Bloom'
export const SITE_DESCRIPTION =
  'Handmade crochet flower bouquets, keychains, hampers, and decor — everlasting, made-to-order gifts, crafted by hand.'
// TODO: replace with the real production domain before launch
export const SITE_URL = 'https://crochetbloom.vercel.app'

// TODO: replace with the real WhatsApp business number before launch (digits only, country code included, no '+'/spaces — required format for wa.me links)
export const WHATSAPP_NUMBER = '910000000000'

// TODO: replace with real contact details before launch
export const CONTACT_EMAIL = 'hello@crochetbloom.com'
export const CONTACT_PHONE = '+91 00000 00000'
export const CONTACT_ADDRESS = 'Address to be added'

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const

export const CATEGORY_LABELS = {
  bouquets: 'Bouquets',
  keychains: 'Keychains',
  hampers: 'Hampers',
  decor: 'Decor',
} as const
