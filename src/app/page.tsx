
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section"; 
import { ClassificationPreviewSection } from "@/components/sections/preview-section";
import { Testimonials } from "@/components/sections/motivation";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main >
      <HeroSection />
      <AboutSection />
      <ClassificationPreviewSection />
      <Testimonials />
      <Footer />
    </main>
  );
}
