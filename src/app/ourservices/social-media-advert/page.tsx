import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import FooterReveal from '@/components/layout/FooterReveal'
import SocialMediaHeroSection from '@/components/services/socialmedia/SocialMediaHeroSection'
import SocialMediaServicesSection from '@/components/services/socialmedia/SocialMediaServicesSection'
import SocialMediaPlatformsSection from '@/components/services/socialmedia/SocialMediaPlatformsSection'
import SocialMediaProcessSection from '@/components/services/socialmedia/SocialMediaProcessSection'
import SocialMediaCaseStudiesSection from '@/components/services/socialmedia/SocialMediaCaseStudiesSection'
import ContactCTASection from '@/components/sections/ContactCTASection'

export const metadata: Metadata = {
  title: 'Social Media Advertising | Leaders Network',
  description: 'Professional social media advertising and marketing services. Grow your business with targeted campaigns across all major platforms.',
  keywords: 'social media advertising, digital marketing, Facebook ads, Instagram marketing, LinkedIn campaigns, social media strategy',
  openGraph: {
    title: 'Social Media Advertising | Leaders Network',
    description: 'Grow your business with targeted social media campaigns.',
    images: ['/images/social-media.jpg'],
  },
}

export default function SocialMediaAdvertPage() {
  return (
    <div className="min-h-screen">
      <div className="relative z-10 bg-white dark:bg-dark-950 transition-colors duration-300">
        <Navbar />
        <main>
          <SocialMediaHeroSection />
          <SocialMediaServicesSection />
          <SocialMediaPlatformsSection />
          <SocialMediaProcessSection />
          <SocialMediaCaseStudiesSection />
          <ContactCTASection />
        </main>
      </div>
      <FooterReveal />
    </div>
  )
}