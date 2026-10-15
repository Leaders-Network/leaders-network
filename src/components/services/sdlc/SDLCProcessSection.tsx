'use client'

import { motion } from 'framer-motion'
import { useRef, type ReactNode, type MouseEvent } from 'react'

/* ---------- GlowCard Component (matching homepage style) ---------- */
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
      className="group relative overflow-hidden rounded-[2rem] border border-gray-200 dark:border-white/[0.05] bg-gradient-to-br from-white to-gray-50 dark:from-white/[0.05] dark:to-white/[0.015] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-300"
    >
      {/* Soft inner glow that follows the mouse */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(350px circle at var(--x, 50%) var(--y, 50%), rgba(234,88,12,0.08), transparent 70%)',
        }}
      />

      {/* Glowing border that follows the mouse */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          padding: 1.5,
          background:
            'radial-gradient(260px circle at var(--x, 50%) var(--y, 50%), rgba(234,88,12,0.4), rgba(234,88,12,0.1) 45%, transparent 70%)',
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

/* ---------- Custom SVG Icons (matching homepage style) ---------- */
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
  analyze: (
    <svg {...iconProps}>
      <path d="M9 21h6" />
      <path d="M12 21v-4" />
      <path d="M7.5 16.5C6 15 6 12.5 6 12a6 6 0 1 1 12 0c0 .5 0 3-1.5 4.5" />
    </svg>
  ),
  design: (
    <svg {...iconProps}>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14,2 14,8 20,8" />
    </svg>
  ),
  ui: (
    <svg {...iconProps}>
      <circle cx="13.5" cy="6.5" r=".5" />
      <circle cx="17.5" cy="10.5" r=".5" />
      <circle cx="8.5" cy="7.5" r=".5" />
      <circle cx="6.5" cy="12.5" r=".5" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  ),
  develop: (
    <svg {...iconProps}>
      <polyline points="16,18 22,12 16,6" />
      <polyline points="8,6 2,12 8,18" />
    </svg>
  ),
  test: (
    <svg {...iconProps}>
      <path d="M9 2h6v6.333L20 16a2 2 0 0 1-1.732 3H5.732A2 2 0 0 1 4 16l5-7.667V2z" />
      <path d="M6.5 5h11" />
      <path d="M6.5 9h11" />
    </svg>
  ),
  deploy: (
    <svg {...iconProps}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  maintain: (
    <svg {...iconProps}>
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  ),
  check: (
    <svg {...iconProps}>
      <path d="m9 12 2 2 4-4" />
      <path d="M21 12c.552 0 1-.448 1-1V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v3c0 .552.448 1 1 1" />
    </svg>
  )
}

const processSteps = [
  {
    id: 1,
    title: 'Requirements Analysis',
    description: 'Deep dive into business requirements, user needs, and technical specifications to create a comprehensive project roadmap.',
    icon: ProcessIcons.analyze,
    tasks: ['Stakeholder interviews', 'Business analysis', 'Technical feasibility', 'Risk assessment'],
    duration: '1-2 weeks'
  },
  {
    id: 2,
    title: 'System Design',
    description: 'Create detailed system architecture, database design, and technical specifications that guide development.',
    icon: ProcessIcons.design,
    tasks: ['Architecture design', 'Database modeling', 'API specification', 'Security planning'],
    duration: '2-3 weeks'
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Design intuitive user interfaces and experiences that align with user needs and business objectives.',
    icon: ProcessIcons.ui,
    tasks: ['User research', 'Wireframing', 'Prototyping', 'Design systems'],
    duration: '2-4 weeks'
  },
  {
    id: 4,
    title: 'Development',
    description: 'Agile development using modern technologies and best practices with continuous integration.',
    icon: ProcessIcons.develop,
    tasks: ['Sprint planning', 'Code development', 'Code reviews', 'Version control'],
    duration: '4-12 weeks'
  },
  {
    id: 5,
    title: 'Quality Assurance',
    description: 'Comprehensive testing including unit tests, integration tests, and user acceptance testing.',
    icon: ProcessIcons.test,
    tasks: ['Unit testing', 'Integration testing', 'Performance testing', 'Security testing'],
    duration: '2-4 weeks'
  },
  {
    id: 6,
    title: 'Deployment',
    description: 'Seamless deployment to production environments with monitoring and performance optimization.',
    icon: ProcessIcons.deploy,
    tasks: ['Environment setup', 'CI/CD pipeline', 'Production deployment', 'Monitoring'],
    duration: '1-2 weeks'
  },
  {
    id: 7,
    title: 'Maintenance',
    description: 'Ongoing support, updates, and enhancements to ensure optimal performance and satisfaction.',
    icon: ProcessIcons.maintain,
    tasks: ['Bug fixes', 'Feature updates', 'Performance optimization', '24/7 support'],
    duration: 'Ongoing'
  }
]

export default function SDLCProcessSection() {
  return (
    <section id="process" className="relative overflow-hidden bg-gray-50 dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300">
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
            Our SDLC Process
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Structured Development{' '}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Methodology
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            Our proven 7-step SDLC process ensures quality, efficiency, and successful project delivery from concept to maintenance.
          </motion.p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-8">
          {processSteps.map((step, index) => (
            <GlowCard key={step.id} delay={index * 0.1}>
              <div className="mb-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg transition-all duration-500 group-hover:scale-110">
                    {step.icon}
                  </div>
                  <span className="text-xs font-medium text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-500/10 px-2 py-1 rounded-full">
                    Step {step.id}
                  </span>
                </div>
                
                <h3 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-white/80 transition-colors duration-300 mb-3">
                  {step.description}
                </p>

                <div className="text-xs font-medium text-violet-600 dark:text-violet-400 mb-3">
                  Duration: {step.duration}
                </div>
              </div>

              {/* Divider */}
              <motion.div
                className="mb-4 h-px origin-left bg-gray-300 dark:bg-white/10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
              />

              {/* Tasks */}
              <ul className="space-y-2">
                {step.tasks.map((task, taskIndex) => (
                  <motion.li
                    key={taskIndex}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1 + taskIndex * 0.05 + 0.5,
                    }}
                  >
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600">
                      {ProcessIcons.check}
                    </span>
                    <span className="text-xs text-gray-600 dark:text-white/70 transition-colors duration-300">
                      {task}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </GlowCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="rounded-[2rem] border border-gray-200 dark:border-white/[0.05] bg-gradient-to-br from-white to-gray-50 dark:from-white/[0.05] dark:to-white/[0.015] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
              Ready to Start Your Project?
            </h3>
            <p className="mb-6 text-gray-600 dark:text-white/80 transition-colors duration-300">
              Let our experienced team guide your project through our proven SDLC process
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}