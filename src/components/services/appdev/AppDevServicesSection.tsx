'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef, type ReactNode, type MouseEvent } from 'react'

/* ---------- Custom SVG Icons for Mobile Development ---------- */
const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'h-8 w-8',
}

const MobileIcons = {
  ios: (
    <svg {...iconProps}>
      <rect x="4" y="2" width="16" height="20" rx="3" ry="3" />
      <circle cx="12" cy="18" r="1" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <path d="M9 9h6v6H9z" />
    </svg>
  ),
  android: (
    <svg {...iconProps}>
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <circle cx="12" cy="18" r="1" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <circle cx="10" cy="10" r="1" />
      <circle cx="14" cy="10" r="1" />
      <path d="M9 13h6" />
    </svg>
  ),
  crossPlatform: (
    <svg {...iconProps}>
      <rect x="3" y="4" width="7" height="12" rx="1.5" />
      <rect x="14" y="4" width="7" height="12" rx="1.5" />
      <path d="M11 7h2v2h-2z" />
      <path d="M11 11h2v2h-2z" />
      <circle cx="6.5" cy="14" r="0.5" />
      <circle cx="17.5" cy="14" r="0.5" />
    </svg>
  ),
  maintenance: (
    <svg {...iconProps}>
      <rect x="4" y="2" width="16" height="20" rx="3" ry="3" />
      <circle cx="12" cy="18" r="1" />
      <path d="M12 6v6l4 2" />
      <path d="M8 10h8" />
      <path d="M10 8h4" />
    </svg>
  )
}

/* ---------- 3D tilt wrapper ---------- */
function Tilt({ children, className = '' }: { children: ReactNode; className?: string }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 18 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 150, damping: 18 })

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div style={{ perspective: 1000 }} onMouseMove={onMove} onMouseLeave={onLeave}>
      <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }} className={className}>
        {children}
      </motion.div>
    </div>
  )
}

/* ---------- Glow Card ---------- */
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
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

const services = [
  {
    id: 'native-ios',
    title: 'Native iOS Apps',
    description: 'High-performance iOS applications built with Swift and SwiftUI. Optimized for the App Store with native features and seamless Apple ecosystem integration.',
    icon: MobileIcons.ios,
    features: [
      'Swift & SwiftUI development',
      'App Store optimization',  
      'iOS-specific UI/UX patterns',
      'Core Data & CloudKit integration'
    ],
    deliverables: [
      'Native iOS app',
      'App Store submission',
      'Source code & documentation',
      '3-month support included'
    ]
  },
  {
    id: 'native-android',
    title: 'Native Android Apps',
    description: 'Modern Android applications using Kotlin and Jetpack Compose. Designed for Google Play Store with Material Design principles and Android-specific features.',
    icon: MobileIcons.android,
    features: [
      'Kotlin & Jetpack Compose',
      'Material Design implementation',
      'Google Play Store optimization',
      'Firebase & Google services'
    ],
    deliverables: [
      'Native Android app',
      'Play Store deployment',
      'Complete source code',
      '3-month support included'
    ]
  },
  {
    id: 'cross-platform',
    title: 'Cross-Platform Apps',
    description: 'Build once, deploy everywhere with React Native and Flutter. Cost-effective solution for businesses targeting both iOS and Android platforms simultaneously.',
    icon: MobileIcons.crossPlatform,
    features: [
      'React Native or Flutter',
      'Shared codebase (90%+)',
      'Native performance',
      'Platform-specific optimizations'
    ],
    deliverables: [
      'iOS & Android apps',
      'Dual store deployment',
      'Shared codebase',
      '6-month support included'
    ]
  },
  {
    id: 'maintenance',
    title: 'App Maintenance & Updates',
    description: 'Keep your mobile apps running smoothly with ongoing maintenance, security updates, feature enhancements, and performance optimizations.',
    icon: MobileIcons.maintenance,
    features: [
      'Regular security updates',
      'Performance monitoring',
      'Bug fixes & improvements',
      'New feature development'
    ],
    deliverables: [
      'Monthly update reports',
      'Priority bug fixes',
      'Performance analytics',
      'Feature roadmap planning'
    ]
  }
]

export default function AppDevServicesSection() {
  return (
    <section id="app-services" className="scroll-mt-28 bg-gray-50 dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300">
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
            Mobile App Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Complete Mobile Development Suite
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            From native iOS and Android apps to cross-platform solutions, we provide comprehensive mobile development services that drive user engagement and business growth.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <GlowCard key={service.id} delay={index * 0.1}>
              <div className="p-8">
                {/* Header */}
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg transition-all duration-500 group-hover:scale-110">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
                        {service.title}
                      </h3>
                      <div className="mt-1 text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                        Mobile Platform Specialist
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-white/80 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="mb-3 text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="mb-6">
                  <h4 className="mb-3 text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    What You Get
                  </h4>
                  <div className="space-y-2">
                    {service.deliverables.map((deliverable, deliverableIndex) => (
                      <div key={deliverableIndex} className="flex items-center space-x-2">
                        <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-600">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-2 w-2 text-white"
                          >
                            <path d="m5 12.5 4.5 4.5L19 7.5" />
                          </svg>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-white/70">
                          {deliverable}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <Link
                    href="/contactus"
                    className="flex-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30"
                  >
                    Get Quote
                  </Link>
                  
                  <Link
                    href="#app-process"
                    className="flex-1 inline-flex items-center justify-center rounded-full border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10 px-4 py-3 text-sm font-semibold text-indigo-700 dark:text-indigo-300 hover:border-indigo-300 dark:hover:border-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-all duration-200"
                  >
                    Learn More
                  </Link>
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
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="mx-auto max-w-2xl">
            <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
              Ready to Launch Your Mobile App?
            </h3>
            <p className="mb-8 text-base text-gray-600 dark:text-white/80 transition-colors duration-300">
              From concept to App Store deployment, we handle every aspect of mobile app development to ensure your success.
            </p>
            <Link
              href="/contactus"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30"
            >
              Start Your App Project Today
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}