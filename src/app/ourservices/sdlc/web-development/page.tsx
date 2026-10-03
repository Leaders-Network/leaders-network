import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import FooterReveal from '@/components/layout/FooterReveal'
import WebDevHeroSection from '@/components/services/webdev/WebDevHeroSection'
import WebDevServicesSection from '@/components/services/webdev/WebDevServicesSection'
import WebDevTechnologiesSection from '@/components/services/webdev/WebDevTechnologiesSection'
import WebDevPortfolioSection from '@/components/services/webdev/WebDevPortfolioSection'
import WebDevProcessSection from '@/components/services/webdev/WebDevProcessSection'
import ContactCTASection from '@/components/sections/ContactCTASection'

export const metadata: Metadata = {
  title: 'Web Development Services | Leaders Network',
  description: 'Professional web development services including responsive websites, web applications, e-commerce platforms, and custom web solutions.',
  keywords: 'web development, responsive design, web applications, e-commerce, React, Next.js, full-stack development',
  openGraph: {
    title: 'Web Development Services | Leaders Network',
    description: 'Professional web development services for modern businesses.',
    images: ['/images/about-web-dev.jpg'],
  },
}

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen">
      <div className="relative z-10 bg-white dark:bg-dark-950 transition-colors duration-300">
        <Navbar />
        <main>
          <WebDevHeroSection />
          <WebDevServicesSection />
          <WebDevTechnologiesSection />
          <WebDevProcessSection />
          <WebDevPortfolioSection />
          <ContactCTASection />
        </main>
      </div>
      <FooterReveal />
    </div>
  )
}