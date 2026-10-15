'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, type MouseEvent, type ReactNode } from 'react'

/* ---------- Custom Tilt Component (matching homepage style) ---------- */
function Tilt({ children, className = '' }: { children: ReactNode; className?: string }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 18 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 150, damping: 18 })

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) / rect.width)
    y.set((e.clientY - centerY) / rect.height)
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
    >
      {children}
    </motion.div>
  )
}

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

const SDLCIcons = {
  code: (
    <svg {...iconProps}>
      <polyline points="16,18 22,12 16,6" />
      <polyline points="8,6 2,12 8,18" />
    </svg>
  ),
  agile: (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
    </svg>
  ),
  shield: (
    <svg {...iconProps}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  deploy: (
    <svg {...iconProps}>
      <path d="m8 3 4 8 5-5v11H6V6z" />
      <path d="M2 3h6v18H2z" />
    </svg>
  ),
  arrow: (
    <svg {...iconProps}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  ),
}

export default function SDLCHeroSection() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-dark-950 px-4 py-24 sm:px-6 sm:py-32 lg:px-8 transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(234,88,12,0.1),_transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_left,_rgba(251,146,60,0.15),_transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 inline-flex items-center rounded-full border border-gray-200 dark:border-white/[0.06] bg-gray-100 dark:bg-white/[0.04] px-4 py-2 text-sm font-medium text-gray-700 dark:text-white/90"
            >
              {SDLCIcons.code}
              <span className="ml-2">SDLC Excellence</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl"
            >
              Software Development{' '}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Lifecycle
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl max-w-2xl"
            >
              From concept to deployment, we deliver enterprise-grade software solutions using industry-leading SDLC methodologies. Our agile approach ensures quality, scalability, and on-time delivery.
            </motion.p>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8 grid grid-cols-2 gap-4 text-sm"
            >
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                {SDLCIcons.agile}
                <span className="ml-2">Agile Methodology</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                {SDLCIcons.shield}
                <span className="ml-2">Quality Assurance</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                {SDLCIcons.deploy}
                <span className="ml-2">Rapid Deployment</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                {SDLCIcons.code}
                <span className="ml-2">Modern Tech Stack</span>
              </div>
            </motion.div>


          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex w-full flex-row items-center justify-center gap-3 sm:justify-start"
          >
            <Link
              href="/contactus"
              className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-3 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:from-orange-400 hover:to-orange-500 hover:shadow-xl hover:shadow-orange-500/30 sm:flex-none sm:px-8 sm:py-4 sm:text-base"
            >
              Start Your Project
              {SDLCIcons.arrow}
            </Link>

            <Link
              href="#process"
              className="inline-flex min-w-0 flex-1 items-center justify-center whitespace-nowrap rounded-full border-2 border-gray-300 bg-white px-3 py-3 text-sm font-semibold text-gray-900 transition-all duration-200 hover:border-orange-500 hover:bg-orange-50 dark:border-gray-600 dark:bg-transparent dark:text-white dark:hover:border-orange-400 dark:hover:bg-orange-900/20 sm:flex-none sm:px-8 sm:py-4 sm:text-base"
            >
              View Our Process
            </Link>
          </motion.div>

          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <Tilt className="relative mx-auto max-w-lg">
              {/* Main Card */}
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-orange-800 p-8 shadow-2xl shadow-orange-500/25">
                <Image
                  src="/images/about-software.jpg"
                  alt="Software Development Lifecycle"
                  fill
                  className="object-cover opacity-20"
                />
                
                {/* Animated SDLC Visualization */}
                <div className="absolute inset-8 flex items-center justify-center">
                  <div className="relative">
                    {/* Center Hub */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="relative h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center"
                    >
                      {SDLCIcons.code}
                    </motion.div>

                    {/* Orbiting Elements */}
                    {[0, 72, 144, 216, 288].map((angle, index) => (
                      <motion.div
                        key={angle}
                        className="absolute h-8 w-8 rounded-full bg-white/30 backdrop-blur-sm border border-white/40 flex items-center justify-center"
                        style={{
                          top: '50%',
                          left: '50%',
                          transformOrigin: '50% -60px',
                        }}
                        animate={{ rotate: angle }}
                        transition={{ 
                          duration: 0.6,
                          delay: index * 0.1,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                      >
                        <div className="h-3 w-3 rounded-full bg-white" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Overlay Text */}
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="text-lg font-semibold">Enterprise SDLC</div>
                  <div className="text-sm opacity-90">End-to-End Solutions</div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  )
}