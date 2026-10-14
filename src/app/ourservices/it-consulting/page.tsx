import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import FooterReveal from '@/components/layout/FooterReveal'
import ITConsultingHeroSection from '@/components/services/itconsulting/ITConsultingHeroSection'
import ITConsultingServicesSection from '@/components/services/itconsulting/ITConsultingServicesSection'
import ITConsultingExpertiseSection from '@/components/services/itconsulting/ITConsultingExpertiseSection'
import ITConsultingProcessSection from '@/components/services/itconsulting/ITConsultingProcessSection'
import ITConsultingCaseStudiesSection from '@/components/services/itconsulting/ITConsultingCaseStudiesSection'
import ContactCTASection from '@/components/sections/ContactCTASection'

export const metadata: Metadata = {
  title: 'IT Consulting & Strategic Advisory Services | Leaders Network',
  description: 'Strategic IT consulting services for digital transformation, technology strategy, cloud migration, and enterprise architecture solutions in Nigeria and Africa.',
  keywords: 'IT consulting Nigeria, digital transformation services Lagos, technology strategy, cloud migration, enterprise architecture, IT advisory',
  alternates: { canonical: 'https://eleadersnetwork.net/ourservices/it-consulting' },
  openGraph: {
    title: 'IT Consulting Services | Leaders Network',
    description: 'Strategic IT consulting for modern business transformation and technology optimization.',
    url: 'https://eleadersnetwork.net/ourservices/it-consulting',
    images: ['/images/architecture.jpg'],
  },
}

export default function ITConsultingPage() {
  return (
    <div className="min-h-screen">
      <div className="relative z-10 bg-white dark:bg-dark-950 transition-colors duration-300">
        <Navbar />
        <main id="main-content">
          <ITConsultingHeroSection />
          <ITConsultingServicesSection />
          <ITConsultingExpertiseSection />
          <ITConsultingProcessSection />
          <ITConsultingCaseStudiesSection />
          <ContactCTASection />
        </main>
      </div>
      <FooterReveal />
    </div>
  )
}