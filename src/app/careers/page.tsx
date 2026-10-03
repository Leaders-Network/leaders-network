import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import FooterReveal from '@/components/layout/FooterReveal'
import CareersHeroSection from '@/components/sections/CareersHeroSection'
import CompanyCultureSection from '@/components/sections/CompanyCultureSection'
import PerksAndBenefitsSection from '@/components/sections/PerksAndBenefitsSection'
import OpenPositionsSection from '@/components/sections/OpenPositionsSection'
import TalentPoolSection from '@/components/sections/TalentPoolSection'

export const metadata: Metadata = {
  title: 'Careers - Leaders Network | Join Our Team',
  description: 'Join Leaders Network and help build the future of enterprise technology. Explore exciting career opportunities with 19+ years of industry-leading innovation.',
  keywords: 'careers, jobs, software development, enterprise technology, Nigeria, remote work, full-time positions',
}

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      {/* Page content sits above the footer */}
      <div className="relative z-10 bg-white dark:bg-dark-950 transition-colors duration-300">
        <Navbar />
        <main>
          <CareersHeroSection />
          <CompanyCultureSection />
          <PerksAndBenefitsSection />
          <OpenPositionsSection />
          <TalentPoolSection />
        </main>
      </div>
      <FooterReveal />
    </div>
  )
}