'use client'

import { motion } from 'framer-motion'
import { useRef, type ReactNode, type MouseEvent } from 'react'

/* ---------- Custom SVG Icons for App Development Process ---------- */
const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'h-8 w-8',
}

const ProcessIcons = {
  strategy: (
    <svg {...iconProps}>
      <path d="M9 12l2 2 4-4" />
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
    </svg>
  ),
  design: (
    <svg {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  ),
  development: (
    <svg {...iconProps}>
      <polyline points="16,18 22,12 16,6" />
      <polyline points="8,6 2,12 8,18" />
    </svg>
  ),
  testing: (
    <svg {...iconProps}>
      <path d="M9 12l2 2 4-4" />
      <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1" />
      <path d="M3 12v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    </svg>
  ),
  deployment: (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  ),
  support: (
    <svg {...iconProps}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
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
            'radial-gradient(350px circle at var(--x, 50%) var(--y, 50%), rgba(249,115,22,0.08), transparent 70%)',
        }}
      />

      {/* Glowing border that follows the mouse */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          padding: 1.5,
          background:
            'radial-gradient(260px circle at var(--x, 50%) var(--y, 50%), rgba(249,115,22,0.4), rgba(249,115,22,0.1) 45%, transparent 70%)',
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

const processSteps = [
  {
    id: 'strategy',
    phase: 'Phase 1',
    title: 'Strategy & Research',
    duration: '1-2 weeks',
    icon: ProcessIcons.strategy,
    description: 'Deep dive into your business goals, target audience, and competitive landscape to define the optimal mobile app strategy.',
    activities: [
      'Market research & competitor analysis',
      'User persona development', 
      'Feature prioritization & MVP scope',
      'Technical feasibility assessment',
      'App Store strategy planning'
    ],
    deliverables: [
      'Project roadmap',
      'Technical specification',
      'User journey maps',
      'Feature requirements'
    ]
  },
  {
    id: 'design',
    phase: 'Phase 2', 
    title: 'UI/UX Design',
    duration: '2-3 weeks',
    icon: ProcessIcons.design,
    description: 'Create intuitive, engaging user interfaces optimized for mobile platforms with platform-specific design guidelines.',
    activities: [
      'Wireframing & user flow mapping',
      'High-fidelity UI design',
      'Interactive prototyping',
      'Platform-specific design patterns',
      'Accessibility compliance'
    ],
    deliverables: [
      'Interactive prototypes',
      'UI design system',
      'App icon & branding',
      'Design specifications'
    ]
  },
  {
    id: 'development',
    phase: 'Phase 3',
    title: 'Development & Integration', 
    duration: '4-8 weeks',
    icon: ProcessIcons.development,
    description: 'Build robust, scalable mobile applications using modern development frameworks with clean, maintainable code.',
    activities: [
      'Native or cross-platform development',
      'API integration & backend services',
      'Third-party service integration',
      'Performance optimization',
      'Security implementation'
    ],
    deliverables: [
      'Functional mobile app',
      'Source code repository',
      'API documentation',
      'Development builds'
    ]
  },
  {
    id: 'testing',
    phase: 'Phase 4',
    title: 'Testing & QA',
    duration: '1-2 weeks', 
    icon: ProcessIcons.testing,
    description: 'Comprehensive testing across devices, platforms, and scenarios to ensure flawless app performance and user experience.',
    activities: [
      'Functional & regression testing',
      'Device & OS compatibility testing',
      'Performance & load testing',
      'Security & penetration testing',
      'User acceptance testing'
    ],
    deliverables: [
      'Test reports',
      'Bug fixes & optimizations',
      'Performance benchmarks',
      'Release candidates'
    ]
  },
  {
    id: 'deployment',
    phase: 'Phase 5',
    title: 'Store Deployment',
    duration: '1 week',
    icon: ProcessIcons.deployment,
    description: 'Handle the complete App Store and Google Play Store submission process with optimization for maximum visibility.',
    activities: [
      'App Store & Play Store submission',
      'App Store Optimization (ASO)',
      'Beta testing & feedback collection',
      'Production deployment',
      'Launch monitoring'
    ],
    deliverables: [
      'Live app in stores',
      'Store listings optimized',
      'Launch analytics setup',
      'Distribution certificates'
    ]
  },
  {
    id: 'support',
    phase: 'Phase 6',
    title: 'Post-Launch Support',
    duration: 'Ongoing',
    icon: ProcessIcons.support,
    description: 'Continuous monitoring, maintenance, and feature enhancements to ensure long-term success and user satisfaction.',
    activities: [
      'Performance monitoring & analytics',
      'Bug fixes & security updates',
      'Feature enhancements',
      'User feedback integration',
      'Platform updates & compliance'
    ],
    deliverables: [
      'Monthly reports',
      'Update releases',
      'Performance insights',
      'Feature roadmap updates'
    ]
  }
]

export default function AppDevProcessSection() {
  return (
    <section id="app-process" className="scroll-mt-28 bg-gray-50 dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
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
            From Concept to App Store
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            Our proven 6-phase methodology ensures your mobile app is built to the highest standards, 
            from initial strategy through ongoing support and optimization.
          </motion.p>
        </div>

        {/* Process Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <GlowCard key={step.id} delay={index * 0.1}>
              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg transition-all duration-500 group-hover:scale-110">
                      {step.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
                        {step.phase}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-white/60">
                        {step.duration}
                      </div>
                    </div>
                  </div>

                  <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-600 dark:text-white/80 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>

                {/* Activities */}
                <div className="mb-6">
                  <h4 className="mb-3 text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    Key Activities
                  </h4>
                  <div className="space-y-2">
                    {step.activities.map((activity, activityIndex) => (
                      <div key={activityIndex} className="flex items-start space-x-2">
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                        <span className="text-xs text-gray-600 dark:text-white/70">
                          {activity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="mb-6">
                  <h4 className="mb-3 text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    Deliverables
                  </h4>
                  <div className="space-y-2">
                    {step.deliverables.map((deliverable, deliverableIndex) => (
                      <div key={deliverableIndex} className="flex items-center space-x-2">
                        <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-600">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-2 w-2 text-white"
                          >
                            <path d="m5 12.5 4.5 4.5L19 7.5" />
                          </svg>
                        </div>
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                          {deliverable}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phase indicator */}
                <div className="flex items-center justify-center">
                  <div className="h-2 w-16 rounded-full bg-gray-200 dark:bg-white/10">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-600 transition-all duration-500"
                      style={{ width: `${((index + 1) / processSteps.length) * 100}%` }}
                    />
                  </div>
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
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="mx-auto max-w-2xl">
            <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
              Ready to Start Your App Journey?
            </h3>
            <p className="mb-8 text-base text-gray-600 dark:text-white/80 transition-colors duration-300">
              Let's discuss your mobile app vision and create a detailed roadmap to bring it to life.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <motion.a
                href="/contactus"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/30"
              >
                Start App Development
              </motion.a>
              <motion.a
                href="#app-portfolio" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-full border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10 px-8 py-4 text-base font-semibold text-indigo-700 dark:text-indigo-300 hover:border-indigo-300 dark:hover:border-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-all duration-200"
              >
                View Our Portfolio
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}