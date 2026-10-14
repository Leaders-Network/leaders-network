'use client'

import { motion } from 'framer-motion'
import { useRef, type ReactNode, type MouseEvent } from 'react'

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

const FeatureIcons = {
  security: (
    <svg {...iconProps}>
      <path d="M12 3 4 6v6c0 4.5 3.2 8 8 9 4.8-1 8-4.5 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  speed: (
    <svg {...iconProps}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  ),
  team: (
    <svg {...iconProps}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  quality: (
    <svg {...iconProps}>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  ),
  support: (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  ),
  scalable: (
    <svg {...iconProps}>
      <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
    </svg>
  )
}

/* ---------- Glow Card (matching WhyChooseUsSection) ---------- */
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
      className="group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[2rem] border border-gray-200 dark:border-white/[0.05] bg-gradient-to-br from-white to-gray-50 dark:from-white/[0.05] dark:to-white/[0.015] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] sm:min-h-[360px] transition-all duration-300"
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

const features = [
  {
    icon: FeatureIcons.security,
    title: 'Enterprise Security',
    description: 'Bank-level security with encryption, compliance audits, and international standards including ISO 27001 and SOC 2 certification.',
    metrics: '99.9% Uptime'
  },
  {
    icon: FeatureIcons.speed,
    title: 'Rapid Deployment',
    description: 'Agile methodologies and modern DevOps practices ensure faster time-to-market without compromising quality or reliability.',
    metrics: '50% Faster Delivery'
  },
  {
    icon: FeatureIcons.team,
    title: 'Expert Team',
    description: 'Seasoned professionals with deep expertise in enterprise technologies, certified in latest frameworks and methodologies.',
    metrics: '20+ Years Experience'
  },
  {
    icon: FeatureIcons.quality,
    title: 'Quality Assurance',
    description: 'Rigorous testing protocols and quality control processes ensure reliable, maintainable solutions that exceed expectations.',
    metrics: '98% Success Rate'
  },
  {
    icon: FeatureIcons.support,
    title: '24/7 Support',
    description: 'Round-the-clock monitoring, support, and maintenance for mission-critical systems with dedicated response teams.',
    metrics: '<4hr Response'
  },
  {
    icon: FeatureIcons.scalable,
    title: 'Scalable Solutions',
    description: 'Future-proof architecture designed to grow with your business needs, handling increasing loads and complexity.',
    metrics: '50+ Projects'
  }
]

export default function ServicesFeaturesSection() {
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
            Our Advantage
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Why Leaders Choose Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            We deliver results that speak for themselves through proven expertise, innovative solutions, and unwavering commitment to your success.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {features.map((feature, index) => (
            <GlowCard key={feature.title} delay={index * 0.15}>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:bg-white text-white dark:text-black shadow-lg dark:shadow-glow-white transition-all duration-500 group-hover:scale-110">
                {feature.icon}
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-2 py-1 rounded-full">
                    {feature.metrics}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-white/80 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}