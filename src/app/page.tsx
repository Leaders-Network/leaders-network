import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkSection from "@/components/sections/WorkSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import ResultsSection from "@/components/sections/ResultsSection";
import TeamSection from "@/components/sections/TeamSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactCTASection from "@/components/sections/ContactCTASection";
import FooterReveal from "@/components/layout/FooterReveal";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Page content sits above the footer */}
      <div className="relative z-10 bg-white dark:bg-dark-950 transition-colors duration-300">
        <Navbar />
        <main>
          <HeroSection />
          <ServicesSection />
          <WorkSection />
          <WhyChooseUsSection />
          <TestimonialSection />
          <ResultsSection />
          <TeamSection />
          <FAQSection />
          <ContactCTASection />
        </main>
      </div>
          <FooterReveal />
    </div>
  );
}