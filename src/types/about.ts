// TypeScript interfaces for About page components

export interface CompanyStats {
  number: string
  label: string
  description?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  linkedIn?: string
  email?: string
}

export interface CompanyMilestone {
  id: string
  year: string
  title: string
  description: string
  icon?: string
  isHighlight?: boolean
}

export interface CoreValue {
  id: string
  title: string
  description: string
  icon: string
  features?: string[]
}

export interface MissionVision {
  mission: {
    title: string
    content: string
    highlights?: string[]
  }
  vision: {
    title: string
    content: string
    highlights?: string[]
  }
}

export interface AboutPageData {
  hero: {
    pillBadge: string
    headline: string
    subtitle: string
    stats: CompanyStats[]
  }
  missionVision: MissionVision
  timeline: CompanyMilestone[]
  leadership: TeamMember[]
  values: CoreValue[]
  cta: {
    headline: string
    description: string
    primaryButton: {
      text: string
      href: string
    }
    secondaryButton: {
      text: string
      href: string
    }
  }
}

// Animation variants for consistent motion across components
export interface AnimationVariants {
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