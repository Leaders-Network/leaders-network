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
      className="group relative overflow-hidden rounded-[2rem] border border-gray-200 dark:border-white/[0.05] bg-gradient-to-br from-white to-gray-50 dark:from-white/[0.05] dark:to-white/[0.015] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-300"
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
  className: 'h-8 w-8',
}

const BenefitIcons = {
  speed: (
    <svg {...iconProps}>
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
    </svg>
  ),
  security: (
    <svg {...iconProps}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  collaboration: (
    <svg {...iconProps}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 11v-1a2 2 0 0 0-2-2h-2" />
      <circle cx="17" cy="15" r="4" />
    </svg>
  ),
  scalability: (
    <svg {...iconProps}>
      <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" />
      <polyline points="16,7 22,7 22,13" />
    </svg>
  ),
  efficiency: (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  ),
  quality: (
    <svg {...iconProps}>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}

const benefits = [
  {
    icon: BenefitIcons.speed,
    title: 'Faster Time to Market',
    description: 'Agile methodology and efficient processes reduce development time by up to 40% compared to traditional approaches.',
    metric: '40% Faster',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: BenefitIcons.security,
    title: 'Enhanced Security',
    description: 'Built-in security practices and regular audits ensure your application is protected against modern threats.',
    metric: '99.9% Secure',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: BenefitIcons.collaboration,
    title: 'Collaborative Approach',
    description: 'Transparent communication and regular updates keep you involved throughout the development process.',
    metric: 'Daily Updates',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: BenefitIcons.scalability,
    title: 'Scalable Solutions',
    description: 'Architecture designed to grow with your business needs and handle increasing user loads seamlessly.',
    metric: '10x Scale',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: BenefitIcons.efficiency,
    title: 'Reduced Maintenance',
    description: 'Clean code and comprehensive documentation minimize long-term maintenance costs and technical debt.',
    metric: '60% Less Maintenance',
    color: 'from-teal-500 to-teal-600'
  },
  {
    icon: BenefitIcons.quality,
    title: 'Quality Assurance',
    description: 'Comprehensive testing ensures bug-free, reliable software delivery with industry-leading quality standards.',
    metric: '99% Bug-Free',
    color: 'from-orange-500 to-orange-600'
  }
]

export default function SDLCBenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300">
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
            Why Choose Us
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Why Choose Our{' '}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              SDLC Approach
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            Our proven methodology delivers superior results through efficiency, security, and quality-focused development practices.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {benefits.map((benefit, index) => (
            <GlowCard key={benefit.title} delay={index * 0.1}>
              <div className="mb-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg transition-all duration-500 group-hover:scale-110">
                    {benefit.icon}
                  </div>
                  <div className={`rounded-full bg-gradient-to-r ${benefit.color} px-3 py-1 text-xs font-medium text-white`}>
                    {benefit.metric}
                  </div>
                </div>
                
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-gray-600 dark:text-white/80 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="rounded-[2rem] border border-gray-200 dark:border-white/[0.05] bg-gradient-to-br from-white to-gray-50 dark:from-white/[0.05] dark:to-white/[0.015] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
              Proven Results Across Industries
            </h3>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl transition-colors duration-300">
                  200+
                </div>
                <div className="mt-1 text-sm font-medium text-gray-600 dark:text-white/70 transition-colors duration-300">
                  Projects Delivered
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl transition-colors duration-300">
                  98%
                </div>
                <div className="mt-1 text-sm font-medium text-gray-600 dark:text-white/70 transition-colors duration-300">
                  On-Time Delivery
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl transition-colors duration-300">
                  95%
                </div>
                <div className="mt-1 text-sm font-medium text-gray-600 dark:text-white/70 transition-colors duration-300">
                  Client Satisfaction
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl transition-colors duration-300">
                  5+
                </div>
                <div className="mt-1 text-sm font-medium text-gray-600 dark:text-white/70 transition-colors duration-300">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}