import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import FooterReveal from '@/components/layout/FooterReveal'
import SDLCHeroSection from '@/components/services/sdlc/SDLCHeroSection'
import SDLCProcessSection from '@/components/services/sdlc/SDLCProcessSection'
import SDLCTechnologiesSection from '@/components/services/sdlc/SDLCTechnologiesSection'
import SDLCBenefitsSection from '@/components/services/sdlc/SDLCBenefitsSection'
import SDLCCaseStudiesSection from '@/components/services/sdlc/SDLCCaseStudiesSection'
import ContactCTASection from '@/components/sections/ContactCTASection'

export const metadata: Metadata = {
  title: 'SDLC Software Development | Leaders Network',
  description: 'Comprehensive software development lifecycle services from planning to deployment. Custom software solutions, web applications, and enterprise systems.',
  keywords: 'SDLC, software development, web development, mobile apps, enterprise software, agile development, DevOps',
  openGraph: {
    title: 'SDLC Software Development | Leaders Network',
    description: 'Comprehensive software development lifecycle services from planning to deployment.',
    images: ['/images/about-software.jpg'],
  },
}

export default function SDLCPage() {
  return (
    <div className="min-h-screen">
      <div className="relative z-10 bg-white dark:bg-dark-950 transition-colors duration-300">
        <Navbar />
        <main>
          <SDLCHeroSection />
          <SDLCProcessSection />
          <SDLCTechnologiesSection />
          <SDLCBenefitsSection />
          <SDLCCaseStudiesSection />
          <ContactCTASection />
        </main>
      </div>
      <FooterReveal />
    </div>
  )
}