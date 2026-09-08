import { Hero } from "@/components/sections/Hero";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { LearningBenefits } from "@/components/sections/LearningBenefits";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <LearningBenefits />
      <About />
      <Testimonials />
      <BlogPreview />
      <Contact />
    </>
  );
}
