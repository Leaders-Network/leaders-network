// TypeScript interfaces for Blog page components

export interface Author {
  id: string
  name: string
  role: string
  avatar: string
  bio?: string
  social?: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage: string
  category: BlogCategory
  tags: string[]
  author: Author
  publishedDate: string
  readTime: number
  featured: boolean
  views?: number
  likes?: number
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  description: string
  color: string
  postCount: number
}

export interface BlogPageData {
  hero: {
    title: string
    subtitle: string
    pillBadge: string
  }
  featuredPosts: BlogPost[]
  recentPosts: BlogPost[]
  categories: BlogCategory[]
  stats: {
    totalPosts: number
    totalAuthors: number
    totalCategories: number
  }
}

export interface BlogFilters {
  category: string
  searchTerm: string
  sortBy: 'latest' | 'popular' | 'trending'
}

// Animation variants for consistent motion
export interface BlogAnimationVariants {
  hidden: {
    opacity: number
    y?: number
    x?: number
    scale?: number
  }
  visible: {
    opacity: number
    y?: number
    x?: number
    scale?: number
    transition?: {
      duration?: number
      delay?: number
      ease?: string | number[]
    }
  }
}

// Comment System Types
export interface User {
  id: string
  name: string
  avatar: string
  role?: string
  verified?: boolean
  company?: string
}

export interface Comment {
  id: string
  content: string
  author: User
  createdAt: string
  updatedAt?: string
  likes: number
  likedBy: string[] // Array of user IDs who liked this comment
  replies: Comment[]
  parentId?: string
  postId: string
  edited?: boolean
}

export interface CommentStats {
  totalComments: number
  totalReplies: number
}

export interface PostEngagement {
  likes: number
  likedBy: string[] // Array of user IDs who liked this post
  comments: Comment[]
  commentStats: CommentStats
  views: number
  shares: number
}