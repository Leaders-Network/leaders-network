'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, type ReactNode, type MouseEvent } from 'react'

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

/* ---------- App Store Badge Component ---------- */
function AppStoreBadges({ appStore = true, playStore = true, rating }: { appStore?: boolean; playStore?: boolean; rating: number }) {
  return (
    <div className="flex flex-wrap gap-3">
      {appStore && (
        <div className="flex items-center gap-2 rounded-lg bg-black px-3 py-2 text-xs text-white dark:bg-gray-800">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <span>App Store</span>
        </div>
      )}
      
      {playStore && (
        <div className="flex items-center gap-2 rounded-lg bg-green-600 px-3 py-2 text-xs text-white dark:bg-green-700">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
          </svg>
          <span>Play Store</span>
        </div>
      )}
      
      <div className="flex items-center gap-1 rounded-lg bg-yellow-500 px-3 py-2 text-xs font-semibold text-white dark:bg-yellow-600">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        <span>{rating}</span>
      </div>
    </div>
  )
}

const portfolioApps = [
  {
    id: 'fintech-banking',
    title: 'FinanceFlow',
    category: 'FinTech Banking App',
    description: 'Modern mobile banking application with advanced security, real-time transactions, and AI-powered financial insights for over 100,000 active users.',
    image: '/images/mobile-app-development.avif',
    platforms: ['iOS', 'Android'],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase'],
    appStores: { ios: true, android: true, rating: 4.8 },
    metrics: {
      downloads: '250K+',
      rating: '4.8★',
      activeUsers: '100K+'
    },
    features: [
      'Biometric authentication',
      'Real-time transactions',
      'AI spending insights',
      'Multi-currency support',
      'Investment portfolio tracking'
    ]
  },
  {
    id: 'healthcare-telemedicine',
    title: 'MediConnect',
    category: 'Healthcare & Telemedicine',
    description: 'HIPAA-compliant telemedicine platform connecting patients with healthcare providers, featuring secure video calls and electronic health records.',
    image: '/images/mobile-app-development.avif',
    platforms: ['iOS', 'Android', 'Web'],
    technologies: ['Flutter', 'Firebase', 'WebRTC', 'AWS'],
    appStores: { ios: true, android: true, rating: 4.7 },
    metrics: {
      downloads: '150K+',
      rating: '4.7★',
      consultations: '500K+'
    },
    features: [
      'HD video consultations',
      'Secure messaging',
      'Prescription management',
      'Health record integration',
      'Appointment scheduling'
    ]
  },
  {
    id: 'ecommerce-marketplace',
    title: 'ShopSphere',
    category: 'E-commerce Marketplace',
    description: 'Multi-vendor marketplace app with advanced search, AR product preview, and seamless checkout experience driving $2M+ in monthly transactions.',
    image: '/images/mobile-app-development.avif',
    platforms: ['iOS', 'Android'],
    technologies: ['Native iOS/Android', 'Microservices', 'Redis', 'Stripe'],
    appStores: { ios: true, android: true, rating: 4.6 },
    metrics: {
      downloads: '500K+',
      rating: '4.6★',
      revenue: '$2M+/mo'
    },
    features: [
      'AR product preview',
      'Smart search & filters',
      'Multi-payment options',
      'Real-time order tracking',
      'Vendor management system'
    ]
  },
  {
    id: 'fitness-wellness',
    title: 'FitTracker Pro',
    category: 'Fitness & Wellness',
    description: 'Comprehensive fitness tracking app with AI workout recommendations, nutrition planning, and social features for fitness enthusiasts.',
    image: '/images/mobile-app-development.avif',
    platforms: ['iOS', 'Android', 'WearOS'],
    technologies: ['Native Development', 'HealthKit', 'Machine Learning'],
    appStores: { ios: true, android: true, rating: 4.9 },
    metrics: {
      downloads: '1M+',
      rating: '4.9★',
      workouts: '5M+'
    },
    features: [
      'AI workout planner',
      'Nutrition tracking',
      'Wearable integration',
      'Social challenges',
      'Progress analytics'
    ]
  }
]

export default function AppDevPortfolioSection() {
  return (
    <section id="app-portfolio" className="scroll-mt-28 bg-gray-50 dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300">
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
            Portfolio Showcase
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Award-Winning Mobile Apps
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            Explore our portfolio of successful mobile applications across various industries, 
            each designed to deliver exceptional user experiences and drive business results.
          </motion.p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {portfolioApps.map((app, index) => (
            <GlowCard key={app.id} delay={index * 0.1}>
              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <div className="mb-3 flex items-start justify-between">
                    <div>
                      <h3 className="mb-1 text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
                        {app.title}
                      </h3>
                      <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                        {app.category}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="mb-1 text-xs font-semibold text-gray-500 dark:text-white/60 uppercase tracking-wide">
                        Platforms
                      </div>
                      <div className="flex gap-1">
                        {app.platforms.map((platform) => (
                          <span key={platform} className="rounded bg-orange-100 dark:bg-orange-900/30 px-2 py-0.5 text-xs font-medium text-orange-700 dark:text-orange-300">
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-gray-600 dark:text-white/80 transition-colors duration-300">
                    {app.description}
                  </p>
                </div>

                {/* App Image */}
                <div className="mb-6">
                  <Tilt className="relative aspect-[16/10] overflow-hidden rounded-xl">
                    <div
                      className="relative h-full w-full"
                      style={{ transform: 'translateZ(20px)' }}
                    >
                      <Image
                        src={app.image}
                        alt={app.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent" />
                    </div>
                  </Tilt>
                </div>

                {/* App Store Badges */}
                <div className="mb-6">
                  <AppStoreBadges 
                    appStore={app.appStores.ios}
                    playStore={app.appStores.android}
                    rating={app.appStores.rating}
                  />
                </div>

                {/* Metrics */}
                <div className="mb-6 grid grid-cols-3 gap-4">
                  {Object.entries(app.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        {value}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-white/60 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="mb-3 text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {app.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
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
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="mb-3 text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {app.technologies.map((tech) => (
                      <span key={tech} className="rounded-full bg-gray-100 dark:bg-white/[0.08] border border-gray-200 dark:border-white/20 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="/contactus"
                  className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30"
                >
                  Build Similar App
                </Link>
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
              Ready to Join Our Success Stories?
            </h3>
            <p className="mb-8 text-base text-gray-600 dark:text-white/80 transition-colors duration-300">
              Let's build your mobile app that users will love and that drives real business results.
            </p>
            <Link
              href="/contactus"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30"
            >
              Start Your App Project
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}