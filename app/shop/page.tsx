import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShopGrid } from "@/components/shop/ShopGrid";
import { JsonLd } from "@/components/shared/JsonLd";
import { SITE_URL } from "@/lib/constants";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse handmade crochet flower bouquets, keychains, gift hampers, and decor — every piece hand-stitched to order.",
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-20 xl:px-12">
      {products.map((product) => (
        <JsonLd
          key={product.id}
          data={{
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.shortDescription,
            image: `${SITE_URL}${product.image}`,
            offers: {
              "@type": "Offer",
              price: product.price,
              priceCurrency: "INR",
              availability: product.inStock
                ? "https://schema.org/InStock"
                : "https://schema.org/OutOfStock",
            },
          }}
        />
      ))}

      <SectionHeading
        eyebrow="Shop"
        title="The Full Collection"
        subtitle="Every piece is crocheted by hand — browse by category, or see everything at once."
        align="left"
      />

      <div className="mt-12">
        <ShopGrid products={products} />
      </div>
    </div>
  );
}
