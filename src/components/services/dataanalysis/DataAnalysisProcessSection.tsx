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
  discovery: (
    <svg {...iconProps}>
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  ),
  collection: (
    <svg {...iconProps}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  processing: (
    <svg {...iconProps}>
      <path d="M14.5 4h-5L7 7l4.5 7.5L16 7z" />
      <path d="M13 17l3-3 3 3" />
    </svg>
  ),
  analysis: (
    <svg {...iconProps}>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  insights: (
    <svg {...iconProps}>
      <path d="M9 12l2 2 4-4" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  ),
}

/* ---------- Glow Card (Emerald/Teal Theme) ---------- */
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
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(350px circle at var(--x, 50%) var(--y, 50%), rgba(16,185,129,0.08), transparent 70%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          padding: 1.5,
          background:
            'radial-gradient(260px circle at var(--x, 50%) var(--y, 50%), rgba(16,185,129,0.4), rgba(16,185,129,0.1) 45%, transparent 70%)',
          WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

const processSteps = [
  {
    id: 'discovery',
    step: '01',
    title: 'Discovery & Planning',
    description: 'Understanding business objectives, identifying data sources, and defining success metrics for the analytics project.',
    icon: ProcessIcons.discovery,
    duration: '1-2 weeks',
    deliverables: ['Data Assessment', 'Project Scope', 'Success Metrics', 'Timeline Planning'],
  },
  {
    id: 'collection',
    step: '02',
    title: 'Data Collection',
    description: 'Gathering data from multiple sources, ensuring quality, and establishing reliable data pipelines.',
    icon: ProcessIcons.collection,
    duration: '2-3 weeks',
    deliverables: ['Data Integration', 'Quality Assessment', 'Pipeline Setup', 'Source Documentation'],
  },
  {
    id: 'processing',
    step: '03',
    title: 'Data Processing',
    description: 'Cleaning, transforming, and preparing data for analysis using advanced processing techniques.',
    icon: ProcessIcons.processing,
    duration: '1-2 weeks',
    deliverables: ['Clean Datasets', 'Data Transformation', 'Feature Engineering', 'Validation Reports'],
  },
  {
    id: 'analysis',
    step: '04',
    title: 'Analysis & Modeling',
    description: 'Applying statistical methods, machine learning algorithms, and advanced analytics techniques.',
    icon: ProcessIcons.analysis,
    duration: '3-4 weeks',
    deliverables: ['Statistical Analysis', 'ML Models', 'Pattern Recognition', 'Predictive Models'],
  },
  {
    id: 'insights',
    step: '05',
    title: 'Insights & Delivery',
    description: 'Visualizing results, creating interactive dashboards, and delivering actionable business insights.',
    icon: ProcessIcons.insights,
    duration: '1-2 weeks',
    deliverables: ['Interactive Dashboards', 'Reports & Insights', 'Recommendations', 'Training Materials'],
  },
]

export default function DataAnalysisProcessSection() {
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
            Our Analytics Process
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Data Analytics Methodology
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            Our systematic approach to data analytics ensures reliable, actionable insights through proven methodologies and best practices.
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
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg transition-all duration-500 group-hover:scale-110 lg:h-20 lg:w-20">
                      {step.icon}
                    </div>
                    <div className="lg:text-center">
                      <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
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
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-white" />
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