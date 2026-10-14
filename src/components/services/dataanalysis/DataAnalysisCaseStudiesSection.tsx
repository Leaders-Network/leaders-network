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
  ecommerce: (
    <svg {...iconProps}>
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  ),
  retail: (
    <svg {...iconProps}>
      <path d="M2 7h20l-2 12H4z" />
      <path d="M7 12h10" />
      <path d="M7 8h10" />
    </svg>
  ),
  finance: (
    <svg {...iconProps}>
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
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

const caseStudies = [
  {
    id: 'ecommerce-analytics',
    client: 'Global E-commerce Platform',
    industry: 'E-commerce',
    icon: IndustryIcons.ecommerce,
    challenge: 'Needed real-time customer behavior insights and predictive analytics to optimize conversion rates and inventory management.',
    solution: 'Implemented comprehensive analytics platform with customer journey tracking, predictive modeling, and automated reporting.',
    results: [
      '35% increase in conversion rates',
      '50% improvement in inventory turnover',
      '90% reduction in reporting time',
      '25% boost in customer retention'
    ],
    testimonial: "The analytics platform completely transformed how we understand our customers. Revenue increased by 40% in the first quarter.",
    clientRole: 'VP of Analytics, E-commerce Platform'
  },
  {
    id: 'retail-insights',
    client: 'Regional Retail Chain',
    industry: 'Retail',
    icon: IndustryIcons.retail,
    challenge: 'Struggling with inventory optimization and understanding customer purchasing patterns across multiple store locations.',
    solution: 'Built integrated business intelligence system with demand forecasting, customer segmentation, and store performance analytics.',
    results: [
      '30% reduction in inventory costs',
      '45% improvement in demand forecasting accuracy',
      '20% increase in average transaction value',
      'Real-time store performance monitoring'
    ],
    testimonial: "Our inventory management is now data-driven. We reduced waste by 30% while improving customer satisfaction significantly.",
    clientRole: 'Operations Director, Retail Chain'
  },
  {
    id: 'financial-risk',
    client: 'Financial Services Company',
    industry: 'Financial Services',
    icon: IndustryIcons.finance,
    challenge: 'Required advanced risk modeling and fraud detection system to protect against financial losses and comply with regulations.',
    solution: 'Developed machine learning-based risk assessment platform with real-time fraud detection and regulatory compliance reporting.',
    results: [
      '80% reduction in fraudulent transactions',
      '60% improvement in risk assessment accuracy',
      'Full regulatory compliance achieved',
      '25% decrease in operational risk'
    ],
    testimonial: "The risk analytics platform has been game-changing. We've prevented millions in potential losses while improving customer experience.",
    clientRole: 'Chief Risk Officer, Financial Services'
  },
]

export default function DataAnalysisCaseStudiesSection() {
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
            Analytics Success Stories
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Data Analytics Case Studies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            Real success stories showcasing how our data analytics solutions have driven measurable business results across different industries.
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
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg">
                        {study.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
                          {study.client}
                        </h3>
                        <div className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
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
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-white" />
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
                      <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
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
              Ready to Transform Your Data Into Insights?
            </h3>
            <p className="mb-8 text-base text-gray-600 dark:text-white/80 transition-colors duration-300">
              Join these successful companies that have unlocked the power of their data with our analytics expertise.
            </p>
            <Link
              href="/contactus"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30"
            >
              Start Your Analytics Project
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}