'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRef, type ReactNode, type MouseEvent } from 'react'

/* ---------- Custom SVG Icons for Industries ---------- */
const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'h-6 w-6',
}

const IndustryIcons = {
  finance: (
    <svg {...iconProps}>
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  healthcare: (
    <svg {...iconProps}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
    </svg>
  ),
  manufacturing: (
    <svg {...iconProps}>
      <path d="M2 20h20" />
      <path d="M14 2v6a2 2 0 0 0 2 2h6" />
      <path d="M5 2h9v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <circle cx="10" cy="12" r="2" />
      <path d="m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22" />
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

const caseStudies = [
  {
    id: 'financial-services',
    client: 'Leading Financial Services Firm',
    industry: 'Financial Services',
    icon: IndustryIcons.finance,
    challenge: 'Legacy infrastructure causing performance bottlenecks and security vulnerabilities',
    solution: 'Complete cloud migration with modernized architecture and enhanced security protocols',
    results: [
      '75% improvement in system performance',
      '60% reduction in operational costs',
      '99.9% uptime achievement',
      'Enhanced compliance with financial regulations'
    ],
    metrics: {
      performance: '75%',
      costSaving: '60%',
      uptime: '99.9%'
    },
    testimonial: "Leaders Network transformed our entire IT infrastructure. The migration was seamless and the results exceeded our expectations.",
    clientRole: 'CTO, Financial Services'
  },
  {
    id: 'healthcare',
    client: 'Regional Healthcare Network',
    industry: 'Healthcare',
    icon: IndustryIcons.healthcare,
    challenge: 'Disparate systems preventing efficient patient care coordination and data sharing',
    solution: 'Integrated healthcare platform with HIPAA-compliant cloud infrastructure and interoperability',
    results: [
      '50% faster patient data access',
      '80% reduction in system downtime',
      'Full HIPAA compliance achieved',
      'Improved patient care coordination'
    ],
    metrics: {
      performance: '50%',
      downtime: '80%',
      compliance: '100%'
    },
    testimonial: "The integrated platform revolutionized our patient care delivery. Data flows seamlessly between departments now.",
    clientRole: 'IT Director, Healthcare Network'
  },
  {
    id: 'manufacturing',
    client: 'Manufacturing Corporation',
    industry: 'Manufacturing',
    icon: IndustryIcons.manufacturing,
    challenge: 'Outdated systems hampering production efficiency and real-time monitoring capabilities',
    solution: 'IoT-enabled smart manufacturing platform with predictive analytics and automation',
    results: [
      '40% increase in production efficiency',
      '90% reduction in unplanned downtime',
      'Real-time production monitoring',
      'Predictive maintenance implementation'
    ],
    metrics: {
      efficiency: '40%',
      downtime: '90%',
      monitoring: '100%'
    },
    testimonial: "Our production line is now fully optimized. The predictive maintenance alone has saved us millions.",
    clientRole: 'Operations Manager, Manufacturing Corp'
  },
]

export default function ITConsultingCaseStudiesSection() {
  return (
    <section className="bg-white dark:bg-dark-900 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300">
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
            Success Stories
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Client Case Studies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            Real-world examples of how our IT consulting services have transformed businesses across various industries with measurable results.
          </motion.p>
        </div>

        {/* Case Studies */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <GlowCard key={study.id} delay={index * 0.2}>
              <div className="p-8">
                <div className="grid gap-8 lg:grid-cols-2">
                  {/* Case Study Details */}
                  <div>
                    <div className="mb-6 flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
                        {study.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
                          {study.client}
                        </h3>
                        <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          {study.industry}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                          Challenge
                        </h4>
                        <p className="text-sm leading-relaxed text-gray-600 dark:text-white/80">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                          Solution
                        </h4>
                        <p className="text-sm leading-relaxed text-gray-600 dark:text-white/80">
                          {study.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Results & Metrics */}
                  <div>
                    <div className="mb-6">
                      <h4 className="mb-4 text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                        Key Results
                      </h4>
                      <div className="space-y-3">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center space-x-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-white" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {result}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Client Testimonial */}
                    <div className="rounded-xl bg-gray-50 dark:bg-white/[0.05] p-6">
                      <blockquote className="mb-4 text-sm italic leading-relaxed text-gray-700 dark:text-gray-300">
                        "{study.testimonial}"
                      </blockquote>
                      <div className="text-xs font-medium text-blue-600 dark:text-blue-400">
                        {study.clientRole}
                      </div>
                    </div>
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
              Ready to Transform Your IT Infrastructure?
            </h3>
            <p className="mb-8 text-base text-gray-600 dark:text-white/80 transition-colors duration-300">
              Join these industry leaders who have revolutionized their operations with our IT consulting expertise.
            </p>
            <Link
              href="/contactus"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30"
            >
              Start Your Transformation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}