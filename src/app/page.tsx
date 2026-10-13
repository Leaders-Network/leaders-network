import { Metadata } from "next"
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

export const metadata: Metadata = {
  title: "Leaders Network - Enterprise Technology Solutions | Transform Your Business",
  description: "Leaders Network delivers enterprise-grade software development, IT consulting, and digital transformation solutions across Africa. 19+ years of proven results.",
  keywords: "enterprise software development, IT consulting Nigeria, digital transformation Africa, business technology solutions, leaders network, software development Lagos",
  alternates: { canonical: "https://leadersnetwork.africa/" },
  openGraph: {
    title: "Leaders Network - Enterprise Technology Solutions",
    description: "Leaders Network delivers enterprise-grade software development, IT consulting, and digital transformation solutions across Africa. 19+ years of proven results.",
    url: "https://leadersnetwork.africa/",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Leaders Network - Enterprise Technology Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Leaders Network - Enterprise Technology Solutions",
    description: "Leaders Network delivers enterprise-grade software development, IT consulting, and digital transformation solutions across Africa."
  }
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Page content sits above the footer */}
      <div className="relative z-10 bg-white dark:bg-dark-950 transition-colors duration-300">
        <Navbar />
        <main id="main-content">
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