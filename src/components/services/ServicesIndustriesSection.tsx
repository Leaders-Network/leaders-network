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

const IndustryIcons = {
  financial: (
    <svg {...iconProps}>
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  healthcare: (
    <svg {...iconProps}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  government: (
    <svg {...iconProps}>
      <path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16" />
      <path d="M14 10h5a1 1 0 0 1 1 1v10" />
      <path d="M2 21h20" />
      <path d="M8 8h2M8 12h2M8 16h2" />
    </svg>
  ),
  telecom: (
    <svg {...iconProps}>
      <path d="M5 3a2 2 0 0 0-2 2" />
      <path d="M19 3a2 2 0 0 1 2 2" />
      <path d="M21 19a2 2 0 0 1-2 2" />
      <path d="M3 19a2 2 0 0 0 2 2" />
      <path d="M9 9h1m4 0h.01M9 12h1m4 0h.01M9 15h1m4 0h.01" />
    </svg>
  ),
  ecommerce: (
    <svg {...iconProps}>
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  ),
  manufacturing: (
    <svg {...iconProps}>
      <path d="M2 20h20" />
      <path d="M4 20V8" />
      <path d="M8 20V12" />
      <path d="M12 20V4" />
      <path d="M16 20V8" />
      <path d="M20 20V12" />
    </svg>
  ),
  education: (
    <svg {...iconProps}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  realestate: (
    <svg {...iconProps}>
      <path d="M9 21H5a2 2 0 0 1-2-2V9l9-7 9 7v10a2 2 0 0 1-2 2h-4" />
      <polyline points="9,9 9,21" />
    </svg>
  ),
}

/* ---------- Data ---------- */
const industries = [
  {
    icon: IndustryIcons.financial,
    name: 'Financial Services',
    description: 'Banking platforms, payment systems, and fintech solutions',
    projects: '50+',
    highlights: [
      'Core banking systems',
      'Payment gateway integration',
      'Financial analytics platforms',
      'Regulatory compliance solutions',
    ],
  },
  {
    icon: IndustryIcons.healthcare,
    name: 'Healthcare',
    description: 'Medical management systems and patient care platforms',
    projects: '30+',
    highlights: [
      'Electronic health records',
      'Telemedicine platforms',
      'Medical device integration',
      'HIPAA compliant solutions',
    ],
  },
  {
    icon: IndustryIcons.government,
    name: 'Government',
    description: 'Digital transformation and citizen service portals',
    projects: '40+',
    highlights: [
      'Citizen portal systems',
      'Document management',
      'E-governance platforms',
      'Security clearance systems',
    ],
  },
  {
    icon: IndustryIcons.telecom,
    name: 'Telecommunications',
    description: 'Network management and customer service solutions',
    projects: '25+',
    highlights: [
      'Network monitoring tools',
      'Customer management',
      'Billing systems',
      'Service automation',
    ],
  },
  {
    icon: IndustryIcons.ecommerce,
    name: 'E-commerce',
    description: 'Online retail platforms and marketplace solutions',
    projects: '60+',
    highlights: [
      'Custom shopping platforms',
      'Inventory management',
      'Payment integration',
      'Analytics dashboards',
    ],
  },
  {
    icon: IndustryIcons.manufacturing,
    name: 'Manufacturing',
    description: 'Industrial automation and supply chain management',
    projects: '20+',
    highlights: [
      'Production monitoring',
      'Supply chain optimization',
      'Quality control systems',
      'Inventory tracking',
    ],
  },
  {
    icon: IndustryIcons.education,
    name: 'Education',
    description: 'Learning management and institutional platforms',
    projects: '35+',
    highlights: [
      'Learning management systems',
      'Student information systems',
      'Online assessment tools',
      'Administrative platforms',
    ],
  },
  {
    icon: IndustryIcons.realestate,
    name: 'Real Estate',
    description: 'Property management and real estate platforms',
    projects: '15+',
    highlights: [
      'Property listing platforms',
      'CRM systems',
      'Virtual tour integration',
      'Document management',
    ],
  },
]

type Industry = (typeof industries)[number]

/* ---------- Glow Card (no entrance animation, so it stays smooth while moving) ---------- */
function GlowCard({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--x', `${e.clientX - r.left}px`)
    el.style.setProperty('--y', `${e.clientY - r.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className="group relative h-full overflow-hidden rounded-[2rem] border border-gray-200 dark:border-white/[0.05] bg-gradient-to-br from-white to-gray-50 dark:from-white/[0.05] dark:to-white/[0.015] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
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
      <div className="relative z-10">{children}</div>
    </div>
  )
}

/* ---------- Single industry card (shared by both carousel sets) ---------- */
function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <GlowCard>
      <div className="mb-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:bg-white text-white dark:text-black shadow-lg dark:shadow-glow-white transition-transform duration-500 group-hover:scale-110">
            {industry.icon}
          </div>
        </div>

        <h3 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
          {industry.name}
        </h3>

        <p className="text-sm text-gray-600 dark:text-white/80">
          {industry.description}
        </p>
      </div>

      {/* Divider */}
      <div className="mb-4 h-px bg-gray-300 dark:bg-white/10" />

      {/* Highlights */}
      <ul className="space-y-2">
        {industry.highlights.map((highlight) => (
          <li key={highlight} className="flex items-center gap-2">
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:bg-white">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-2 w-2 text-white dark:text-black"
              >
                <path d="m5 12.5 4.5 4.5L19 7.5" />
              </svg>
            </span>
            <span className="text-xs text-gray-600 dark:text-white/70">
              {highlight}
            </span>
          </li>
        ))}
      </ul>
    </GlowCard>
  )
}

/* ---------- Section ---------- */
export default function ServicesIndustriesSection() {
  return (
    <section className="relative scroll-mt-28 overflow-hidden bg-gray-50 dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300">
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
            Industry Expertise
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Trusted Across Industries
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            From financial institutions to government agencies, we deliver
            sector-specific solutions that meet regulatory requirements and
            drive operational excellence.
          </motion.p>
        </div>

        {/* Industries Carousel */}
        <div className="marquee-pause relative overflow-hidden py-6">
          {/* Gradient overlays for smooth fade effect */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-gray-50 dark:from-dark-950 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-gray-50 dark:from-dark-950 to-transparent" />

          {/* Track: two identical sets, moved by exactly -50% for a seamless loop */}
          <div className="animate-marquee flex w-max">
            {[0, 1].map((set) => (
              <div key={set} className="flex" aria-hidden={set === 1}>
                {industries.map((industry) => (
                  <div
                    key={`${set}-${industry.name}`}
                    className="w-[22rem] shrink-0 pr-8"
                  >
                    <IndustryCard industry={industry} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}