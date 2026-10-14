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

const processSteps = [
  {
    step: '01',
    title: 'Strategy Development',
    description: 'Comprehensive social media strategy development based on your brand, audience, and business objectives.',
    deliverables: ['Audience Analysis', 'Platform Strategy', 'Content Themes', 'KPI Definition'],
  },
  {
    step: '02',
    title: 'Content Creation',
    description: 'Engaging visual and written content creation that aligns with your brand voice and resonates with your audience.',
    deliverables: ['Content Calendar', 'Visual Assets', 'Copy & Captions', 'Hashtag Strategy'],
  },
  {
    step: '03',
    title: 'Campaign Launch',
    description: 'Strategic campaign deployment across selected platforms with targeted audience segmentation and budget optimization.',
    deliverables: ['Campaign Setup', 'Audience Targeting', 'Ad Creative', 'Budget Allocation'],
  },
  {
    step: '04',
    title: 'Monitor & Engage',
    description: 'Continuous monitoring of campaign performance with active community management and customer engagement.',
    deliverables: ['Performance Tracking', 'Community Management', 'Customer Support', 'Real-time Optimization'],
  },
  {
    step: '05',
    title: 'Optimize & Scale',
    description: 'Data-driven optimization and scaling of successful campaigns for maximum ROI and sustainable growth.',
    deliverables: ['Performance Reports', 'Optimization Plans', 'Scaling Strategies', 'ROI Analysis'],
  },
]

export default function SocialMediaProcessSection() {
  return (
    <section className="bg-gray-50 dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300">
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
            Campaign Process
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Social Media Campaign Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            Our proven 5-step process ensures successful social media campaigns that drive engagement, build brand awareness, and deliver measurable results.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <GlowCard key={step.step} delay={index * 0.15}>
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                  {/* Step Header */}
                  <div className="mb-6 flex items-start space-x-4 lg:mb-0 lg:w-80 lg:flex-col lg:space-x-0 lg:space-y-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg transition-all duration-500 group-hover:scale-110 lg:h-20 lg:w-20">
                      <span className="text-lg font-bold">{step.step}</span>
                    </div>
                    <div className="lg:text-center">
                      <div className="text-xs font-bold text-pink-600 dark:text-pink-400 uppercase tracking-wide">
                        Step {step.step}
                      </div>
                      <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300 lg:text-2xl">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-white/80 transition-colors duration-300 lg:text-base">
                      {step.description}
                    </p>

                    {/* Deliverables */}
                    <div>
                      <h4 className="mb-3 text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                        Key Deliverables
                      </h4>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className="flex items-center space-x-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-pink-500 dark:bg-white" />
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                              {deliverable}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}