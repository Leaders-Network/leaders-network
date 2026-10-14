'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRef, type ReactNode, type MouseEvent } from 'react'

/* ---------- Custom SVG Icons (Emerald/Teal Theme) ---------- */
const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'h-8 w-8',
}

const AnalyticsServiceIcons = {
  businessIntelligence: (
    <svg {...iconProps}>
      <path d="M3 3v18h18" />
      <path d="M7 12l4-4 4 4 4-4" />
      <circle cx="7" cy="12" r="1" />
      <circle cx="11" cy="8" r="1" />
      <circle cx="15" cy="12" r="1" />
      <circle cx="19" cy="8" r="1" />
    </svg>
  ),
  predictiveAnalytics: (
    <svg {...iconProps}>
      <path d="M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z" />
      <path d="M21 7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7Z" />
      <path d="M12 22V2" />
      <path d="m19 15-3-3 3-3" />
      <path d="m5 9 3 3-3 3" />
    </svg>
  ),
  dataVisualization: (
    <svg {...iconProps}>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  machineLearning: (
    <svg {...iconProps}>
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
      <path d="M12 19v3" />
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
      {/* Emerald-themed inner glow that follows the mouse */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(350px circle at var(--x, 50%) var(--y, 50%), rgba(16,185,129,0.08), transparent 70%)',
        }}
      />

      {/* Emerald-themed glowing border that follows the mouse */}
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

      {/* Card content sits above the glow layers */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

const analyticsServices = [
  {
    id: 'business-intelligence',
    title: 'Business Intelligence',
    description: 'Comprehensive BI solutions that transform raw data into strategic insights. Interactive dashboards, automated reporting, and real-time analytics for informed decision-making.',
    icon: AnalyticsServiceIcons.businessIntelligence,
    features: ['Interactive Dashboards', 'Automated Reporting', 'KPI Monitoring', 'Data Mining'],
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Analytics',
    description: 'Forecast future trends and behaviors using advanced statistical models and machine learning algorithms. Anticipate market changes and optimize business strategies.',
    icon: AnalyticsServiceIcons.predictiveAnalytics,
    features: ['Trend Forecasting', 'Risk Assessment', 'Customer Behavior', 'Market Analysis'],
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization',
    description: 'Transform complex datasets into clear, compelling visual stories. Interactive charts, graphs, and infographics that make data insights accessible to all stakeholders.',
    icon: AnalyticsServiceIcons.dataVisualization,
    features: ['Interactive Charts', 'Custom Dashboards', 'Real-time Updates', 'Mobile Responsive'],
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning Solutions',
    description: 'Advanced ML models for pattern recognition, classification, and automated decision-making. Custom algorithms tailored to your specific business challenges.',
    icon: AnalyticsServiceIcons.machineLearning,
    features: ['Pattern Recognition', 'Automated Classification', 'Recommendation Systems', 'Anomaly Detection'],
  },
]

export default function DataAnalysisServicesSection() {
  return (
    <section id="analytics-services" className="scroll-mt-28 bg-gray-50 dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300">
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
            Analytics Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Data Analytics Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            Comprehensive analytics services that unlock the full potential of your data, from business intelligence to advanced machine learning solutions.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {analyticsServices.map((service, index) => (
            <GlowCard key={service.id} delay={index * 0.1}>
              <div className="p-8">
                {/* Header */}
                <div className="mb-6 flex items-start space-x-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 dark:bg-white text-white dark:text-black shadow-lg dark:shadow-glow-white transition-all duration-500 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-white/80 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6 grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-white" />
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="flex gap-3">
                  <Link
                    href="/contactus"
                    className="flex-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/30"
                  >
                    Learn More
                  </Link>
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
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="mx-auto max-w-2xl">
            <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
              Ready to Unlock Your Data's Potential?
            </h3>
            <p className="mb-8 text-base text-gray-600 dark:text-white/80 transition-colors duration-300">
              Transform your raw data into strategic business insights with our comprehensive analytics solutions.
            </p>
            <Link
              href="/contactus"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30"
            >
              Start Your Analytics Journey
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}