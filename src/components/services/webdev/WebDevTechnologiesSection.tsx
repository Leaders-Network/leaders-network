'use client'

import { motion } from 'framer-motion'
import { useRef, type ReactNode, type MouseEvent } from 'react'

/* ---------- Custom SVG Icons for Web Technologies ---------- */
const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'h-6 w-6',
}

const TechIcons = {
  html5: (
    <svg {...iconProps}>
      <path d="m2 3 1.5 17L12 22l8.5-2L22 3H2Z" />
      <path d="M8 12h8" />
      <path d="M10 16.5 12 14l2 2.5" />
      <path d="M7 7h10" />
    </svg>
  ),
  css3: (
    <svg {...iconProps}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <path d="M9 9h.01" />
      <path d="M15 9h.01" />
    </svg>
  ),
  javascript: (
    <svg {...iconProps}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  react: (
    <svg {...iconProps}>
      <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M12 1v6m0 6v6" />
      <path d="m3 7 4.5-4.5m9 9L21 17M3 17l4.5-4.5m9-9L21 7" />
    </svg>
  ),
  nextjs: (
    <svg {...iconProps}>
      <path d="M9 12l2 2 4-4" />
      <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
    </svg>
  ),
  nodejs: (
    <svg {...iconProps}>
      <path d="M12 2L3 7l9 5 9-5-9-5z" />
      <path d="M3 17l9 5 9-5" />
      <path d="M3 12l9 5 9-5" />
    </svg>
  ),
  mongodb: (
    <svg {...iconProps}>
      <path d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7" />
      <ellipse cx="12" cy="7" rx="8" ry="3" />
    </svg>
  ),
  postgresql: (
    <svg {...iconProps}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
    </svg>
  )
}

/* ---------- Data ---------- */
const technologies = [
  {
    icon: TechIcons.html5,
    name: 'HTML5',
    description: 'Modern semantic markup and structure',
    category: 'Frontend',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: TechIcons.css3,
    name: 'CSS3',
    description: 'Advanced styling and animations',
    category: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: TechIcons.javascript,
    name: 'JavaScript',
    description: 'Dynamic and interactive functionality',
    category: 'Frontend',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: TechIcons.react,
    name: 'React',
    description: 'Component-based UI development',
    category: 'Frontend',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: TechIcons.nextjs,
    name: 'Next.js',
    description: 'Full-stack React framework',
    category: 'Framework',
    color: 'from-gray-800 to-black',
  },
  {
    icon: TechIcons.nodejs,
    name: 'Node.js',
    description: 'Server-side JavaScript runtime',
    category: 'Backend',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: TechIcons.mongodb,
    name: 'MongoDB',
    description: 'NoSQL document database',
    category: 'Database',
    color: 'from-green-600 to-green-700',
  },
  {
    icon: TechIcons.postgresql,
    name: 'PostgreSQL',
    description: 'Advanced relational database',
    category: 'Database',
    color: 'from-blue-600 to-indigo-600',
  },
]

type Technology = (typeof technologies)[number]

/* ---------- Glow Card (no entrance animation for smooth carousel) ---------- */
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

/* ---------- Single technology card ---------- */
function TechnologyCard({ technology }: { technology: Technology }) {
  return (
    <GlowCard>
      <div className="flex h-full flex-col">
        <div className="mb-4">
          <div className="mb-3 flex items-center justify-between">
            <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${technology.color} text-white shadow-lg transition-transform duration-500 group-hover:scale-110`}>
              {technology.icon}
            </div>
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-2 py-1 rounded-full">
              {technology.category}
            </span>
          </div>

          <h3 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            {technology.name}
          </h3>

          <p className="text-sm text-gray-600 dark:text-white/80">
            {technology.description}
          </p>
        </div>
      </div>
    </GlowCard>
  )
}

export default function WebDevTechnologiesSection() {
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
            Technology Stack
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Modern Web Technologies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            We use the latest and most reliable technologies to build fast, scalable, and maintainable web applications that stand the test of time.
          </motion.p>
        </div>

        {/* Technologies Carousel */}
        <div className="marquee-pause relative overflow-hidden py-6">
          {/* Gradient overlays for smooth fade effect */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-gray-50 dark:from-dark-950 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-gray-50 dark:from-dark-950 to-transparent" />

          {/* Track: two identical sets for seamless loop */}
          <div className="animate-marquee-slow flex w-max">
            {[0, 1].map((set) => (
              <div key={set} className="flex" aria-hidden={set === 1}>
                {technologies.map((technology) => (
                  <div
                    key={`${set}-${technology.name}`}
                    className="w-[18rem] shrink-0 pr-6"
                  >
                    <TechnologyCard technology={technology} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                  8+
                </div>
                <div className="mt-1 text-sm text-gray-600 dark:text-white/70">
                  Core Technologies
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                  99%
                </div>
                <div className="mt-1 text-sm text-gray-600 dark:text-white/70">
                  Performance Score
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                  24/7
                </div>
                <div className="mt-1 text-sm text-gray-600 dark:text-white/70">
                  Uptime Monitoring
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                  5+
                </div>
                <div className="mt-1 text-sm text-gray-600 dark:text-white/70">
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