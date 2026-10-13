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
    subtitle: "Since 2005, we've been the trusted technology partner for corporate bodies, government agencies, telecommunications giants, and financial institutions across continents. Our journey from a small startup to Africa's leading technology consultancy reflects our unwavering commitment to delivering solutions that truly convert and scale.",
    stats: [
      {
        number: "50+",
        label: "Projects Delivered",
        description: "Enterprise solutions worldwide"
      },
      {
        number: "98%",
        label: "Client Satisfaction",
        description: "Consistent excellence rating"
      },
      {
        number: "20+",
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
      year: "2005",
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
      title: "50+ Enterprise Projects",
      description: "Today we stand as a trusted technology partner with over 50 successful projects, maintaining 98% client satisfaction and industry leadership.",
      icon: "star",
      isHighlight: true
    }
  ],
  leadership: [
    {
      id: "ademoye-olatunde",
      name: "Ademoye Olatunde",
      role: "Chief Executive Officer",
      bio: "Visionary leader with 20+ years driving digital transformation across enterprise, government, and financial sectors. Ademoye's strategic leadership has positioned Leaders Network as Africa's premier technology consultancy.",
      image: "", // Placeholder - CEO photo will be added later
      linkedIn: "https://linkedin.com/in/andrewgold",
      email: "andrew@leadersnetwork.africa"
    },
    {
      id: "abimbola-olatunji",
      name: "Abimbola Olatunji",
      role: "Lead Tech",
      bio: "Technical architect specializing in scalable cloud solutions, enterprise software, and emerging technology integration. Abimbola leads our innovation initiatives and ensures technical excellence across all projects.",
      image: "https://res.cloudinary.com/yaovkmpi/image/upload/v1791812179/abimbola1_ewuipt.jpg",
      linkedIn: "https://linkedin.com/in/abimbola-olatunj-535841285",
      email: "a.olatunji@leadersnetwork.com"
    },
    {
      id: "omobolaji-ibrahim",
      name: "Omobolaji Ibrahim", 
      role: "Co-Lead Tech",
      bio: "Specializing in scalable web applications, backend systems, and AI-driven solutions. With an engineering mindset and a passion for innovation, he helps transform ideas into intuitive digital products while contributing to technical leadership and collaborative product development",
      image: "https://res.cloudinary.com/yaovkmpi/image/upload/v1791804705/mobolaji_cv8q44.jpg",
      linkedIn: "https://linkedin.com/in/bolajeeedr",
      email: "Bolajeee@leadersnetwork.com"
    },
    {
      id: "oyindamola-ojubanire",
      name: "Oyindamola Ojubanire",
      role: "Human Resources Officer",
      bio: "HR specialist focused on talent acquisition, team development, and organizational culture. Oyindamola ensures we attract and retain top talent to drive our continued growth and success.",
      image: "https://res.cloudinary.com/yaovkmpi/image/upload/v1791810936/oyin_isvkiq.jpg",
      linkedIn: "https://linkedin.com/in/sarahchen",
      email: "o.oyindamola@leadersnetwork.africa"
    },
    {
      id: "jude-rotimi",
      name: "Rotimi Jude",
      role: "Frontend Development Lead",
      bio: "As Frontend Development Lead, he oversee's frontend development, assign and coordinate tasks, guide implementation, review code quality, ensure responsive and accessible interfaces, and collaborate with the team to deliver reliable user experiences.",
      image: "https://res.cloudinary.com/yaovkmpi/image/upload/v1791829331/jude_pnmtv1.jpg",
      linkedIn: "https://www.linkedin.com/in/rotimijude",
      email: "excel.rotimi@gmail.com"
    },
    {
      id: "andrew-gold",
      name: "Ayemo Andrew",
      role: "Software Project Management Lead",
      bio: "Bridges software engineering and product strategy to turn business requirements into practical digital solutions. Focuses on building intuitive user experiences, aligning product functionality with user needs, and collaborating across teams to deliver meaningful results.",
      image: "https://res.cloudinary.com/yaovkmpi/image/upload/v1791830478/Andrewgold_mrm0hn.jpg",
      linkedIn: "https://www.linkedin.com/in/andrew-gold-5094861b5/",
      email: "ayemoandrewgold@gmail.com"
    },
    {
      id: "lawal-seun",
      name: "Lawal Ab Oluwaseun",
      role: "Frontend Engineer",
      bio: "Develops responsive and interactive web interfaces with a focus on usability, performance, and maintainable code. Works to translate design concepts into functional digital experiences that meet user needs and product requirements.",
      image: "https://res.cloudinary.com/yaovkmpi/image/upload/v1791829331/seun_gvd8rm.jpg",
      linkedIn: "https://www.linkedin.com/in/seun",
      email: "Seunlawal18@gmail.com"
    },
        {
      id: "dowudu-pelumi",
      name: "Dawodu A. Oluwapelumi",
      role: "Social-Media Manager",
      bio: "Social-media manager crafting engaging digital content and online campaigns to build brand presence, drive audience growth, and boost engagement across platforms.",
      image: "https://res.cloudinary.com/yaovkmpi/image/upload/v1791895169/pelumi_buyazi.jpg",
      linkedIn: "https://www.linkedin.com/in/pelzy",
      email: "Adetolaolatunde58@gmail.com"
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
  description: 'Learn about Leaders Network\'s 20+ year journey as Africa\'s leading technology consultancy. Meet our leadership team and discover the values driving our 50+ successful enterprise projects.',
  keywords: 'about leaders network, enterprise technology, digital transformation, african technology company, software development company',
  openGraph: {
    title: 'About Leaders Network - Two Decades of Innovation',
    description: 'From startup to industry leader: discover how Leaders Network became Africa\'s premier technology partner for enterprise digital transformation.',
    images: ['/images/about-leaders-network.jpg']
  }
}