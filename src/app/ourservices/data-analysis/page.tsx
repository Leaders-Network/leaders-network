import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import FooterReveal from '@/components/layout/FooterReveal'
import DataAnalysisHeroSection from '@/components/services/dataanalysis/DataAnalysisHeroSection'
import DataAnalysisServicesSection from '@/components/services/dataanalysis/DataAnalysisServicesSection'
import DataAnalysisToolsSection from '@/components/services/dataanalysis/DataAnalysisToolsSection'
import DataAnalysisProcessSection from '@/components/services/dataanalysis/DataAnalysisProcessSection'
import DataAnalysisCaseStudiesSection from '@/components/services/dataanalysis/DataAnalysisCaseStudiesSection'
import ContactCTASection from '@/components/sections/ContactCTASection'

export const metadata: Metadata = {
  title: 'Data Analysis & Analytics | Leaders Network',
  description: 'Professional data analysis, business intelligence, and data science services. Transform your data into actionable business insights.',
  keywords: 'data analysis, business intelligence, data science, machine learning, data visualization, analytics, big data',
  openGraph: {
    title: 'Data Analysis & Analytics | Leaders Network',
    description: 'Transform your data into actionable business insights.',
    images: ['/images/data-analysis.jpg'],
  },
}

export default function DataAnalysisPage() {
  return (
    <div className="min-h-screen">
      <div className="relative z-10 bg-white dark:bg-dark-950 transition-colors duration-300">
        <Navbar />
        <main>
          <DataAnalysisHeroSection />
          <DataAnalysisServicesSection />
          <DataAnalysisToolsSection />
          <DataAnalysisProcessSection />
          <DataAnalysisCaseStudiesSection />
          <ContactCTASection />
        </main>
      </div>
      <FooterReveal />
    </div>
  )
}