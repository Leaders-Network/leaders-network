'use client'

import { motion } from 'framer-motion'
import { useRef, type ReactNode, type MouseEvent } from 'react'

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
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(350px circle at var(--x, 50%) var(--y, 50%), rgba(236,72,153,0.08), transparent 70%)',
        }}
      />
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
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

const platforms = [
  {
    id: 'facebook',
    name: 'Facebook',
    description: 'Reach billions of users with targeted advertising campaigns, community building, and business presence optimization.',
    color: 'from-blue-500 to-blue-600',
    audience: '2.9B+ Users',
    bestFor: 'Brand Awareness, Community Building',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    description: 'Visual storytelling and brand showcasing through photos, videos, stories, and reels for maximum engagement.',
    color: 'from-pink-500 to-purple-600',
    audience: '2B+ Users',
    bestFor: 'Visual Content, Young Demographics',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    description: 'Professional networking and B2B marketing through thought leadership, industry insights, and business connections.',
    color: 'from-blue-600 to-blue-700',
    audience: '900M+ Professionals',
    bestFor: 'B2B Marketing, Lead Generation',
  },
  {
    id: 'twitter',
    name: 'Twitter/X',
    description: 'Real-time conversations, trending topics, and customer service through concise, engaging content.',
    color: 'from-gray-700 to-gray-900',
    audience: '450M+ Users',
    bestFor: 'Real-time Engagement, News',
  },
]

export default function SocialMediaPlatformsSection() {
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
            Social Media Platforms
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Multi-Platform Expertise
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            We leverage the unique strengths of each social media platform to maximize your brand's reach and engagement across diverse audiences.
          </motion.p>
        </div>

        {/* Platforms Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {platforms.map((platform, index) => (
            <GlowCard key={platform.id} delay={index * 0.1}>
              <div className="p-8">
                {/* Platform Header */}
                <div className="mb-6 flex items-start space-x-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${platform.color} text-white shadow-lg transition-all duration-500 group-hover:scale-110`}>
                    <span className="text-sm font-bold">{platform.name.charAt(0)}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
                      {platform.name}
                    </h3>
                    <div className="text-sm font-medium text-pink-600 dark:text-pink-400">
                      {platform.audience}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-white/80 transition-colors duration-300">
                  {platform.description}
                </p>

                {/* Best For */}
                <div className="rounded-xl bg-gray-50 dark:bg-white/[0.05] p-4">
                  <h4 className="mb-2 text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    Best For
                  </h4>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {platform.bestFor}
                  </p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}