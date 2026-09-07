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
    relation: 'Mom of a 3-year-old',
    quote:
      "The tracing workbook has become our favorite quiet-time activity. It's screen-free, my daughter loves it, and I can actually see her pencil grip improving.",
    rating: 5,
    avatar: '/images/ananya.webp',
  },
  {
    id: 't2',
    name: 'Kabir Malhotra',
    relation: 'Dad of a 4-year-old',
    quote:
      'Finally a workbook that doesn\'t feel like a school worksheet. The pages are colorful without being overwhelming, and my son asks for it by name.',
    rating: 5,
    avatar: '/images/kabir.webp',
  },
  {
    id: 't3',
    name: 'Sneha Iyer',
    relation: 'Mom of twin 2-year-olds',
    quote:
      'Ordering was so easy — added everything to cart and sorted the rest over WhatsApp in minutes. The quality of the print and paper is genuinely premium.',
    rating: 5,
    avatar: '/images/sneha.webp',
  },
  {
    id: 't4',
    name: 'Farah Sheikh',
    relation: 'Grandmother, gifting for a 3-year-old',
    quote:
      'I wanted a thoughtful gift that wasn\'t another toy. These workbooks were the perfect middle ground — educational, but still fun for a toddler.',
    rating: 5,
    avatar: '/images/farah.webp',
  },
  {
    id: 't5',
    name: 'Priya Nair',
    relation: 'Mom of a 2.5-year-old',
    quote:
      'We started with the Shapes & Colors workbook and my daughter now asks for "her book" every morning. It\'s become part of our routine, not a chore.',
    rating: 5,
  },
  {
    id: 't6',
    name: 'Rahul Deshmukh',
    relation: 'Dad of a 5-year-old',
    quote:
      'His pencil grip has genuinely improved since we started the pre-writing pages. Simple activities, but you can see the difference after a few weeks.',
    rating: 5,
  },
  {
    id: 't7',
    name: 'Meera Joshi',
    relation: 'Playschool owner',
    quote:
      'Ordered a bulk set for my classroom over WhatsApp and it was the easiest vendor interaction I\'ve had — quick replies, fair pricing for quantity, no hassle.',
    rating: 5,
  },
  {
    id: 't8',
    name: 'Aisha Khan',
    relation: 'Mom of a 4-year-old',
    quote:
      'The paper quality alone sets this apart — thick enough that crayon and marker don\'t bleed through. Feels like a real product, not a printout.',
    rating: 4,
  },
  {
    id: 't9',
    name: 'Vikram Nataraj',
    relation: 'Grandfather, gifting for a 4-year-old',
    quote:
      'I\'m not great with online shopping, but adding to cart and finishing over WhatsApp was simple enough for me to manage on my own. My grandson loved it.',
    rating: 5,
  },
]

export function getHomepageTestimonials(): Testimonial[] {
  return testimonials.slice(0, 4)
}
