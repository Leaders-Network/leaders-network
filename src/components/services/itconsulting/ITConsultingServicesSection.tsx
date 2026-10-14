'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRef, type ReactNode, type MouseEvent } from 'react'

/* ---------- Custom SVG Icons (Blue Theme) ---------- */
const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'h-8 w-8',
}

const ITServiceIcons = {
  strategy: (
    <svg {...iconProps}>
      <path d="M9 12l2 2 4-4" />
      <path d="M21 12c.5 2.5-.8 4.5-3 5.5-2.1 1-4.8.5-6.5-1.5L9 12l2.5-4c1.7-2 4.4-2.5 6.5-1.5 2.2 1 3.5 3 3 5.5z" />
      <path d="M3 12c-.5-2.5.8-4.5 3-5.5 2.1-1 4.8-.5 6.5 1.5l2.5 4-2.5 4c-1.7 2-4.4 2.5-6.5 1.5-2.2-1-3.5-3-3-5.5z" />
    </svg>
  ),
  cloud: (
    <svg {...iconProps}>
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      <path d="M12 13v8" />
      <path d="m8 17 4-4 4 4" />
    </svg>
  ),
  integration: (
    <svg {...iconProps}>
      <path d="M8 2v4l-4 4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8l-4-4V2" />
      <path d="M12 6v10" />
      <path d="M8 10h8" />
      <circle cx="12" cy="14" r="2" />
    </svg>
  ),
  security: (
    <svg {...iconProps}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
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

const itServices = [
  {
    id: 'strategy',
    title: 'IT Strategy & Planning',
    description: 'Comprehensive technology roadmaps aligned with your business objectives. We assess current infrastructure and design strategic plans for sustainable growth.',
    icon: ITServiceIcons.strategy,
    features: ['Technology Assessment', 'Digital Transformation', 'Budget Planning', 'Risk Management'],
  },
  {
    id: 'cloud',
    title: 'Cloud Migration & Management',
    description: 'Seamless cloud adoption with multi-cloud strategies. Optimize performance, reduce costs, and enhance scalability through expert cloud architecture.',
    icon: ITServiceIcons.cloud,
    features: ['AWS/Azure Migration', 'Hybrid Cloud Setup', 'Cost Optimization', 'Performance Monitoring'],
  },
  {
    id: 'integration',
    title: 'System Integration',
    description: 'Connect disparate systems for unified operations. Legacy modernization, API development, and seamless data flow across your technology ecosystem.',
    icon: ITServiceIcons.integration,
    features: ['Legacy Modernization', 'API Development', 'Data Migration', 'Process Automation'],
  },
  {
    id: 'security',
    title: 'Security Assessment',
    description: 'Comprehensive security audits and compliance frameworks. Protect your assets with advanced threat detection and incident response strategies.',
    icon: ITServiceIcons.security,
    features: ['Vulnerability Testing', 'Compliance Audits', 'Incident Response', 'Security Training'],
  },
]

export default function ITConsultingServicesSection() {
  return (
    <section id="it-services" className="scroll-mt-28 bg-gray-50 dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300">
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
            IT Consulting Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Strategic IT Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            Transform your technology infrastructure with expert consulting services designed to optimize operations, enhance security, and drive digital innovation.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {itServices.map((service, index) => (
            <GlowCard key={service.id} delay={index * 0.1}>
              <div className="p-8">
                {/* Header */}
                <div className="mb-6 flex items-start space-x-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:bg-white text-white dark:text-black shadow-lg dark:shadow-glow-white transition-all duration-500 group-hover:scale-110">
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
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-white" />
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
                    className="flex-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30"
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
              Ready to Optimize Your IT Infrastructure?
            </h3>
            <p className="mb-8 text-base text-gray-600 dark:text-white/80 transition-colors duration-300">
              Let's discuss how our IT consulting services can transform your technology strategy and drive business growth.
            </p>
            <Link
              href="/contactus"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30"
            >
              Schedule a Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}