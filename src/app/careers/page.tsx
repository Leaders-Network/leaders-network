import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import FooterReveal from '@/components/layout/FooterReveal'
import CareersHeroSection from '@/components/sections/CareersHeroSection'
import CompanyCultureSection from '@/components/sections/CompanyCultureSection'
import PerksAndBenefitsSection from '@/components/sections/PerksAndBenefitsSection'
import OpenPositionsSection from '@/components/sections/OpenPositionsSection'
import TalentPoolSection from '@/components/sections/TalentPoolSection'

export const metadata: Metadata = {
  title: 'Careers at Leaders Network | Join Our Team',
  description: 'Explore career opportunities at Leaders Network — Nigeria\'s leading enterprise technology consultancy. Find roles in software development, consulting, and digital transformation.',
  keywords: 'careers leaders network, technology jobs Nigeria, software developer jobs Lagos, IT consulting careers, digital transformation jobs',
  alternates: { canonical: 'https://leadersnetwork.africa/careers' },
  openGraph: {
    title: 'Careers at Leaders Network',
    description: 'Join Africa\'s leading enterprise technology consultancy. We are hiring software developers, IT consultants, and digital transformation specialists.',
    url: 'https://leadersnetwork.africa/careers'
  }
}

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      {/* Page content sits above the footer */}
      <div className="relative z-10 bg-white dark:bg-dark-950 transition-colors duration-300">
        <Navbar />
        <main id="main-content">
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