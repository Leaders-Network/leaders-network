'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, type ReactNode, type MouseEvent } from 'react'

/* ---------- 3D tilt wrapper ---------- */
function Tilt({ children, className = '' }: { children: ReactNode; className?: string }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 18 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 150, damping: 18 })

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div style={{ perspective: 1000 }} onMouseMove={onMove} onMouseLeave={onLeave}>
      <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }} className={className}>
        {children}
      </motion.div>
    </div>
  )
}

/* ---------- Glow Card ---------- */
function GlowCard({
  children,
  delay = 0,
}: {
  children: ReactNode
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--x', `${e.clientX - r.left}px`)
    el.style.setProperty('--y', `${e.clientY - r.top}px`)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-[2rem] border border-gray-200 dark:border-white/[0.05] bg-gradient-to-br from-white to-gray-50 dark:from-white/[0.05] dark:to-white/[0.015] shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-300"
    >
      {/* Soft inner glow that follows the mouse */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(350px circle at var(--x, 50%) var(--y, 50%), rgba(59,130,246,0.08), transparent 70%)',
        }}
      />

      {/* Glowing border that follows the mouse */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          padding: 1.5,
          background:
            'radial-gradient(260px circle at var(--x, 50%) var(--y, 50%), rgba(59,130,246,0.4), rgba(59,130,246,0.1) 45%, transparent 70%)',
          WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* Card content sits above the glow layers */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

const portfolioProjects = [
  {
    id: 'fintech-platform',
    title: 'FinTech Payment Platform',
    description: 'A comprehensive payment processing platform built with React, Node.js, and PostgreSQL. Features real-time transactions, fraud detection, and multi-currency support.',
    image: '/images/about-software.jpg',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe API'],
    category: 'Web Application',
    results: {
      performance: '99.9% Uptime',
      transactions: '1M+ Monthly',
      users: '50K+ Active Users'
    },
    features: [
      'Real-time payment processing',
      'Advanced fraud detection',
      'Multi-currency support',
      'Comprehensive analytics'
    ]
  },
  {
    id: 'ecommerce-marketplace',
    title: 'E-commerce Marketplace',
    description: 'Multi-vendor e-commerce platform with advanced inventory management, seller dashboard, and integrated shipping solutions. Built for scalability and performance.',
    image: '/images/architecture.jpg',
    technologies: ['Next.js', 'MongoDB', 'Stripe', 'AWS'],
    category: 'E-commerce',
    results: {
      performance: '2.3s Load Time',
      conversion: '18% Increase',
      revenue: '$2M+ Generated'
    },
    features: [
      'Multi-vendor support',
      'Inventory management',
      'Integrated shipping',
      'Mobile optimization'
    ]
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Analytics Dashboard',
    description: 'Enterprise analytics platform with real-time data visualization, custom reporting, and team collaboration features. Designed for scalable business intelligence.',
    image: '/images/data-analysis.jpg',
    technologies: ['Vue.js', 'Python', 'Redis', 'Chart.js'],
    category: 'SaaS Platform',
    results: {
      performance: '100ms Response',
      data: '10TB+ Processed',
      accuracy: '99.8% Accurate'
    },
    features: [
      'Real-time analytics',
      'Custom dashboards',
      'Team collaboration',
      'API integrations'
    ]
  },
  {
    id: 'healthcare-portal',
    title: 'Healthcare Management Portal',
    description: 'HIPAA-compliant patient management system with appointment scheduling, medical records, and telemedicine capabilities. Built with security and compliance in mind.',
    image: '/images/data-analysis-img.jpg',
    technologies: ['React', 'Express', 'MySQL', 'Socket.io'],
    category: 'Healthcare',
    results: {
      compliance: 'HIPAA Certified',
      patients: '25K+ Managed',
      satisfaction: '97% Rating'
    },
    features: [
      'HIPAA compliance',
      'Appointment scheduling',
      'Telemedicine integration',
      'Medical records management'
    ]
  }
]

export default function WebDevPortfolioSection() {
  return (
    <section className="relative scroll-mt-28 overflow-hidden bg-gray-50 dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center rounded-full border border-gray-200 dark:border-white/[0.06] bg-gray-100 dark:bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-gray-700 dark:text-white/90 sm:text-sm transition-colors duration-300"
          >
            Portfolio Showcase
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Featured Web Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            Explore some of our recent web development projects that showcase our expertise in building scalable, secure, and user-friendly applications.
          </motion.p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {portfolioProjects.map((project, index) => (
            <GlowCard key={project.id} delay={index * 0.2}>
              <div className="p-6">
                {/* Project Image with Tilt Effect */}
                <div className="mb-6">
                  <Tilt className="relative aspect-[16/10] overflow-hidden rounded-xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center rounded-full bg-white/90 dark:bg-black/70 px-3 py-1 text-xs font-medium text-gray-900 dark:text-white backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </Tilt>
                </div>

                {/* Project Details */}
                <div className="mb-4">
                  <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-white/80 transition-colors duration-300">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="mb-2 text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 px-2.5 py-1 text-xs font-medium text-blue-700 dark:text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="mb-2 text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <span className="flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-600">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-1.5 w-1.5 text-white"
                          >
                            <path d="m5 12.5 4.5 4.5L19 7.5" />
                          </svg>
                        </span>
                        <span className="text-xs text-gray-600 dark:text-white/70">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="mb-3 text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    Project Results
                  </h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {Object.entries(project.results).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-sm font-bold text-gray-900 dark:text-white">
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-white/50 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="/contactus"
                  className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30"
                >
                  Discuss Similar Project
                </Link>
              </div>
            </GlowCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 text-center"
        >
          <div className="mx-auto max-w-2xl">
            <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
              Ready to Build Something Amazing?
            </h3>
            <p className="mb-8 text-base text-gray-600 dark:text-white/80 transition-colors duration-300">
              Let's work together to create a web solution that drives your business forward and delivers exceptional results.
            </p>
            <Link
              href="/contactus"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30"
            >
              Start Your Project Today
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}