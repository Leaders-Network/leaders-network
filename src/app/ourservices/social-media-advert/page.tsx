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
  title: 'Social Media Advertising & Digital Marketing | Leaders Network',
  description: 'Professional social media advertising and digital marketing services. Grow your business with targeted campaigns across all major platforms in Nigeria and Africa.',
  keywords: 'social media advertising Nigeria, digital marketing Lagos, Facebook ads, Instagram marketing, LinkedIn campaigns, social media strategy',
  alternates: { canonical: 'https://eleadersnetwork.net/ourservices/social-media-advert' },
  openGraph: {
    title: 'Social Media Advertising | Leaders Network',
    description: 'Grow your business with targeted social media campaigns across all major platforms.',
    url: 'https://eleadersnetwork.net/ourservices/social-media-advert',
    images: ['/images/social-media.jpg'],
  },
}

export default function SocialMediaAdvertPage() {
  return (
    <div className="min-h-screen">
      <div className="relative z-10 bg-white dark:bg-dark-950 transition-colors duration-300">
        <Navbar />
        <main id="main-content">
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