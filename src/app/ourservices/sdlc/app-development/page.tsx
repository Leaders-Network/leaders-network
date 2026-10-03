import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import FooterReveal from '@/components/layout/FooterReveal'
import AppDevHeroSection from '@/components/services/appdev/AppDevHeroSection'
import AppDevServicesSection from '@/components/services/appdev/AppDevServicesSection'
import AppDevTechnologiesSection from '@/components/services/appdev/AppDevTechnologiesSection'
import AppDevProcessSection from '@/components/services/appdev/AppDevProcessSection'
import AppDevPortfolioSection from '@/components/services/appdev/AppDevPortfolioSection'
import ContactCTASection from '@/components/sections/ContactCTASection'

export const metadata: Metadata = {
  title: 'Mobile App Development | Leaders Network',
  description: 'Native and cross-platform mobile app development for iOS and Android. Custom mobile applications with modern frameworks and technologies.',
  keywords: 'mobile app development, iOS apps, Android apps, React Native, Flutter, cross-platform development',
  openGraph: {
    title: 'Mobile App Development | Leaders Network',
    description: 'Native and cross-platform mobile app development for modern businesses.',
    images: ['/images/mobile-app-development.avif'],
  },
}

export default function AppDevelopmentPage() {
  return (
    <div className="min-h-screen">
      <div className="relative z-10 bg-white dark:bg-dark-950 transition-colors duration-300">
        <Navbar />
        <main>
          <AppDevHeroSection />
          <AppDevServicesSection />
          <AppDevTechnologiesSection />
          <AppDevProcessSection />
          <AppDevPortfolioSection />
          <ContactCTASection />
        </main>
      </div>
      <FooterReveal />
    </div>
  )
}