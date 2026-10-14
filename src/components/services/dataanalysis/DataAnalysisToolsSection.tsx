'use client'

import { motion } from 'framer-motion'
import { useRef, type ReactNode, type MouseEvent } from 'react'

/* ---------- Custom SVG Icons (Emerald/Teal Theme) ---------- */
const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'h-6 w-6',
}

const ToolIcons = {
  python: (
    <svg {...iconProps}>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  ),
  tableau: (
    <svg {...iconProps}>
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="9" y1="9" x2="9" y2="15" />
      <line x1="15" y1="9" x2="15" y2="15" />
      <line x1="9" y1="12" x2="15" y2="12" />
    </svg>
  ),
  powerbi: (
    <svg {...iconProps}>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  sql: (
    <svg {...iconProps}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  ),
}

/* ---------- Glow Card (Emerald/Teal Theme) ---------- */
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
            'radial-gradient(350px circle at var(--x, 50%) var(--y, 50%), rgba(16,185,129,0.08), transparent 70%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          padding: 1.5,
          background:
            'radial-gradient(260px circle at var(--x, 50%) var(--y, 50%), rgba(16,185,129,0.4), rgba(16,185,129,0.1) 45%, transparent 70%)',
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

const tools = [
  {
    id: 'python',
    name: 'Python & R',
    description: 'Advanced statistical analysis and machine learning with Python, R, and specialized libraries for data science.',
    icon: ToolIcons.python,
    capabilities: ['Statistical Analysis', 'Machine Learning', 'Data Processing', 'Automation'],
  },
  {
    id: 'tableau',
    name: 'Tableau & Power BI',
    description: 'Professional data visualization and business intelligence platforms for interactive dashboards and reporting.',
    icon: ToolIcons.tableau,
    capabilities: ['Interactive Dashboards', 'Real-time Analytics', 'Self-service BI', 'Mobile Access'],
  },
  {
    id: 'sql',
    name: 'SQL & NoSQL',
    description: 'Comprehensive database management and querying across relational and non-relational database systems.',
    icon: ToolIcons.sql,
    capabilities: ['Database Design', 'Complex Queries', 'Performance Optimization', 'Data Integration'],
  },
  {
    id: 'cloud',
    name: 'Cloud Platforms',
    description: 'Scalable analytics solutions on AWS, Azure, and Google Cloud with managed services and infrastructure.',
    icon: ToolIcons.powerbi,
    capabilities: ['Scalable Computing', 'Managed Services', 'Data Lakes', 'Real-time Processing'],
  },
]

export default function DataAnalysisToolsSection() {
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
            Analytics Tools & Technologies
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Powerful Analytics Stack
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            Industry-leading tools and technologies that power our data analytics solutions, from statistical analysis to enterprise-scale visualizations.
          </motion.p>
        </div>

        {/* Tools Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {tools.map((tool, index) => (
            <GlowCard key={tool.id} delay={index * 0.1}>
              <div className="p-8">
                {/* Header */}
                <div className="mb-6 flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg transition-all duration-500 group-hover:scale-110">
                    {tool.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
                      {tool.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-white/80 transition-colors duration-300">
                  {tool.description}
                </p>

                {/* Capabilities */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    Key Capabilities
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {tool.capabilities.map((capability, capabilityIndex) => (
                      <div key={capabilityIndex} className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-white" />
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