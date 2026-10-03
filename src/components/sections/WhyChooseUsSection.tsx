'use client'
import { motion } from 'framer-motion'
import { useRef, type ReactNode, type MouseEvent } from 'react'

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'h-6 w-6',
}

const reasons: { icon: ReactNode; title: string; description: string }[] = [
  {
    // building
    icon: (
      <svg {...iconProps}>
        <path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16" />
        <path d="M14 10h5a1 1 0 0 1 1 1v10" />
        <path d="M2 21h20" />
        <path d="M8 8h2M8 12h2M8 16h2" />
      </svg>
    ),
    title: 'Enterprise Experience',
    description:
      'Nearly two decades serving corporate bodies, government agencies, and financial institutions across multiple continents with proven methodologies.',
  },
  {
    // bolt
    icon: (
      <svg {...iconProps}>
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
      </svg>
    ),
    title: 'Rapid Delivery',
    description:
      'From concept to deployment in record time without sacrificing quality, using agile methodologies and modern development practices.',
  },
  {
    // shield
    icon: (
      <svg {...iconProps}>
        <path d="M12 3 4 6v6c0 4.5 3.2 8 8 9 4.8-1 8-4.5 8-9V6l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: 'Secure & Reliable',
    description:
      'Enterprise-grade security, 99.9% uptime guarantee, and comprehensive compliance with international standards and regulations.',
  },
]

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
      className="group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[2rem] border border-gray-200 dark:border-white/[0.05] bg-gradient-to-br from-white to-gray-50 dark:from-white/[0.05] dark:to-white/[0.015] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] sm:min-h-[360px] transition-all duration-300">
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

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="relative scroll-mt-28 overflow-hidden bg-white dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300">
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
            Our Promise
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

       {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3 sm:gap-8">
        {reasons.map((reason, index) => (
          <GlowCard key={reason.title} delay={index * 0.15}>
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:bg-white text-white dark:text-black shadow-lg dark:shadow-glow-white transition-all duration-500 group-hover:scale-110">
              {reason.icon}
            </div>

            <div>
              <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-white/80 transition-colors duration-300">
                {reason.description}
              </p>
            </div>
          </GlowCard>
        ))}
      </div>
      </div>
    </section>
  )
}