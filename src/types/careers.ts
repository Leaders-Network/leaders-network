export interface JobPosting {
  id: string
  title: string
  department: Department
  location: string
  employmentType: 'Full-time' | 'Part-time' | 'Contract' | 'Internship'
  remote: boolean
  description: string
  requirements: string[]
  responsibilities: string[]
  postedDate: string
  applicationDeadline?: string
}

export interface CultureValue {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

export interface Perk {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

export type Department = 'All' | 'Engineering' | 'Product & Design' | 'Operations' | 'Sales & Marketing'

export interface FilterState {
  department: Department
}

export interface TalentPoolApplication {
  fullName: string
  email: string
  phone?: string
  linkedInProfile?: string
  portfolioUrl?: string
  coverLetter: string
  resume: File | null
  interestedRoles: string[]
}