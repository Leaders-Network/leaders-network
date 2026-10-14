import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import FooterReveal from '@/components/layout/FooterReveal'
import ServicesHeroSection from '@/components/services/ServicesHeroSection'
import ServicesCategoriesSection from '@/components/services/ServicesCategoriesSection'
import ServicesProcessSection from '@/components/services/ServicesProcessSection'
import ServicesFeaturesSection from '@/components/services/ServicesFeaturesSection'
import ServicesIndustriesSection from '@/components/services/ServicesIndustriesSection'
// import ServicesStatsSection from '@/components/services/ServicesStatsSection'
import ContactCTASection from '@/components/sections/ContactCTASection'

export const metadata: Metadata = {
  title: 'Our Services | Enterprise Technology Solutions — Leaders Network',
  description: 'Leaders Network offers enterprise software development, IT consulting, digital transformation, data analysis, and staff recruitment services in Nigeria and across Africa.',
  keywords: 'enterprise technology services Nigeria, software development Lagos, IT consulting Africa, digital transformation, data analysis, staff recruitment',
  alternates: { canonical: 'https://eleadersnetwork.net/ourservices' },
  openGraph: {
    title: 'Enterprise Technology Services | Leaders Network',
    description: 'Full-spectrum technology services: software development, IT consulting, digital transformation, data analysis, and recruitment across Africa.',
    url: 'https://eleadersnetwork.net/ourservices',
    images: ['/images/about-software.jpg'],
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <div className="relative z-10 bg-white dark:bg-dark-950 transition-colors duration-300">
        <Navbar />
        <main id="main-content">
          <ServicesHeroSection />
          <ServicesCategoriesSection />
          <ServicesProcessSection />
          <ServicesFeaturesSection />
          <ServicesIndustriesSection />
          {/* <ServicesStatsSection /> */}
          <ContactCTASection />
        </main>
      </div>
      <FooterReveal />
    </div>
  )
}