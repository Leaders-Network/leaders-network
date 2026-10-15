'use client'

import { motion } from 'framer-motion'
import { useRef, type ReactNode, type MouseEvent } from 'react'

/* ---------- Custom SVG Icons for SDLC Technologies ---------- */
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
  vue: (
    <svg {...iconProps}>
      <path d="M12 2L2 7l10 5L22 7z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M12 12l0 10" />
    </svg>
  ),
  angular: (
    <svg {...iconProps}>
      <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" />
      <line x1="12" y1="2" x2="12" y2="22" />
      <path d="m2 8.5 10 5.5m0-5.5 10 5.5" />
    </svg>
  ),
  typescript: (
    <svg {...iconProps}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M8 8h8" />
      <path d="M8 12h8" />
      <path d="M8 16h5" />
    </svg>
  ),
  tailwind: (
    <svg {...iconProps}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <path d="M9 9h.01" />
      <path d="M15 9h.01" />
    </svg>
  ),
  nodejs: (
    <svg {...iconProps}>
      <path d="M12 2L3 7l9 5 9-5-9-5z" />
      <path d="M3 17l9 5 9-5" />
      <path d="M3 12l9 5 9-5" />
    </svg>
  ),
  python: (
    <svg {...iconProps}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z" />
      <path d="M8 9h.01" />
      <path d="M16 9h.01" />
    </svg>
  ),
  java: (
    <svg {...iconProps}>
      <path d="M10 2v20" />
      <path d="M14 2v20" />
      <path d="M4 7h16" />
      <path d="M4 17h16" />
      <path d="M2 12h20" />
    </svg>
  ),
  dotnet: (
    <svg {...iconProps}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 1-.5-2.065L18 6h.01" />
    </svg>
  ),
  php: (
    <svg {...iconProps}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M7 12h10" />
      <path d="M12 7v10" />
    </svg>
  ),
  go: (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v6m0 6v6" />
      <path d="m3 7 4.5-4.5m9 9L21 17M3 17l4.5-4.5m9-9L21 7" />
    </svg>
  ),
  postgresql: (
    <svg {...iconProps}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
    </svg>
  ),
  mongodb: (
    <svg {...iconProps}>
      <path d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7" />
      <ellipse cx="12" cy="7" rx="8" ry="3" />
    </svg>
  ),
  mysql: (
    <svg {...iconProps}>
      <path d="M5 12h14" />
      <path d="M12 5v14" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
  redis: (
    <svg {...iconProps}>
      <path d="M3 7v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2z" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  ),
  aws: (
    <svg {...iconProps}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91-6.91a6 6 0 0 1 7.94-7.94l3.77 3.77z" />
    </svg>
  ),
  gcp: (
    <svg {...iconProps}>
      <path d="M12 2L2 7l10 5L22 7z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M12 12l0 10" />
    </svg>
  ),
  azure: (
    <svg {...iconProps}>
      <path d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7" />
      <ellipse cx="12" cy="7" rx="8" ry="3" />
    </svg>
  ),
  docker: (
    <svg {...iconProps}>
      <path d="M22 12.5c0-1.5-.5-3-1.5-4.5l-1 .5c.5 1 1 2.5 1 4s-.5 3-1 4l1 .5c1-1.5 1.5-3 1.5-4.5z" />
      <path d="M17 12.5c0-1-.5-2-1-3l-1 .5c.5.5 1 1.5 1 2.5s-.5 2-1 2.5l1 .5c.5-1 1-2 1-3z" />
      <circle cx="12" cy="12.5" r="1" />
    </svg>
  ),
}

