'use client'

import { motion } from 'framer-motion'
import { useRef, type ReactNode, type MouseEvent } from 'react'

/* ---------- Custom SVG Icons for Development Process ---------- */
const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'h-6 w-6',
}

const ProcessIcons = {
  discovery: (
    <svg {...iconProps}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  ),
  design: (
    <svg {...iconProps}>
      <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
    </svg>
  ),
  development: (
    <svg {...iconProps}>
      <polyline points="16,18 22,12 16,6" />
      <polyline points="8,6 2,12 8,18" />
    </svg>
  ),
  deployment: (
    <svg {...iconProps}>
      <path d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7" />
      <ellipse cx="12" cy="7" rx="8" ry="3" />
    </svg>
  ),
  maintenance: (
    <svg {...iconProps}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

/* ---------- Glow Card (matching ServicesFeaturesSection) ---------- */
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
      className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-[2rem] border border-gray-200 dark:border-white/[0.05] bg-gradient-to-br from-white to-gray-50 dark:from-white/[0.05] dark:to-white/[0.015] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] sm:min-h-[320px] sm:p-8 transition-all duration-300"
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
      <div className="relative z-10 flex h-full flex-1 flex-col justify-between">
        {children}
      </div>
    </motion.div>
  )
}

const processSteps = [
  {
    step: '01',
    icon: ProcessIcons.discovery,
    title: 'Discovery & Planning',
    description: 'We start by understanding your business goals, target audience, and technical requirements. Our team conducts thorough research and creates detailed project specifications.',
    duration: '1-2 Weeks',
    deliverables: ['Project Roadmap', 'Technical Specifications', 'Timeline & Budget']
  },
  {
    step: '02',
    icon: ProcessIcons.design,
    title: 'Design & Prototyping',
    description: 'Our design team creates wireframes, mockups, and interactive prototypes. We focus on user experience, visual appeal, and responsive design across all devices.',
    duration: '2-3 Weeks',
    deliverables: ['UI/UX Design', 'Interactive Prototype', 'Design System']
  },
  {
    step: '03',
    icon: ProcessIcons.development,
    title: 'Development & Testing',
    description: 'Using agile methodologies, we develop your web application with clean, maintainable code. Continuous testing ensures quality and performance at every stage.',
    duration: '4-8 Weeks',
    deliverables: ['Functional Application', 'Quality Assurance', 'Performance Testing']
  },
  {
    step: '04',
    icon: ProcessIcons.deployment,
    title: 'Deployment & Launch',
    description: 'We deploy your application to production servers with proper security configurations. Our team handles DNS setup, SSL certificates, and performance optimization.',
    duration: '1 Week',
    deliverables: ['Live Application', 'Security Setup', 'Performance Optimization']
  },
  {
    step: '05',
    icon: ProcessIcons.maintenance,
    title: 'Maintenance & Support',
    description: 'Post-launch support includes monitoring, updates, and feature enhancements. We provide ongoing maintenance to ensure your application stays secure and up-to-date.',
    duration: 'Ongoing',
    deliverables: ['24/7 Monitoring', 'Regular Updates', 'Technical Support']
  }
]

export default function WebDevProcessSection() {
  return (
    <section className="relative scroll-mt-28 overflow-hidden bg-white dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300">
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
            Development Process
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            How We Build Your Success
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            Our proven development methodology ensures your project is delivered on time, within budget, and exceeds expectations at every milestone.
          </motion.p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {processSteps.map((step, index) => (
            <GlowCard key={step.step} delay={index * 0.15}>
              {/* Step number */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:bg-white text-white dark:text-black shadow-lg dark:shadow-glow-white transition-all duration-500 group-hover:scale-110">
                  {step.icon}
                </div>
                <span className="text-2xl font-bold text-gray-300 dark:text-gray-600">
                  {step.step}
                </span>
              </div>

              <div className="flex-1">
                <div className="mb-3">
                  <h3 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
                    {step.title}
                  </h3>
                  <span className="text-xs font-medium text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-500/10 px-2 py-1 rounded-full">
                    {step.duration}
                  </span>
                </div>
                
                <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-white/80 transition-colors duration-300">
                  {step.description}
                </p>

                <div>
                  <h4 className="mb-2 text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    Key Deliverables
                  </h4>
                  <ul className="space-y-1">
                    {step.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="flex items-center gap-2">
                        <span className="flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:bg-white">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-1.5 w-1.5 text-white dark:text-black"
                          >
                            <path d="m5 12.5 4.5 4.5L19 7.5" />
                          </svg>
                        </span>
                        <span className="text-xs text-gray-600 dark:text-white/70">
                          {deliverable}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="mx-auto max-w-2xl">
            <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
              Ready to Start Your Project?
            </h3>
            <p className="mb-8 text-base text-gray-600 dark:text-white/80 transition-colors duration-300">
              Our streamlined process ensures your web application is built efficiently and delivered with exceptional quality.
            </p>
            <motion.a
              href="/contactus"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/30"
            >
              Schedule a Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}