'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { JobPosting, Department, FilterState } from '@/types/careers'

const jobPostings: JobPosting[] = [
  {
    id: 'senior-fullstack-dev',
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Lagos, Nigeria',
    employmentType: 'Full-time',
    remote: true,
    description: 'We\'re looking for an experienced full-stack developer to lead the development of enterprise-grade applications using React, Node.js, and cloud technologies.',
    requirements: [
      '5+ years of experience in full-stack development',
      'Expert knowledge of React, TypeScript, and Node.js',
      'Experience with AWS cloud services',
      'Strong understanding of microservices architecture',
      'Experience with enterprise software development'
    ],
    responsibilities: [
      'Lead development of complex web applications',
      'Mentor junior developers and conduct code reviews',
      'Collaborate with product and design teams',
      'Architect scalable and maintainable solutions'
    ],
    postedDate: '2024-01-15',
    applicationDeadline: '2024-02-15'
  },
  {
    id: 'product-designer',
    title: 'Senior Product Designer',
    department: 'Product & Design',
    location: 'Lagos, Nigeria',
    employmentType: 'Full-time',
    remote: true,
    description: 'Join our design team to create intuitive and beautiful user experiences for enterprise software used by thousands of users daily.',
    requirements: [
      '4+ years of product design experience',
      'Proficiency in Figma, Sketch, or similar tools',
      'Experience with design systems and component libraries',
      'Strong understanding of UX research methods',
      'Portfolio showcasing enterprise software designs'
    ],
    responsibilities: [
      'Design user interfaces for complex enterprise applications',
      'Conduct user research and usability testing',
      'Collaborate with engineering teams on implementation',
      'Maintain and evolve our design system'
    ],
    postedDate: '2024-01-10',
    applicationDeadline: '2024-02-10'
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Lagos, Nigeria',
    employmentType: 'Full-time',
    remote: true,
    description: 'Help us scale our infrastructure and improve our deployment processes to support our growing portfolio of enterprise applications.',
    requirements: [
      '3+ years of DevOps/Infrastructure experience',
      'Experience with AWS, Docker, and Kubernetes',
      'Knowledge of CI/CD pipelines and automation',
      'Experience with monitoring and logging tools',
      'Understanding of security best practices'
    ],
    responsibilities: [
      'Manage and optimize cloud infrastructure',
      'Implement and maintain CI/CD pipelines',
      'Monitor system performance and reliability',
      'Collaborate with development teams on deployments'
    ],
    postedDate: '2024-01-12'
  },
  {
    id: 'business-analyst',
    title: 'Senior Business Analyst',
    department: 'Operations',
    location: 'Lagos, Nigeria',
    employmentType: 'Full-time',
    remote: false,
    description: 'Work closely with clients to understand their business requirements and translate them into technical specifications for our development team.',
    requirements: [
      '4+ years of business analysis experience',
      'Experience with enterprise software projects',
      'Strong analytical and communication skills',
      'Knowledge of software development lifecycle',
      'Experience with requirements gathering and documentation'
    ],
    responsibilities: [
      'Gather and document business requirements',
      'Create functional specifications and user stories',
      'Facilitate workshops with stakeholders',
      'Support testing and quality assurance processes'
    ],
    postedDate: '2024-01-08'
  }
]

const departments: Department[] = ['All', 'Engineering', 'Product & Design', 'Operations', 'Sales & Marketing']

export default function OpenPositionsSection() {
  const [filter, setFilter] = useState<FilterState>({ department: 'All' })

  const filteredJobs = jobPostings.filter(job => 
    filter.department === 'All' || job.department === filter.department
  )

  return (
    <section id="open-roles" className="relative scroll-mt-28 bg-gray-50 dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center rounded-full border border-gray-200 dark:border-white/[0.06] bg-gray-100 dark:bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-gray-700 dark:text-white/90 sm:text-sm transition-colors duration-300"
          >
            Open Positions
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Join Our Growing Team
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            Explore exciting opportunities to make an impact with enterprise technology that 
            serves millions of users across Nigeria and Africa.
          </motion.p>
        </div>

        {/* Department Filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          {departments.map((department) => (
            <button
              key={department}
              onClick={() => setFilter({ department })}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                filter.department === department
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 text-gray-700 dark:text-white/80 hover:bg-gray-50 dark:hover:bg-white/15'
              }`}
            >
              {department}
            </button>
          ))}
        </div>

        {/* Job Listings */}
        <div className="grid gap-6 lg:gap-8">
          <AnimatePresence mode="wait">
            {filteredJobs.length > 0 ? (
              <motion.div
                key={filter.department}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    className="group rounded-3xl border border-gray-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.02] p-6 sm:p-8 shadow-sm dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-gray-300 dark:hover:border-white/20 hover:shadow-md dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6">
                      {/* Job Info */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                            {job.title}
                          </h3>
                          <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-white/10 px-3 py-1 text-xs font-medium text-gray-700 dark:text-white/80 transition-colors duration-300">
                            {job.department}
                          </span>
                          {job.remote && (
                            <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-3 py-1 text-xs font-medium text-green-800 dark:text-green-400">
                              Remote OK
                            </span>
                          )}
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-white/60 transition-colors duration-300 mb-3">
                          <span className="flex items-center gap-1">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {job.employmentType}
                          </span>
                        </div>

                        <p className="text-sm leading-relaxed text-gray-600 dark:text-white/70 transition-colors duration-300">
                          {job.description}
                        </p>
                      </div>

                      {/* Apply Button */}
                      <div className="flex-shrink-0">
                        <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-6 py-3 font-semibold text-sm shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-105 group-hover:shadow-orange-500/40">
                          Apply Now
                          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center">
                  <svg className="h-8 w-8 text-gray-400 dark:text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8zM16 10h.01M12 14h.01M8 14h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  No positions available
                </h3>
                <p className="text-gray-600 dark:text-white/60 transition-colors duration-300">
                  Check back soon or join our talent network below.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}