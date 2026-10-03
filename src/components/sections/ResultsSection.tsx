'use client'

import { useRef, type ReactNode, type MouseEvent } from 'react'
import { motion } from 'framer-motion'

const results = [
  {
    number: "500+",
    label: "Projects Delivered",
    checklist: [
      "Enterprise software solutions",
      "Government digital platforms",
      "Financial services systems",
      "Healthcare management tools"
    ]
  },
  {
    number: "98%",
    label: "Client Satisfaction",
    checklist: [
      "On-time project delivery",
      "Clear communication channels",
      "Post-launch technical support",
      "Ongoing partnership relationships"
    ]
  },
  {
    number: "19+",
    label: "Years of Excellence",
    checklist: [
      "Industry expertise & innovation",
      "Award-winning development work",
      "Global client partnerships",
      "Proven transformation methodology"
    ]
  }
]

/* Card with a glowing border that follows the mouse */
function GlowCard({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
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
      {/* Soft inner glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(350px circle at var(--x, 50%) var(--y, 50%), rgba(59,130,246,0.08), transparent 70%)',
        }}
      />
      {/* Glowing border */}
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
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

export default function ResultsSection() {
  return (
    <section
      id="results"
      className="relative scroll-mt-28 overflow-hidden bg-white dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300"
    >
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
            Results
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Trusted by Industry Leaders
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            Nearly two decades of delivering measurable results across sectors, building technology that scales with your ambitions.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3 sm:gap-8">
          {results.map((result, index) => (
            <GlowCard key={result.label} delay={index * 0.15}>
              {/* Big number + label, left aligned */}
              <div className="mb-6">
                <div className="text-6xl font-semibold leading-none tracking-tighter text-gray-900 dark:text-white sm:text-7xl transition-colors duration-300">
                  {result.number}
                </div>
                <div className="mt-2 text-lg font-medium text-gray-700 dark:text-white/90 transition-colors duration-300">
                  {result.label}
                </div>
              </div>

              {/* Divider (draws in from the left) */}
              <motion.div
                className="mb-6 h-px origin-left bg-gray-300 dark:bg-white/10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.15 + 0.4 }}
              />

              {/* Checklist */}
              <ul className="space-y-4">
                {result.checklist.map((item, checkIndex) => (
                  <motion.li
                    key={checkIndex}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15 + checkIndex * 0.1 + 0.6,
                    }}
                  >
                    {/* Blue circle with white check for light mode, white circle with dark check for dark mode */}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:bg-white text-white dark:text-black shadow-[0_0_16px_rgba(59,130,246,0.25)] dark:shadow-[0_0_16px_rgba(255,255,255,0.25)] transition-all duration-300 hover:scale-110">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3.5 w-3.5"
                      >
                        <path d="m5 12.5 4.5 4.5L19 7.5" />
                      </svg>
                    </span>
                    <span className="text-sm leading-relaxed text-gray-600 dark:text-white/80 transition-colors duration-300">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}