/* ---------- Data ---------- */
const technologies = [
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
    icon: TechIcons.vue,
    name: 'Vue.js',
    description: 'Progressive JavaScript framework',
    category: 'Frontend',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: TechIcons.angular,
    name: 'Angular',
    description: 'Enterprise web applications',
    category: 'Frontend',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: TechIcons.typescript,
    name: 'TypeScript',
    description: 'Type-safe JavaScript',
    category: 'Language',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: TechIcons.tailwind,
    name: 'Tailwind CSS',
    description: 'Utility-first CSS framework',
    category: 'Styling',
    color: 'from-cyan-400 to-teal-500',
  },
  {
    icon: TechIcons.nodejs,
    name: 'Node.js',
    description: 'Server-side JavaScript runtime',
    category: 'Backend',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: TechIcons.python,
    name: 'Python',
    description: 'Versatile programming language',
    category: 'Language',
    color: 'from-blue-500 to-yellow-400',
  },
  {
    icon: TechIcons.java,
    name: 'Java',
    description: 'Enterprise-grade development',
    category: 'Language',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: TechIcons.dotnet,
    name: '.NET',
    description: 'Microsoft development platform',
    category: 'Framework',
    color: 'from-purple-500 to-blue-600',
  },
  {
    icon: TechIcons.php,
    name: 'PHP',
    description: 'Web development language',
    category: 'Language',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: TechIcons.go,
    name: 'Go',
    description: 'High-performance backend',
    category: 'Language',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: TechIcons.postgresql,
    name: 'PostgreSQL',
    description: 'Advanced relational database',
    category: 'Database',
    color: 'from-blue-600 to-indigo-600',
  },
  {
    icon: TechIcons.mongodb,
    name: 'MongoDB',
    description: 'NoSQL document database',
    category: 'Database',
    color: 'from-green-600 to-green-700',
  },
  {
    icon: TechIcons.mysql,
    name: 'MySQL',
    description: 'Popular relational database',
    category: 'Database',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: TechIcons.redis,
    name: 'Redis',
    description: 'In-memory data store',
    category: 'Database',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: TechIcons.aws,
    name: 'AWS',
    description: 'Amazon Web Services',
    category: 'Cloud',
    color: 'from-orange-400 to-orange-500',
  },
  {
    icon: TechIcons.gcp,
    name: 'Google Cloud',
    description: 'Google Cloud Platform',
    category: 'Cloud',
    color: 'from-blue-500 to-green-500',
  },
  {
    icon: TechIcons.azure,
    name: 'Microsoft Azure',
    description: 'Microsoft cloud services',
    category: 'Cloud',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: TechIcons.docker,
    name: 'Docker',
    description: 'Containerization platform',
    category: 'DevOps',
    color: 'from-blue-400 to-blue-500',
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
            'radial-gradient(350px circle at var(--x, 50%) var(--y, 50%), rgba(234,88,12,0.08), transparent 70%)',
        }}
      />

      {/* Glowing border that follows the mouse */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          padding: 1.5,
          background:
            'radial-gradient(260px circle at var(--x, 50%) var(--y, 50%), rgba(234,88,12,0.4), rgba(234,88,12,0.1) 45%, transparent 70%)',
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
            <span className="text-xs font-medium text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-500/10 px-2 py-1 rounded-full">
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

export default function SDLCTechnologiesSection() {
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
            Cutting-Edge{' '}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            We leverage the latest and most reliable technologies to build scalable, maintainable, and high-performance applications throughout the entire software development lifecycle.
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
                  20+
                </div>
                <div className="mt-1 text-sm text-gray-600 dark:text-white/70">
                  Technologies
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                  99.9%
                </div>
                <div className="mt-1 text-sm text-gray-600 dark:text-white/70">
                  Reliability Score
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
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                  100+
                </div>
                <div className="mt-1 text-sm text-gray-600 dark:text-white/70">
                  Projects Delivered
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="mx-auto max-w-2xl rounded-3xl border border-gray-200 dark:border-white/[0.08] bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              Don't see your preferred technology?
            </h3>
            <p className="mb-6 text-gray-600 dark:text-white/80">
              We're always adapting to new technologies and can work with your existing tech stack to deliver the best solutions.
            </p>
            <button className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 px-8 py-3 font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30">
              Discuss Your Tech Requirements
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}