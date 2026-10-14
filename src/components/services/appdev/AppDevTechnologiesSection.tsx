'use client'

import { motion } from 'framer-motion'
import { useRef, type ReactNode, type MouseEvent } from 'react'

/* ---------- Custom SVG Icons for Mobile Technologies ---------- */
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
  swift: (
    <svg {...iconProps}>
      <path d="M4 12h16m-8-8v16" />
      <path d="M8 8l4-4 4 4M16 16l-4 4-4-4" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  kotlin: (
    <svg {...iconProps}>
      <polygon points="12,2 22,12 12,22 2,12" />
      <path d="M7.5 7.5L16.5 16.5M16.5 7.5L7.5 16.5" />
    </svg>
  ),
  reactNative: (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="2" />
      <path d="M20.2 16.5c1.5-2.6 1.5-5.4 0-8s-4.3-4.2-7.2-4.2c-2.9 0-5.7 1.6-7.2 4.2s-1.5 5.4 0 8 4.3 4.2 7.2 4.2c2.9 0 5.7-1.6 7.2-4.2z" />
      <path d="M3.8 7.5c-1.5 2.6-1.5 5.4 0 8s4.3 4.2 7.2 4.2c2.9 0 5.7-1.6 7.2-4.2s1.5-5.4 0-8-4.3-4.2-7.2-4.2c-2.9 0-5.7 1.6-7.2 4.2z" />
    </svg>
  ),
  flutter: (
    <svg {...iconProps}>
      <path d="M14 2L4 12l4 4 10-10z" />
      <path d="M14 22L4 12l4-4 6 6v8z" />
      <path d="M8 16l6 6" />
    </svg>
  ),
  firebase: (
    <svg {...iconProps}>
      <path d="M5.5 8.5L9 12l-3.5-3.5L2 12l3.5-3.5z" />
      <path d="M9 12l6.5 6.5L22 12l-6.5-6.5z" />
      <path d="M5.5 8.5l10 10" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  nodejs: (
    <svg {...iconProps}>
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  mongodb: (
    <svg {...iconProps}>
      <path d="M18.5 9.51a8.5 8.5 0 0 1-7 8.98c-.4-.02-.78-.06-1.13-.12L9.5 21l.37-2.63c-.35.06-.72.1-1.13.12a8.5 8.5 0 0 1-7-8.98A8.52 8.52 0 0 1 12 1.5a8.52 8.52 0 0 1 6.5 8.01z" />
      <path d="M12 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
    </svg>
  ),
  pushNotifications: (
    <svg {...iconProps}>
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      <circle cx="18" cy="8" r="3" fill="currentColor" />
    </svg>
  )
}

/* ---------- Data ---------- */
const technologies = [
  {
    icon: TechIcons.swift,
    name: 'iOS Swift',
    description: 'Native iOS development with Swift and SwiftUI',
    category: 'Native iOS',
    proficiency: 'Expert',
    projects: 40
  },
  {
    icon: TechIcons.kotlin,
    name: 'Android Kotlin',
    description: 'Modern Android apps with Kotlin and Jetpack Compose',
    category: 'Native Android',
    proficiency: 'Expert',
    projects: 35
  },
  {
    icon: TechIcons.reactNative,
    name: 'React Native',
    description: 'Cross-platform mobile development',
    category: 'Cross-Platform',
    proficiency: 'Advanced',
    projects: 45
  },
  {
    icon: TechIcons.flutter,
    name: 'Flutter',
    description: 'Google\'s UI toolkit for beautiful apps',
    category: 'Cross-Platform',
    proficiency: 'Advanced',
    projects: 25
  },
  {
    icon: TechIcons.firebase,
    name: 'Firebase',
    description: 'Backend services, authentication, and analytics',
    category: 'Backend',
    proficiency: 'Expert',
    projects: 60
  },
  {
    icon: TechIcons.nodejs,
    name: 'Node.js API',
    description: 'Scalable backend APIs for mobile apps',
    category: 'Backend',
    proficiency: 'Expert',
    projects: 55
  },
  {
    icon: TechIcons.mongodb,
    name: 'MongoDB',
    description: 'NoSQL database for mobile app data',
    category: 'Database',
    proficiency: 'Advanced',
    projects: 42
  },
  {
    icon: TechIcons.pushNotifications,
    name: 'Push Notifications',
    description: 'Real-time messaging and engagement',
    category: 'Integration',
    proficiency: 'Expert',
    projects: 50
  }
]

type Technology = (typeof technologies)[number]

/* ---------- Glow Card (no entrance animation for smooth scrolling) ---------- */
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
            'radial-gradient(350px circle at var(--x, 50%) var(--y, 50%), rgba(249,115,22,0.08), transparent 70%)',
        }}
      />

      {/* Glowing border that follows the mouse */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          padding: 1.5,
          background:
            'radial-gradient(260px circle at var(--x, 50%) var(--y, 50%), rgba(249,115,22,0.4), rgba(249,115,22,0.1) 45%, transparent 70%)',
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
      <div className="mb-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg transition-transform duration-500 group-hover:scale-110">
            {technology.icon}
          </div>
          <div className="rounded-full bg-orange-100 dark:bg-orange-900/30 px-2 py-1 text-xs font-medium text-orange-700 dark:text-orange-300">
            {technology.proficiency}
          </div>
        </div>

        <h3 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
          {technology.name}
        </h3>

        <p className="mb-2 text-sm text-gray-600 dark:text-white/80">
          {technology.description}
        </p>

        <div className="mb-3 text-xs font-medium text-indigo-600 dark:text-indigo-400">
          {technology.category}
        </div>
      </div>

      {/* Divider */}
      <div className="mb-4 h-px bg-gray-300 dark:bg-white/10" />

      {/* Project count */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500 dark:text-white/60">
          Projects delivered
        </span>
        <span className="text-sm font-bold text-gray-900 dark:text-white">
          {technology.projects}+
        </span>
      </div>
    </GlowCard>
  )
}

/* ---------- Section ---------- */
export default function AppDevTechnologiesSection() {
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
            Mobile Technologies
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Cutting-Edge Mobile Stack
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            We leverage the latest mobile development technologies and frameworks to build fast, 
            scalable, and feature-rich applications that deliver exceptional user experiences.
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
                    className="w-[20rem] shrink-0 pr-8"
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
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">8+</div>
            <div className="text-sm text-gray-600 dark:text-white/70">Core Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">80+</div>
            <div className="text-sm text-gray-600 dark:text-white/70">Apps Built</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">5+</div>
            <div className="text-sm text-gray-600 dark:text-white/70">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">100%</div>
            <div className="text-sm text-gray-600 dark:text-white/70">Success Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}