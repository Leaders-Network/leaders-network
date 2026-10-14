'use client'

import { motion } from 'framer-motion'
import { useRef, type ReactNode, type MouseEvent } from 'react'

/* ---------- Custom SVG Icons (Blue Theme) ---------- */
const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'h-6 w-6',
}

const ExpertiseIcons = {
  architecture: (
    <svg {...iconProps}>
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  ),
  transformation: (
    <svg {...iconProps}>
      <path d="M14.5 4h-5L7 7l4.5 7.5L16 7z" />
      <path d="M13 17l3-3 3 3" />
      <path d="M11 17l-3-3-3 3" />
    </svg>
  ),
  assessment: (
    <svg {...iconProps}>
      <path d="M9 11H5a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h4" />
      <path d="M20 16v-3a2 2 0 0 0-2-2h-4" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 8v4l2 2" />
    </svg>
  ),
  governance: (
    <svg {...iconProps}>
      <path d="M3 3v18h18" />
      <path d="M7 12l4-4 4 4 4-4" />
      <circle cx="7" cy="12" r="1" />
      <circle cx="11" cy="8" r="1" />
      <circle cx="15" cy="12" r="1" />
      <circle cx="19" cy="8" r="1" />
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

const expertiseAreas = [
  {
    id: 'architecture',
    title: 'Enterprise Architecture',
    description: 'Design scalable, future-proof IT architectures that align technology with business strategy and support long-term growth.',
    icon: ExpertiseIcons.architecture,
    capabilities: ['System Design', 'Technology Selection', 'Architecture Patterns', 'Performance Optimization'],
  },
  {
    id: 'transformation',
    title: 'Digital Transformation',
    description: 'Guide organizations through complete digital makeovers, from legacy system modernization to cloud-first strategies.',
    icon: ExpertiseIcons.transformation,
    capabilities: ['Process Automation', 'Cloud Adoption', 'Legacy Migration', 'Change Management'],
  },
  {
    id: 'assessment',
    title: 'Technology Assessment',
    description: 'Comprehensive evaluation of current IT infrastructure, identifying optimization opportunities and strategic improvements.',
    icon: ExpertiseIcons.assessment,
    capabilities: ['Infrastructure Audit', 'Security Review', 'Performance Analysis', 'Cost Optimization'],
  },
  {
    id: 'governance',
    title: 'IT Governance',
    description: 'Establish robust governance frameworks that ensure IT investments deliver measurable business value and compliance.',
    icon: ExpertiseIcons.governance,
    capabilities: ['Policy Development', 'Risk Management', 'Compliance Framework', 'KPI Monitoring'],
  },
]

export default function ITConsultingExpertiseSection() {
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
            Our Expertise
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Core Competencies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            Deep technical expertise across all aspects of enterprise IT, from strategic planning to hands-on implementation and ongoing optimization.
          </motion.p>
        </div>

        {/* Expertise Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {expertiseAreas.map((area, index) => (
            <GlowCard key={area.id} delay={index * 0.1}>
              <div className="p-8">
                {/* Header */}
                <div className="mb-6 flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transition-all duration-500 group-hover:scale-110">
                    {area.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
                      {area.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-white/80 transition-colors duration-300">
                  {area.description}
                </p>

                {/* Capabilities */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    Key Capabilities
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {area.capabilities.map((capability, capabilityIndex) => (
                      <div key={capabilityIndex} className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-white" />
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                          {capability}
                        </span>
                      </div>
                    ))}
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