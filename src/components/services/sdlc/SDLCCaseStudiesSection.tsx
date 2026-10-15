'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, type MouseEvent, type ReactNode } from 'react'

/* ---------- Tilt Component (matching homepage style) ---------- */
function Tilt({ children, className = '' }: { children: ReactNode; className?: string }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 18 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 150, damping: 18 })

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) / rect.width)
    y.set((e.clientY - centerY) / rect.height)
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
    >
      {children}
    </motion.div>
  )
}

/* ---------- Custom SVG Icons (matching homepage style) ---------- */
const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'h-4 w-4',
}

const Icons = {
  arrow: (
    <svg {...iconProps}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  ),
  check: (
    <svg {...iconProps}>
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  external: (
    <svg {...iconProps}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15,3 21,3 21,9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

const caseStudies = [
  {
    title: 'E-Commerce Platform Modernization',
    client: 'Regional Retailer',
    category: 'E-Commerce',
    challenge: 'Legacy system migration to modern cloud-based platform with improved performance and scalability',
    solution: 'Complete platform rebuild using React, Node.js, and AWS with microservices architecture',
    results: ['300% performance improvement', '50% faster checkout process', '99.9% uptime achieved', '40% increase in conversions'],
    image: '/images/data-analysis.jpg',
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Redis'],
    duration: '6 months',
    teamSize: '8 developers'
  },
  {
    title: 'Financial Services Dashboard',
    client: 'Investment Firm',
    category: 'FinTech',
    challenge: 'Real-time data visualization for investment tracking with complex analytics requirements',
    solution: 'Custom dashboard with real-time analytics, automated reporting, and advanced data visualization',
    results: ['Real-time data processing', '40% faster decision making', 'Improved client satisfaction', '60% reduction in manual reporting'],
    image: '/images/architecture.jpg',
    technologies: ['Vue.js', 'Python', 'Redis', 'Chart.js', 'WebSocket'],
    duration: '4 months',
    teamSize: '6 developers'
  },
  {
    title: 'Healthcare Management System',
    client: 'Medical Center',
    category: 'Healthcare',
    challenge: 'Digital transformation of patient management processes with HIPAA compliance requirements',
    solution: 'Comprehensive patient management and scheduling system with secure data handling',
    results: ['60% reduction in admin time', 'Improved patient experience', 'HIPAA compliant system', '25% increase in patient capacity'],
    image: '/images/development.jpg',
    technologies: ['Angular', '.NET', 'SQL Server', 'Azure', 'HL7'],
    duration: '8 months',
    teamSize: '10 developers'
  }
]

export default function SDLCCaseStudiesSection() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300">
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center rounded-full border border-gray-200 dark:border-white/[0.06] bg-gray-100 dark:bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-gray-700 dark:text-white/90 sm:text-sm transition-colors duration-300"
          >
            Case Studies
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Success{' '}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Stories
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            See how our SDLC methodology has delivered exceptional results for clients across industries.
          </motion.p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16 lg:space-y-24">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid grid-cols-1 gap-8 lg:gap-16 ${
                index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'
              }`}
            >
              {/* Image Card */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Tilt>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-gray-200 dark:border-white/[0.05] bg-gradient-to-br from-white to-gray-50 dark:from-white/[0.05] dark:to-white/[0.015] shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    
                    {/* Floating Badge */}
                    <div className="absolute top-6 left-6">
                      <div className="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-gray-900">
                        {study.category}
                      </div>
                    </div>

                    {/* Project Stats */}
                    <div className="absolute bottom-6 right-6 flex gap-4">
                      <div className="rounded-lg bg-white/90 backdrop-blur-sm p-3 text-center">
                        <div className="text-xs font-medium text-gray-900">{study.duration}</div>
                        <div className="text-xs text-gray-600">Duration</div>
                      </div>
                      <div className="rounded-lg bg-white/90 backdrop-blur-sm p-3 text-center">
                        <div className="text-xs font-medium text-gray-900">{study.teamSize}</div>
                        <div className="text-xs text-gray-600">Team Size</div>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <div className="mb-2 text-sm font-semibold text-orange-600 dark:text-orange-400">
                    {study.client}
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white lg:text-3xl">
                    {study.title}
                  </h3>
                </div>

                <div className="space-y-5">
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">Challenge</h4>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-white/80">
                      {study.challenge}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">Solution</h4>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-white/80">
                      {study.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">Key Results</h4>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {study.results.map((result, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                            {Icons.check}
                          </div>
                          <span className="text-sm text-gray-600 dark:text-white/80">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-orange-50 dark:bg-orange-900/20 px-3 py-1 text-xs font-medium text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contactus"
                    className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors font-medium"
                  >
                    Discuss Your Project
                    {Icons.arrow}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="rounded-[2rem] border border-gray-200 dark:border-white/[0.05] bg-gradient-to-br from-white to-gray-50 dark:from-white/[0.05] dark:to-white/[0.015] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
              Ready to Start Your Success Story?
            </h3>
            <p className="mb-6 text-gray-600 dark:text-white/80 transition-colors duration-300">
              Let's discuss how our proven SDLC methodology can deliver exceptional results for your project
            </p>
            <Link
              href="/contactus"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-105"
            >
              Start Your Project Today
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}