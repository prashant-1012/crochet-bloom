import { Hero } from "@/components/sections/Hero";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { MeetTheMaker } from "@/components/sections/MeetTheMaker";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <MeetTheMaker />
      <Testimonials />
      <Contact />
    </>
  );
}
