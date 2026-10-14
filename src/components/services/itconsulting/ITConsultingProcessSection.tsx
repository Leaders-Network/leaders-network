'use client'

import { motion } from 'framer-motion'
import { useRef, type ReactNode, type MouseEvent } from 'react'

/* ---------- Custom SVG Icons for Process Steps ---------- */
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
  discover: (
    <svg {...iconProps}>
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
      <circle cx="11" cy="11" r="3" />
    </svg>
  ),
  assess: (
    <svg {...iconProps}>
      <path d="M9 11H5a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h4" />
      <path d="M20 16v-3a2 2 0 0 0-2-2h-4" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 8v4l2 2" />
    </svg>
  ),
  design: (
    <svg {...iconProps}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  implement: (
    <svg {...iconProps}>
      <path d="M14.5 4h-5L7 7l4.5 7.5L16 7z" />
      <path d="M13 17l3-3 3 3" />
      <path d="M11 17l-3-3-3 3" />
    </svg>
  ),
  optimize: (
    <svg {...iconProps}>
      <path d="M3 3v18h18" />
      <path d="M7 12l4-4 4 4 4-4" />
      <circle cx="7" cy="12" r="1" />
      <circle cx="11" cy="8" r="1" />
      <circle cx="15" cy="12" r="1" />
      <circle cx="19" cy="8" r="1" />
    </svg>
  ),
}

/* ---------- Glow Card (Blue Theme) ---------- */
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
      {/* Blue-themed inner glow that follows the mouse */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(350px circle at var(--x, 50%) var(--y, 50%), rgba(59,130,246,0.08), transparent 70%)',
        }}
      />

      {/* Blue-themed glowing border that follows the mouse */}
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

const processSteps = [
  {
    id: 'discover',
    step: '01',
    title: 'Discovery & Analysis',
    description: 'Comprehensive assessment of your current IT landscape, business objectives, and technology challenges to understand the full scope.',
    icon: ProcessIcons.discover,
    duration: '1-2 weeks',
    deliverables: ['Current State Analysis', 'Requirements Document', 'Stakeholder Interviews', 'Risk Assessment'],
  },
  {
    id: 'assess',
    step: '02',
    title: 'Strategic Assessment',
    description: 'Deep dive into infrastructure performance, security posture, and operational efficiency to identify improvement opportunities.',
    icon: ProcessIcons.assess,
    duration: '2-3 weeks',
    deliverables: ['Technical Audit Report', 'Gap Analysis', 'Security Review', 'Performance Metrics'],
  },
  {
    id: 'design',
    step: '03',
    title: 'Solution Design',
    description: 'Architect comprehensive technology solutions aligned with business goals, including detailed implementation roadmaps.',
    icon: ProcessIcons.design,
    duration: '2-4 weeks',
    deliverables: ['Architecture Blueprint', 'Implementation Plan', 'Cost Projections', 'Timeline Schedule'],
  },
  {
    id: 'implement',
    step: '04',
    title: 'Implementation',
    description: 'Execute the strategic plan with phased deployment, rigorous testing, and continuous monitoring to ensure success.',
    icon: ProcessIcons.implement,
    duration: '4-12 weeks',
    deliverables: ['System Deployment', 'Testing Reports', 'User Training', 'Documentation'],
  },
  {
    id: 'optimize',
    step: '05',
    title: 'Optimize & Monitor',
    description: 'Ongoing performance monitoring, optimization, and strategic refinement to maximize ROI and ensure long-term success.',
    icon: ProcessIcons.optimize,
    duration: 'Ongoing',
    deliverables: ['Performance Reports', 'Optimization Plans', 'Support Services', 'Strategic Reviews'],
  },
]

export default function ITConsultingProcessSection() {
  return (
    <section className="bg-gray-50 dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300">
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
            Our Methodology
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            IT Consulting Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            Our proven 5-step methodology ensures successful IT transformations through systematic analysis, strategic design, and meticulous execution.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <GlowCard key={step.id} delay={index * 0.15}>
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                  {/* Step Header */}
                  <div className="mb-6 flex items-start space-x-4 lg:mb-0 lg:w-80 lg:flex-col lg:space-x-0 lg:space-y-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transition-all duration-500 group-hover:scale-110 lg:h-20 lg:w-20">
                      {step.icon}
                    </div>
                    <div className="lg:text-center">
                      <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                        Step {step.step}
                      </div>
                      <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300 lg:text-2xl">
                        {step.title}
                      </h3>
                      <div className="mt-2 text-xs font-medium text-gray-600 dark:text-white/70">
                        Duration: {step.duration}
                      </div>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-white/80 transition-colors duration-300 lg:text-base">
                      {step.description}
                    </p>

                    {/* Deliverables */}
                    <div>
                      <h4 className="mb-3 text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                        Key Deliverables
                      </h4>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className="flex items-center space-x-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-white" />
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                              {deliverable}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}