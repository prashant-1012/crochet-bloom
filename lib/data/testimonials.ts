export interface Testimonial {
  id: string
  name: string
  relation: string
  quote: string
  rating: 1 | 2 | 3 | 4 | 5
  avatar?: string
}

// TODO: replace with real customer testimonials before launch
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Ananya Rao',
    relation: "Bought a birthday bouquet for her sister",
    quote:
      "I sent a photo before ordering just to check the colors, and the actual bouquet looked even better in person. My sister still has it on her desk months later — it just doesn't fade.",
    rating: 5,
  },
  {
    id: 't2',
    name: 'Kabir Malhotra',
    relation: 'Bought the Hamper for Her for their anniversary',
    quote:
      "Ordering over WhatsApp felt more personal than any checkout page — I could actually ask questions about the hamper contents before committing. My wife loved that it wasn't just flowers.",
    rating: 5,
  },
  {
    id: 't3',
    name: 'Sneha Iyer',
    relation: 'Ordered keychains as party favors',
    quote:
      "Added a handful of keychains to the cart and sorted quantities over WhatsApp in minutes. Every single one was stitched perfectly — my guests kept asking where I got them.",
    rating: 5,
  },
  {
    id: 't4',
    name: 'Farah Sheikh',
    relation: "Gifted a rose bouquet for a friend's engagement",
    quote:
      "I wanted something that wasn't just another bouquet that wilts in a week. The single rose was gorgeous, and it's now sitting on her shelf as a keepsake, not in the bin.",
    rating: 5,
  },
  {
    id: 't5',
    name: 'Priya Nair',
    relation: "Bought the Ensemble Mixed Bouquet for her mother's birthday",
    quote:
      "The mixed bouquet was the showstopper I hoped for — every flower type stitched with so much care. My mother actually teared up opening it, which says everything.",
    rating: 5,
  },
  {
    id: 't6',
    name: 'Rahul Deshmukh',
    relation: 'Ordered the LED bouquet for a dinner centerpiece',
    quote:
      "Used the LED bouquet as our table centerpiece for an engagement dinner and it photographed beautifully. Genuinely didn't expect handmade crochet to look this polished.",
    rating: 5,
  },
  {
    id: 't7',
    name: 'Meera Joshi',
    relation: 'Small business owner, ordered in bulk for client gifting',
    quote:
      "Ordered a batch of keychains for client gifting and the WhatsApp back-and-forth on quantity and pricing was the easiest vendor interaction I've had all year.",
    rating: 5,
  },
  {
    id: 't8',
    name: 'Aisha Khan',
    relation: 'First-time buyer, treated herself to a daisy bouquet',
    quote:
      "Bought this for myself, no occasion needed, and I don't regret it at all. The stitching detail up close is honestly impressive — you can tell it's made by hand, not a machine.",
    rating: 4,
  },
  {
    id: 't9',
    name: 'Vikram Nataraj',
    relation: 'Grandfather, gifted a bouquet to his granddaughter',
    quote:
      "I'm not one for online shopping, but adding to cart and finishing the order over WhatsApp was simple enough for me to manage on my own. My granddaughter was thrilled.",
    rating: 5,
  },
]

export function getHomepageTestimonials(): Testimonial[] {
  return testimonials.slice(0, 4)
}
