import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import FooterReveal from '@/components/layout/FooterReveal'
import BlogPostContent from '@/components/blog/BlogPostContent'
import BlogPostHeader from '@/components/blog/BlogPostHeader'
import BlogPostSidebar from '@/components/blog/BlogPostSidebar'
import RelatedPosts from '@/components/blog/RelatedPosts'
import BlogPostClient from '@/components/blog/BlogPostClient'
import type { BlogPost, PostEngagement, User, Comment } from '@/types/blog'

// Sample blog posts data - replace with actual API/CMS data
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Enterprise AI: Transforming Business Operations in 2024",
    slug: "future-enterprise-ai-2024",
    excerpt: "Explore how artificial intelligence is revolutionizing enterprise operations, from automated workflows to intelligent decision-making systems.",
    content: `
      <h2>The AI Revolution in Enterprise</h2>
      <p>Artificial intelligence is no longer a futuristic concept—it's a present reality transforming how enterprises operate, make decisions, and deliver value to customers. In 2024, we're witnessing an unprecedented acceleration in AI adoption across industries, driven by advances in machine learning, natural language processing, and automation technologies.</p>
      
      <h3>Key Areas of AI Transformation</h3>
      <p>Enterprise AI is making significant impacts across multiple domains:</p>
      <ul>
        <li><strong>Automated Decision Making:</strong> AI systems can now process vast amounts of data to make complex business decisions in real-time, from supply chain optimization to customer service routing.</li>
        <li><strong>Predictive Analytics:</strong> Machine learning models predict market trends, customer behavior, and operational inefficiencies before they impact the bottom line.</li>
        <li><strong>Process Automation:</strong> Intelligent automation streamlines workflows, reduces human error, and frees up valuable human resources for strategic initiatives.</li>
      </ul>
      
      <h3>Implementation Strategies for Success</h3>
      <p>Successfully implementing AI in enterprise environments requires a strategic approach that considers both technical and organizational factors:</p>
      
      <blockquote>
        "The key to successful AI implementation isn't just about having the right technology—it's about creating a culture that embraces data-driven decision making and continuous learning." - Ibrahim Ibrahim, Senior Dev
      </blockquote>
      
      <h4>1. Start with Clear Business Objectives</h4>
      <p>Before implementing any AI solution, organizations must clearly define what they want to achieve. Whether it's reducing operational costs, improving customer experience, or accelerating innovation, having specific, measurable goals ensures that AI initiatives deliver tangible business value.</p>
      
      <h4>2. Invest in Data Infrastructure</h4>
      <p>AI is only as good as the data it's trained on. Organizations must invest in robust data infrastructure that ensures data quality, accessibility, and governance. This includes implementing proper data pipelines, storage solutions, and security measures.</p>
      
      <h4>3. Focus on Change Management</h4>
      <p>AI implementation often requires significant changes to existing processes and workflows. Successful organizations prioritize change management, providing adequate training and support to help employees adapt to new AI-powered tools and processes.</p>
      
      <h3>Looking Ahead: The Future of Enterprise AI</h3>
      <p>As we look toward the future, several trends are shaping the evolution of enterprise AI:</p>
      
      <ul>
        <li><strong>Explainable AI:</strong> Growing demand for AI systems that can provide clear explanations for their decisions, particularly in regulated industries.</li>
        <li><strong>Edge AI:</strong> Moving AI processing closer to data sources for faster response times and reduced latency.</li>
        <li><strong>AI Ethics and Governance:</strong> Increased focus on responsible AI development and deployment, ensuring fairness, transparency, and accountability.</li>
      </ul>
      
      <p>The organizations that will thrive in the AI-powered future are those that start building their AI capabilities today while maintaining a focus on ethical implementation and human-centered design.</p>
    `,
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
      id: "ibrahim-ibrahim",
      name: "Ibrahim Ibrahim",
      role: "Senior Dev & IT consultant",
      avatar: "/images/Picture-1.jpg",
      bio: "Technology leader with 20+ years in enterprise AI implementation"
    },
    publishedDate: "2024-01-15",
    readTime: 8,
    featured: true,
    views: 2500,
    likes: 145
  }
]

// Sample users for comments
const sampleUsers: User[] = [
  {
    id: 'user-1',
    name: 'Alex Chen',
    avatar: '/images/Picture-2.jpg',
    role: 'Data Scientist',
    company: 'TechCorp',
    verified: true
  },
  {
    id: 'user-2', 
    name: 'Sarah Johnson',
    avatar: '/images/Picture 3.jpg',
    role: 'AI Consultant',
    company: 'InnovateLab'
  },
  {
    id: 'user-3',
    name: 'Michael Rodriguez',
    avatar: '/images/Picture-1.jpg',
    role: 'CTO',
    company: 'StartupXYZ',
    verified: true
  },
  {
    id: 'current-user',
    name: 'Demo User',
    avatar: '/images/Picture-2.jpg',
    role: 'Reader'
  }
]

