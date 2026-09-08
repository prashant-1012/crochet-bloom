export type ProductCategory = 'bouquets' | 'keychains' | 'hampers' | 'decor'

export interface Product {
  id: string
  slug: string
  name: string
  shortDescription: string
  description: string
  price: number
  compareAtPrice?: number
  image: string
  category: ProductCategory
  tags: string[]
  inStock: boolean
  featured: boolean
  // true for most items — surfaces a "Handcrafted to order" badge instead of implying instant dispatch
  madeToOrder: boolean
}
