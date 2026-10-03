import Navbar from "@/components/layout/Navbar"
import AboutHeroSection from '@/components/sections/AboutHeroSection'
import MissionVisionSection from '@/components/sections/MissionVisionSection'
import InteractiveTimeline from '@/components/sections/InteractiveTimeline'
import LeadershipTeamSection from '@/components/sections/LeadershipTeamSection'
import CoreValuesSection from '@/components/sections/CoreValuesSection'
import AboutCTASection from '@/components/sections/AboutCTASection'
import FooterReveal from "@/components/layout/FooterReveal"
import type { AboutPageData } from '@/types/about'

// About page data
const aboutPageData: AboutPageData = {
  hero: {
    pillBadge: "About Leaders Network",
    headline: "Engineered for Impact. Built on Nearly Two Decades of Excellence.",
    subtitle: "Since 2007, we've been the trusted technology partner for corporate bodies, government agencies, telecommunications giants, and financial institutions across continents. Our journey from a small startup to Africa's leading technology consultancy reflects our unwavering commitment to delivering solutions that truly convert and scale.",
    stats: [
      {
        number: "500+",
        label: "Projects Delivered",
        description: "Enterprise solutions worldwide"
      },
      {
        number: "98%",
        label: "Client Satisfaction",
        description: "Consistent excellence rating"
      },
      {
        number: "19+",
        label: "Years of Excellence",
        description: "Industry leadership & innovation"
      }
    ]
  },
  missionVision: {
    mission: {
      title: "Our Mission",
      content: "To deliver high-impact, enterprise-grade software and technology solutions that convert prospects into customers and scale with our clients' ambitions. We bridge the gap between innovative technology and measurable business results.",
      highlights: [
        "Enterprise-grade software development",
        "Measurable ROI and conversion optimization",
        "Scalable technology architecture",
        "Client-centric solution design"
      ]
    },
    vision: {
      title: "Our Vision", 
      content: "To remain Africa's leading technology and consulting partner for large-scale digital transformation, setting the global standard for innovation, reliability, and client success in the enterprise software space.",
      highlights: [
        "Continental technology leadership",
        "Global innovation standards",
        "Digital transformation excellence",
        "Long-term strategic partnerships"
      ]
    }
  },
  timeline: [
    {
      id: "founding",
      year: "2007",
      title: "Company Founded",
      description: "Leaders Network was established with a vision to transform how businesses leverage technology for growth and competitive advantage.",
      icon: "rocket",
      isHighlight: true
    },
    {
      id: "first-enterprise",
      year: "2010",
      title: "First Enterprise Client",
      description: "Secured our first major enterprise contract, delivering a comprehensive financial management system that processed over $10M in transactions.",
      icon: "building"
    },
    {
      id: "fintech-expansion",
      year: "2012",
      title: "FinTech & Government Expansion",
      description: "Expanded into financial services and government sectors, developing secure payment platforms and digital governance solutions.",
      icon: "government"
    },
    {
      id: "pan-african",
      year: "2018",
      title: "Pan-African Expansion",
      description: "Extended operations across multiple African countries, establishing strategic partnerships and delivering cross-border solutions.",
      icon: "globe",
      isHighlight: true
    },
    {
      id: "digital-transformation",
      year: "2021",
      title: "Digital Transformation Leader",
      description: "Recognized as a leading digital transformation partner, helping enterprises navigate post-pandemic technology adoption.",
      icon: "lightbulb"
    },
    {
      id: "present",
      year: "Present",
      title: "500+ Enterprise Projects",
      description: "Today we stand as a trusted technology partner with over 500 successful projects, maintaining 98% client satisfaction and industry leadership.",
      icon: "star",
      isHighlight: true
    }
  ],
  leadership: [
    {
      id: "andrew-gold",
      name: "Andrew Gold",
      role: "Chief Executive Officer",
      bio: "Visionary leader with 20+ years driving digital transformation across enterprise, government, and financial sectors. Andrew's strategic leadership has positioned Leaders Network as Africa's premier technology consultancy.",
      image: "/images/team-andrew-gold.jpg",
      linkedIn: "https://linkedin.com/in/andrewgold",
      email: "andrew@leadersnetwork.africa"
    },
    {
      id: "sarah-chen",
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      bio: "Technical architect specializing in scalable cloud solutions, enterprise software, and emerging technology integration. Sarah leads our innovation initiatives and ensures technical excellence across all projects.",
      image: "/images/team-sarah-chen.jpg",
      linkedIn: "https://linkedin.com/in/sarahchen",
      email: "sarah@leadersnetwork.africa"
    },
    {
      id: "michael-rodriguez",
      name: "Michael Rodriguez", 
      role: "Head of Operations",
      bio: "Operations expert ensuring seamless project delivery, client success, and organizational excellence across all initiatives. Michael's leadership drives our 98% client satisfaction rate.",
      image: "/images/team-michael-rodriguez.jpg",
      linkedIn: "https://linkedin.com/in/michaelrodriguez",
      email: "michael@leadersnetwork.africa"
    }
  ],
  values: [
    {
      id: "integrity-security",
      title: "Integrity & Security",
      description: "We maintain the highest standards of ethical conduct and data security, ensuring client trust through transparent practices and robust protection.",
      icon: "security",
      features: [
        "ISO 27001 compliant processes",
        "End-to-end encryption standards",
        "Transparent communication",
        "Ethical business practices"
      ]
    },
    {
      id: "rapid-delivery",
      title: "Rapid Agile Delivery", 
      description: "Our agile methodology ensures fast, iterative delivery cycles that adapt to changing requirements while maintaining quality standards.",
      icon: "speed",
      features: [
        "2-week sprint cycles",
        "Continuous integration/deployment", 
        "Real-time client collaboration",
        "Flexible scope management"
      ]
    },
    {
      id: "quality-excellence",
      title: "Uncompromising Quality",
      description: "Every solution undergoes rigorous testing and quality assurance to ensure enterprise-grade performance and reliability.",
      icon: "target",
      features: [
        "Comprehensive testing protocols",
        "Performance optimization",
        "Code review standards",
        "Quality assurance processes"
      ]
    },
    {
      id: "client-partnership",
      title: "Client-First Partnership",
      description: "We view each engagement as a long-term partnership, prioritizing client success and building solutions that grow with their business.",
      icon: "handshake",
      features: [
        "Dedicated account management",
        "24/7 technical support",
        "Scalable solution architecture",
        "Long-term strategic planning"
      ]
    }
  ],
  cta: {
    headline: "Ready to Transform Your Digital Future?",
    description: "Join 500+ enterprises who trust Leaders Network to deliver technology solutions that convert, scale, and drive measurable results. Let's discuss your next breakthrough project.",
    primaryButton: {
      text: "Start Your Project",
      href: "/contactus"
    },
    secondaryButton: {
      text: "View Our Work",
      href: "/ourservices"
    }
  }
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Page content sits above the footer */}
      <div className="relative z-10 bg-white dark:bg-dark-950 transition-colors duration-300">
        <Navbar />
        <main>
          <AboutHeroSection
            pillBadge={aboutPageData.hero.pillBadge}
            headline={aboutPageData.hero.headline}
            subtitle={aboutPageData.hero.subtitle}
            stats={aboutPageData.hero.stats}
          />
          
          <MissionVisionSection data={aboutPageData.missionVision} />
          
          <InteractiveTimeline milestones={aboutPageData.timeline} />
          
          <LeadershipTeamSection leaders={aboutPageData.leadership} />
          
          <CoreValuesSection values={aboutPageData.values} />
          
          <AboutCTASection
            headline={aboutPageData.cta.headline}
            description={aboutPageData.cta.description}
            primaryButton={aboutPageData.cta.primaryButton}
            secondaryButton={aboutPageData.cta.secondaryButton}
          />
        </main>
      </div>
      <FooterReveal />
    </div>
  )
}

export const metadata = {
  title: 'About Us - Leaders Network | Enterprise Technology Solutions',
  description: 'Learn about Leaders Network\'s 19+ year journey as Africa\'s leading technology consultancy. Meet our leadership team and discover the values driving our 500+ successful enterprise projects.',
  keywords: 'about leaders network, enterprise technology, digital transformation, african technology company, software development company',
  openGraph: {
    title: 'About Leaders Network - Two Decades of Innovation',
    description: 'From startup to industry leader: discover how Leaders Network became Africa\'s premier technology partner for enterprise digital transformation.',
    images: ['/images/about-leaders-network.jpg']
  }
}