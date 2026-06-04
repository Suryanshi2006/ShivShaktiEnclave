import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HighlightsSection from "@/components/HighlightsSection";
import LocationSection from "@/components/LocationSection";
import InvestmentSection from "@/components/InvestmentSection";
import GallerySection from "@/components/GallerySection";
import AmenitiesSection from "@/components/AmenitiesSection";
import TrustSection from "@/components/TrustSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <InvestmentSection />
      <LocationSection />
      <AmenitiesSection />
      <GallerySection />
      <TrustSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
