import { Hero } from "@/components/sections/Hero";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { LearningBenefits } from "@/components/sections/LearningBenefits";
import { MeetTheMaker } from "@/components/sections/MeetTheMaker";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <LearningBenefits />
      <MeetTheMaker />
      <Testimonials />
      <BlogPreview />
      <Contact />
    </>
  );
}
