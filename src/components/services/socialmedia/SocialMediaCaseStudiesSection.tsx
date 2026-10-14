'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
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

const caseStudies = [
  {
    id: 'fashion-brand',
    client: 'Fashion E-commerce Brand',
    industry: 'Fashion & Lifestyle',
    challenge: 'Low brand awareness and poor engagement rates across social media platforms with declining organic reach.',
    solution: 'Multi-platform campaign strategy with influencer partnerships, user-generated content, and targeted advertising.',
    results: [
      '340% increase in Instagram followers',
      '280% boost in engagement rates',
      '150% growth in website traffic from social',
      '420% increase in social media ROI'
    ],
    testimonial: "Our social media presence completely transformed. Sales from social platforms increased by 300% in just 6 months.",
    clientRole: 'Marketing Director, Fashion Brand'
  },
  {
    id: 'saas-startup',
    client: 'B2B SaaS Startup',
    industry: 'Technology',
    challenge: 'Difficulty reaching decision-makers and building credibility in a competitive B2B software market.',
    solution: 'LinkedIn-focused strategy with thought leadership content, webinar campaigns, and executive personal branding.',
    results: [
      '200% increase in qualified leads',
      '85% improvement in lead quality',
      '160% growth in LinkedIn followers',
      '300% boost in demo requests'
    ],
    testimonial: "LinkedIn became our primary lead generation channel. The quality of leads and conversion rates exceeded all expectations.",
    clientRole: 'VP of Marketing, SaaS Startup'
  },
  {
    id: 'restaurant-chain',
    client: 'Restaurant Chain',
    industry: 'Food & Beverage',
    challenge: 'Needed to drive foot traffic and online orders while building local community engagement across multiple locations.',
    solution: 'Location-based social campaigns with food photography, local influencers, and community event promotion.',
    results: [
      '65% increase in foot traffic',
      '180% growth in online orders',
      '90% boost in local engagement',
      '45% improvement in customer retention'
    ],
    testimonial: "Social media became our most effective marketing channel. Every location saw significant increases in both dine-in and delivery orders.",
    clientRole: 'Marketing Manager, Restaurant Chain'
  },
]

export default function SocialMediaCaseStudiesSection() {
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
            Campaign Success Stories
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Social Media Case Studies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            Real success stories showcasing how our social media campaigns have driven brand awareness, engagement, and measurable business results.
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
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg">
                        <span className="text-lg font-bold">{study.client.charAt(0)}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
                          {study.client}
                        </h3>
                        <div className="text-sm font-medium text-pink-600 dark:text-pink-400">
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
                            <div className="h-1.5 w-1.5 rounded-full bg-pink-500 dark:bg-white" />
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
                      <div className="text-xs font-medium text-pink-600 dark:text-pink-400">
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
              Ready to Transform Your Social Media Presence?
            </h3>
            <p className="mb-8 text-base text-gray-600 dark:text-white/80 transition-colors duration-300">
              Join these successful brands that have achieved remarkable results with our social media expertise.
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