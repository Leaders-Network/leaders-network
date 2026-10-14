'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRef, type ReactNode, type MouseEvent } from 'react'

/* ---------- Custom SVG Icons (Pink/Purple Theme) ---------- */
const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'h-8 w-8',
}

const SocialServiceIcons = {
  campaign: (
    <svg {...iconProps}>
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  ),
  content: (
    <svg {...iconProps}>
      <path d="M14.5 4h-5L7 7l4.5 7.5L16 7z" />
      <path d="M13 17l3-3 3 3" />
      <path d="M11 17l-3-3-3 3" />
    </svg>
  ),
  analytics: (
    <svg {...iconProps}>
      <path d="M3 3v18h18" />
      <path d="M7 12l4-4 4 4 4-4" />
      <circle cx="7" cy="12" r="1" />
      <circle cx="11" cy="8" r="1" />
      <circle cx="15" cy="12" r="1" />
      <circle cx="19" cy="8" r="1" />
    </svg>
  ),
  influencer: (
    <svg {...iconProps}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
}

/* ---------- Glow Card (Pink/Purple Theme) ---------- */
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
      {/* Pink/Purple-themed inner glow that follows the mouse */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(350px circle at var(--x, 50%) var(--y, 50%), rgba(236,72,153,0.08), transparent 70%)',
        }}
      />

      {/* Pink/Purple-themed glowing border that follows the mouse */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          padding: 1.5,
          background:
            'radial-gradient(260px circle at var(--x, 50%) var(--y, 50%), rgba(236,72,153,0.4), rgba(236,72,153,0.1) 45%, transparent 70%)',
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

const socialServices = [
  {
    id: 'campaign',
    title: 'Campaign Management',
    description: 'End-to-end social media campaign management across all major platforms. Strategic planning, execution, and optimization for maximum ROI.',
    icon: SocialServiceIcons.campaign,
    features: ['Multi-platform Setup', 'Audience Targeting', 'Budget Optimization', 'Performance Tracking'],
  },
  {
    id: 'content',
    title: 'Content Strategy',
    description: 'Creative content development that resonates with your audience. From visual design to copywriting, we create engaging content that drives action.',
    icon: SocialServiceIcons.content,
    features: ['Content Calendar', 'Visual Design', 'Copywriting', 'Brand Voice Development'],
  },
  {
    id: 'analytics',
    title: 'Analytics & Reporting',
    description: 'Comprehensive analytics and insights to measure campaign performance. Data-driven reporting with actionable recommendations.',
    icon: SocialServiceIcons.analytics,
    features: ['Performance Metrics', 'ROI Analysis', 'Audience Insights', 'Custom Reports'],
  },
  {
    id: 'influencer',
    title: 'Influencer Marketing',
    description: 'Strategic partnerships with influencers to amplify your brand reach. From micro-influencers to celebrity endorsements.',
    icon: SocialServiceIcons.influencer,
    features: ['Influencer Outreach', 'Campaign Coordination', 'Content Collaboration', 'Performance Measurement'],
  },
]

export default function SocialMediaServicesSection() {
  return (
    <section id="social-services" className="scroll-mt-28 bg-gray-50 dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300">
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
            Social Media Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Social Media Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            Comprehensive social media marketing services designed to build brand awareness, drive engagement, and convert followers into loyal customers.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {socialServices.map((service, index) => (
            <GlowCard key={service.id} delay={index * 0.1}>
              <div className="p-8">
                {/* Header */}
                <div className="mb-6 flex items-start space-x-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 dark:bg-white text-white dark:text-black shadow-lg dark:shadow-glow-white transition-all duration-500 group-hover:scale-110">
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
                      <div className="h-1.5 w-1.5 rounded-full bg-pink-500 dark:bg-white" />
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
                    className="flex-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/25 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/30"
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
              Ready to Amplify Your Social Presence?
            </h3>
            <p className="mb-8 text-base text-gray-600 dark:text-white/80 transition-colors duration-300">
              Let's create engaging social media campaigns that build your brand and drive meaningful results.
            </p>
            <Link
              href="/contactus"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30"
            >
              Launch Your Campaign
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}