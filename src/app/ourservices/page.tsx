import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import FooterReveal from '@/components/layout/FooterReveal'
import ServicesHeroSection from '@/components/services/ServicesHeroSection'
import ServicesCategoriesSection from '@/components/services/ServicesCategoriesSection'
import ServicesProcessSection from '@/components/services/ServicesProcessSection'
import ServicesFeaturesSection from '@/components/services/ServicesFeaturesSection'
import ServicesIndustriesSection from '@/components/services/ServicesIndustriesSection'
import ServicesStatsSection from '@/components/services/ServicesStatsSection'
import ContactCTASection from '@/components/sections/ContactCTASection'

export const metadata: Metadata = {
  title: 'Our Services | Leaders Network - Enterprise Technology Solutions',
  description: 'Comprehensive technology services including SDLC software development, IT consulting, data analysis, and digital transformation solutions for enterprises.',
  keywords: 'enterprise software, IT consulting, data analysis, web development, mobile apps, digital transformation, technology services',
  openGraph: {
    title: 'Our Services | Leaders Network',
    description: 'Enterprise technology solutions that convert and scale with your business.',
    images: ['/images/about-software.jpg'],
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <div className="relative z-10 bg-white dark:bg-dark-950 transition-colors duration-300">
        <Navbar />
        <main>
          <ServicesHeroSection />
          <ServicesCategoriesSection />
          <ServicesProcessSection />
          <ServicesFeaturesSection />
          <ServicesIndustriesSection />
          <ServicesStatsSection />
          <ContactCTASection />
        </main>
      </div>
      <FooterReveal />
    </div>
  )
}