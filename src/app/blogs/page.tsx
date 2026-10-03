'use client'

import Navbar from '@/components/layout/Navbar'
import FooterReveal from '@/components/layout/FooterReveal'
import BlogHeroSection from '@/components/sections/BlogHeroSection'
import FeaturedPostsSection from '@/components/sections/FeaturedPostsSection'
import BlogCategoriesSection from '@/components/sections/BlogCategoriesSection'
import RecentPostsSection from '@/components/sections/RecentPostsSection'
import NewsletterSection from '@/components/sections/NewsletterSection'
import type { BlogPageData } from '@/types/blog'

// Sample blog data - replace with actual data from CMS/API
const blogPageData: BlogPageData = {
  hero: {
    title: "Insights & Innovation Hub",
    subtitle: "Discover the latest trends, expert insights, and thought leadership from Leaders Network. Stay ahead with our comprehensive coverage of technology, business transformation, and industry innovations.",
    pillBadge: "Leaders Network Blog"
  },
  featuredPosts: [
    {
      id: "1",
      title: "The Future of Enterprise AI: Transforming Business Operations in 2024",
      slug: "future-enterprise-ai-2024",
      excerpt: "Explore how artificial intelligence is revolutionizing enterprise operations, from automated workflows to intelligent decision-making systems that drive unprecedented efficiency.",
      content: "",
      featuredImage: "/images/data-analysis.jpg",
      category: {
        id: "ai-ml",
        name: "AI & ML",
        slug: "ai-machine-learning",
        description: "Artificial Intelligence and Machine Learning insights",
        color: "#8B5CF6",
        postCount: 12
      },
      tags: ["AI", "Enterprise", "Automation", "Digital Transformation"],
      author: {
        id: "andrew-gold",
        name: "Andrew Gold",
        role: "CEO & AI Strategy Expert",
        avatar: "/images/Picture-1.jpg",
        bio: "Technology leader with 20+ years in enterprise AI implementation"
      },
      publishedDate: "2024-01-15",
      readTime: 8,
      featured: true,
      views: 2500,
      likes: 145
    },
    {
      id: "2", 
      title: "Cloud Migration Strategies: Best Practices for Large-Scale Enterprises",
      slug: "cloud-migration-enterprise-best-practices",
      excerpt: "A comprehensive guide to planning and executing successful cloud migrations for enterprise organizations, including security considerations and cost optimization.",
      content: "",
      featuredImage: "/images/aws.png",
      category: {
        id: "cloud",
        name: "Cloud Solutions",
        slug: "cloud-solutions",
        description: "Cloud computing and infrastructure insights",
        color: "#06B6D4",
        postCount: 18
      },
      tags: ["Cloud", "Migration", "AWS", "Security"],
      author: {
        id: "sarah-chen",
        name: "Dr. Sarah Chen",
        role: "CTO & Cloud Architect",
        avatar: "/images/Picture-2.jpg",
        bio: "Cloud solutions expert specializing in enterprise architecture"
      },
      publishedDate: "2024-01-12",
      readTime: 12,
      featured: true,
      views: 1890,
      likes: 98
    },
    {
      id: "3",
      title: "Fintech Innovation: Building Secure Payment Systems for African Markets",
      slug: "fintech-innovation-african-markets",
      excerpt: "Learn how we're developing cutting-edge fintech solutions tailored for African markets, addressing unique challenges in payment processing and financial inclusion.",
      content: "",
      featuredImage: "/images/mobile-app-development.avif",
      category: {
        id: "fintech",
        name: "Fintech",
        slug: "fintech",
        description: "Financial technology innovations and insights",
        color: "#F59E0B",
        postCount: 15
      },
      tags: ["Fintech", "Payments", "Africa", "Blockchain"],
      author: {
        id: "michael-rodriguez",
        name: "Michael Rodriguez",
        role: "Head of Operations",
        avatar: "/images/Picture 3.jpg",
        bio: "Operations expert with focus on emerging market solutions"
      },
      publishedDate: "2024-01-10",
      readTime: 6,
      featured: false,
      views: 1560,
      likes: 87
    }
  ],
  recentPosts: [
    {
      id: "4",
      title: "Cybersecurity in the Age of Remote Work: Enterprise Protection Strategies",
      slug: "cybersecurity-remote-work-enterprise",
      excerpt: "Essential cybersecurity practices for protecting enterprise data in distributed work environments, including zero-trust architecture and endpoint security.",
      content: "",
      featuredImage: "/images/architecture.jpg",
      category: {
        id: "security",
        name: "Security",
        slug: "security",
        description: "Cybersecurity and data protection insights",
        color: "#EF4444",
        postCount: 10
      },
      tags: ["Cybersecurity", "Remote Work", "Zero Trust", "Enterprise"],
      author: {
        id: "sarah-chen",
        name: "Dr. Sarah Chen",
        role: "CTO & Security Expert",
        avatar: "/images/Picture-2.jpg"
      },
      publishedDate: "2024-01-08",
      readTime: 7,
      featured: false,
      views: 1320,
      likes: 76
    },
    {
      id: "5",
      title: "Data Analytics Excellence: Turning Enterprise Data into Actionable Insights",
      slug: "data-analytics-enterprise-insights",
      excerpt: "Discover how to leverage advanced analytics and business intelligence tools to transform raw enterprise data into strategic business advantages.",
      content: "",
      featuredImage: "/images/data-analysis-img.jpg",
      category: {
        id: "analytics",
        name: "Data Analytics",
        slug: "data-analytics", 
        description: "Data science and analytics insights",
        color: "#10B981",
        postCount: 14
      },
      tags: ["Data Analytics", "BI", "Enterprise", "Insights"],
      author: {
        id: "andrew-gold",
        name: "Andrew Gold", 
        role: "CEO & Data Strategy Expert",
        avatar: "/images/Picture-1.jpg"
      },
      publishedDate: "2024-01-05",
      readTime: 9,
      featured: false,
      views: 2100,
      likes: 134
    },
    {
      id: "6",
      title: "Digital Transformation ROI: Measuring Success in Enterprise Technology Initiatives",
      slug: "digital-transformation-roi-measurement",
      excerpt: "Learn proven methodologies for measuring and maximizing ROI from digital transformation initiatives in large enterprise environments.",
      content: "",
      featuredImage: "/images/software-development.png",
      category: {
        id: "business",
        name: "Business Strategy", 
        slug: "business-strategy",
        description: "Business and strategy insights",
        color: "#6366F1",
        postCount: 16
      },
      tags: ["Digital Transformation", "ROI", "Enterprise", "Strategy"],
      author: {
        id: "michael-rodriguez",
        name: "Michael Rodriguez",
        role: "Head of Operations",
        avatar: "/images/Picture 3.jpg"
      },
      publishedDate: "2024-01-03",
      readTime: 11,
      featured: false,
      views: 1750,
      likes: 92
    }
  ],
  categories: [
    {
      id: "ai-ml",
      name: "AI & Machine Learning",
      slug: "ai-machine-learning", 
      description: "Cutting-edge artificial intelligence and machine learning insights for enterprise applications.",
      color: "#8B5CF6",
      postCount: 12
    },
    {
      id: "cloud",
      name: "Cloud Solutions",
      slug: "cloud-solutions",
      description: "Cloud computing strategies, migrations, and best practices for scalable infrastructure.",
      color: "#06B6D4", 
      postCount: 18
    },
    {
      id: "fintech",
      name: "Fintech Innovation",
      slug: "fintech",
      description: "Financial technology innovations and secure payment system development.",
      color: "#F59E0B",
      postCount: 15
    },
    {
      id: "security",
      name: "Cybersecurity",
      slug: "security",
      description: "Enterprise security strategies and data protection methodologies.",
      color: "#EF4444",
      postCount: 10
    },
    {
      id: "analytics",
      name: "Data Analytics", 
      slug: "data-analytics",
      description: "Business intelligence, data science, and analytics-driven decision making.",
      color: "#10B981",
      postCount: 14
    },
    {
      id: "business",
      name: "Business Strategy",
      slug: "business-strategy", 
      description: "Digital transformation strategies and business growth methodologies.",
      color: "#6366F1",
      postCount: 16
    }
  ],
  stats: {
    totalPosts: 85,
    totalAuthors: 8,
    totalCategories: 6
  }
}

export default function BlogPage() {
  const handleSearch = (searchTerm: string) => {
    // Handle search functionality
    console.log('Searching for:', searchTerm)
  }

  const handleCategorySelect = (category: any) => {
    // Handle category selection
    console.log('Selected category:', category)
  }

  return (
    <div className="min-h-screen">
      {/* Page content sits above the footer */}
      <div className="relative z-10 bg-white dark:bg-dark-950 transition-colors duration-300">
        <Navbar />
        <main>
          <BlogHeroSection
            title={blogPageData.hero.title}
            subtitle={blogPageData.hero.subtitle}
            pillBadge={blogPageData.hero.pillBadge}
            onSearch={handleSearch}
          />
          
          <FeaturedPostsSection posts={blogPageData.featuredPosts} />
          
          <BlogCategoriesSection 
            categories={blogPageData.categories}
            onCategorySelect={handleCategorySelect}
          />
          
          <RecentPostsSection 
            posts={blogPageData.recentPosts}
            totalPosts={blogPageData.stats.totalPosts}
          />
          
          <NewsletterSection />
        </main>
      </div>
      <FooterReveal />
    </div>
  )
}