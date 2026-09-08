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
  {
    id: 't10',
    name: 'Rohan Kapoor',
    relation: 'Ordered a Potted Sunflower for the office desk',
    quote:
      "Wanted a small desk plant that wouldn't die from neglect. This is perfect — no watering, no dying leaves, just sits there looking cheerful every day.",
    rating: 5,
  },
  {
    id: 't11',
    name: 'Divya Menon',
    relation: 'Bought the Twirling Tulips Bouquet as a thank-you gift',
    quote:
      "Needed a thank-you gift that felt a little more special than flowers from the corner shop. The twist in each tulip petal is such a lovely detail up close.",
    rating: 5,
  },
  {
    id: 't12',
    name: 'Arjun Verma',
    relation: 'Ordered the LED Bouquet Table Decor as a surprise',
    quote:
      "Set it up on the dinner table before she got home and the soft glow made the whole evening feel like an occasion. Worth every rupee.",
    rating: 5,
  },
  {
    id: 't13',
    name: 'Nisha Bhatt',
    relation: 'Gifted a Unicorn Keychain to her niece',
    quote:
      "My niece is obsessed with unicorns and this keychain has survived being attached to her school bag for two months now without a single loose thread.",
    rating: 5,
  },
  {
    id: 't14',
    name: 'Karan Malhotra',
    relation: 'Bought a Sunflower Boho Basket for home decor',
    quote:
      "Was looking for something boho and textured for an empty corner shelf. This basket arrangement got more compliments than actual furniture.",
    rating: 4,
  },
  {
    id: 't15',
    name: 'Simran Kaur',
    relation: 'Ordered the Hamper for Her for a birthday',
    quote:
      "The hamper felt genuinely thoughtful, not like a generic gift basket. The bouquet inside alone would've been enough, but the extra touches sealed it.",
    rating: 5,
  },
  {
    id: 't16',
    name: 'Aditya Rao',
    relation: 'Bought an Avocado Keychain as a joke gift',
    quote:
      "Got this as a silly gift for a friend who's obsessed with avocado toast, and it turned out way better made than I expected for something meant to be a joke.",
    rating: 4,
  },
  {
    id: 't17',
    name: 'Pooja Reddy',
    relation: 'Ordered a Daisy Bouquet for a housewarming',
    quote:
      "Brought this to a friend's housewarming instead of the usual candle or plant, and it's now sitting on her mantelpiece months later, still looking exactly the same.",
    rating: 5,
  },
  {
    id: 't18',
    name: 'Naveen Pillai',
    relation: 'Bought the Double Love Bouquet for an anniversary',
    quote:
      "Two roses instead of one felt like the right call for our anniversary, and the fact that they'll never wilt means it's not just a one-day gift.",
    rating: 5,
  },
  {
    id: 't19',
    name: 'Tanvi Joshi',
    relation: 'Ordered a Daisy Keychain for herself',
    quote:
      "Not every purchase needs a reason. I just liked the daisy keychain and it's been clipped to my tote bag ever since.",
    rating: 4,
  },
  {
    id: 't20',
    name: 'Ishaan Chatterjee',
    relation: 'Bought the Roseate Bouquet for a proposal',
    quote:
      "Used this bouquet the day I proposed instead of real roses, so it could actually last as a keepsake afterward. She loved that detail as much as the proposal itself.",
    rating: 5,
  },
]

export function getHomepageTestimonials(): Testimonial[] {
  return testimonials.slice(0, 4)
}