// Sample engagement data with comments
const sampleEngagement: { [key: string]: PostEngagement } = {
  'future-enterprise-ai-2024': {
    likes: 247,
    likedBy: ['user-1', 'user-2', 'user-3'],
    views: 2500,
    shares: 45,
    commentStats: {
      totalComments: 8,
      totalReplies: 12
    },
    comments: [
      {
        id: 'comment-1',
        content: 'Excellent analysis! I\'ve been implementing AI solutions in our enterprise for the past two years, and the points about change management really resonate. The cultural shift is often more challenging than the technical implementation.',
        author: sampleUsers[0],
        createdAt: '2024-01-16T10:30:00Z',
        likes: 23,
        likedBy: ['user-2', 'user-3', 'current-user'],
        replies: [],
        postId: 'future-enterprise-ai-2024'
      },
      {
        id: 'comment-2',
        content: 'Great insights on data infrastructure! One thing I\'d add is the importance of data lineage and governance. Without proper data governance frameworks, even the best AI models can produce unreliable results.',
        author: sampleUsers[1],
        createdAt: '2024-01-16T14:20:00Z',
        likes: 18,
        likedBy: ['user-1', 'user-3'],
        replies: [],
        postId: 'future-enterprise-ai-2024'
      },
      {
        id: 'comment-3',
        content: 'The section on explainable AI is crucial. As someone who works in a heavily regulated industry, we can\'t deploy AI systems without clear explanations of decision-making processes. Regulatory compliance is becoming a major factor in AI adoption.',
        author: sampleUsers[2],
        createdAt: '2024-01-16T16:45:00Z',
        likes: 31,
        likedBy: ['user-1', 'user-2'],
        replies: [],
        postId: 'future-enterprise-ai-2024'
      },
      {
        id: 'reply-1',
        content: 'Absolutely agree! We faced similar challenges when implementing our first AI solution. The key was starting with a pilot project and gradually building trust across the organization.',
        author: sampleUsers[1],
        createdAt: '2024-01-16T11:00:00Z',
        likes: 8,
        likedBy: ['user-1'],
        replies: [],
        parentId: 'comment-1',
        postId: 'future-enterprise-ai-2024'
      },
      {
        id: 'reply-2',
        content: 'Which governance frameworks have you found most effective? We\'re currently evaluating DAMA-DMBOK vs custom solutions.',
        author: sampleUsers[2],
        createdAt: '2024-01-16T15:30:00Z',
        likes: 5,
        likedBy: ['user-1'],
        replies: [],
        parentId: 'comment-2',
        postId: 'future-enterprise-ai-2024'
      },
      {
        id: 'reply-3',
        content: 'We\'ve had good success with a hybrid approach - DAMA-DMBOK as the foundation with custom policies for AI-specific use cases. Happy to discuss more details if interested!',
        author: sampleUsers[1],
        createdAt: '2024-01-16T16:15:00Z',
        likes: 7,
        likedBy: ['user-2', 'user-3'],
        replies: [],
        parentId: 'reply-2',
        postId: 'future-enterprise-ai-2024'
      },
      {
        id: 'comment-4',
        content: 'This article perfectly captures the current state of enterprise AI. The emphasis on ethical implementation is particularly important as we see more AI systems being deployed at scale.',
        author: sampleUsers[0],
        createdAt: '2024-01-17T09:15:00Z',
        likes: 15,
        likedBy: ['user-2'],
        replies: [],
        postId: 'future-enterprise-ai-2024'
      },
      {
        id: 'comment-5',
        content: 'Question: How do you handle AI bias detection and mitigation in large-scale deployments? We\'re struggling with this aspect as we scale our ML operations.',
        author: sampleUsers[2],
        createdAt: '2024-01-17T13:45:00Z',
        likes: 12,
        likedBy: ['user-1', 'user-2'],
        replies: [],
        postId: 'future-enterprise-ai-2024'
      }
    ]
  }
}

// Get blog post by slug
function getBlogPost(slug: string): BlogPost | null {
  return blogPosts.find(post => post.slug === slug) || null
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found - Leaders Network Blog'
    }
  }

  return {
    title: `${post.title} - Leaders Network Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
      type: 'article',
      publishedTime: post.publishedDate,
      authors: [post.author.name],
      tags: post.tags
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage]
    }
  }
}

// Generate static params for static generation
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  
  if (!post) {
    notFound()
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category.id === post.category.id && p.slug !== post.slug)
    .slice(0, 3)

  // Get engagement data for this post
  const engagement = sampleEngagement[slug] || {
    likes: 0,
    likedBy: [],
    views: 0,
    shares: 0,
    commentStats: { totalComments: 0, totalReplies: 0 },
    comments: []
  }

  // Current user (demo - replace with actual auth)
  const currentUser = sampleUsers[3] // Demo user

  return (
    <div className="min-h-screen">
      <div className="relative z-10 bg-white dark:bg-dark-950 transition-colors duration-300">
        <Navbar />
        
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <BlogPostHeader post={post} />
              <BlogPostContent content={post.content} />
              
              {/* Comments Section */}
              <BlogPostClient
                post={post}
                initialEngagement={engagement}
                currentUser={currentUser}
              />
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogPostSidebar post={post} />
            </div>
          </div>
          
          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-800">
              <RelatedPosts posts={relatedPosts} />
            </div>
          )}
        </article>
      </div>
      
      <FooterReveal />
    </div>
  )
}