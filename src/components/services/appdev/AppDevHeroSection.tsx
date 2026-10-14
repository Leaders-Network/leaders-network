'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState, type MouseEvent, type ReactNode } from 'react'

/* ---------- 3D tilt wrapper: matches landing page style ---------- */
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

/* ---------- Mobile App Development Animation ---------- */
function MobileAppVisual() {
  const [activeScreen, setActiveScreen] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  
  const screens = [
    { color: 'from-blue-500 to-blue-600', name: 'Login' },
    { color: 'from-green-500 to-green-600', name: 'Dashboard' },
    { color: 'from-purple-500 to-purple-600', name: 'Profile' },
    { color: 'from-orange-500 to-orange-600', name: 'Settings' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setActiveScreen(prev => (prev + 1) % screens.length)
        setIsAnimating(false)
      }, 200)
    }, 3000)
    return () => clearInterval(interval)
  }, [screens.length])

  return (
    <div className="flex h-full items-center justify-center p-6">
      {/* Phone Frame */}
      <div className="relative">
        <motion.div
          animate={{ 
            rotateY: isAnimating ? [0, 180, 0] : 0,
            scale: isAnimating ? [1, 0.8, 1] : 1
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative h-80 w-44 rounded-[2.5rem] border-8 border-gray-800 dark:border-gray-200 bg-black dark:bg-white shadow-2xl"
        >
          {/* Screen */}
          <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-white dark:bg-gray-900">
            {/* Status bar */}
            <div className="flex items-center justify-between px-4 py-2 text-xs">
              <span className="text-gray-900 dark:text-white">9:41</span>
              <div className="flex items-center gap-1">
                <div className="h-1 w-4 rounded-full bg-gray-900 dark:bg-white"></div>
                <div className="h-3 w-6 rounded-sm border border-gray-900 dark:border-white">
                  <div className="h-full w-3/4 rounded-sm bg-gray-900 dark:bg-white"></div>
                </div>
              </div>
            </div>
            
            {/* App Content */}
            <div className="flex h-full flex-col items-center justify-center p-6">
              <motion.div
                key={activeScreen}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`mb-4 h-16 w-16 rounded-2xl bg-gradient-to-r ${screens[activeScreen].color} shadow-lg`}
              />
              
              <motion.h3
                key={`title-${activeScreen}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-2 text-lg font-semibold text-gray-900 dark:text-white"
              >
                {screens[activeScreen].name}
              </motion.h3>
              
              <motion.div
                key={`content-${activeScreen}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-2"
              >
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="h-2 w-32 rounded bg-gray-300 dark:bg-gray-700"></div>
                ))}
              </motion.div>
            </div>
          </div>
          
          {/* Home indicator */}
          <div className="absolute -bottom-6 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-gray-800 dark:bg-gray-200"></div>
        </motion.div>
        
        {/* Floating elements */}
        <motion.div
          animate={{ 
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute -right-8 -top-4 h-12 w-12 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 shadow-lg"
        />
        
        <motion.div
          animate={{ 
            y: [10, -10, 10],
            rotate: [0, -5, 5, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-6 -left-8 h-8 w-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg"
        />
      </div>
    </div>
  )
}

export default function AppDevHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 transition-colors duration-300">
      {/* Background glow - matches landing page */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(0,0,0,0.03),_transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.06),_transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header section */}
        <div className="mb-16 text-center lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center rounded-full border border-gray-200 dark:border-white/[0.06] bg-gray-100 dark:bg-white/[0.04] px-4 py-2 text-sm font-medium text-gray-700 dark:text-white/90 transition-colors duration-300"
          >
            Mobile App Development
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl transition-colors duration-300"
          >
            Build Native Mobile{' '}
            <br className="hidden sm:block" />
            Apps That{' '}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Convert
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-white/80 sm:text-xl transition-colors duration-300"
          >
            From iOS to Android, we craft native mobile applications that deliver exceptional user experiences, 
            drive engagement, and generate measurable business results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <div className="flex flex-row flex-nowrap items-center gap-3">
              <Link
                href="/contactus"
                className="inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-full bg-gradient-to-r from-orange-500 to-amber-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-105 hover:from-orange-400 hover:to-amber-500 hover:shadow-xl hover:shadow-orange-500/30 sm:px-8 sm:py-4 sm:text-base"
              >
                Start App Development
              </Link>

              <Link
                href="#app-services"
                className="inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-full border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10 px-4 py-3 text-sm font-semibold text-indigo-700 dark:text-indigo-300 transition-all duration-200 hover:scale-105 hover:border-indigo-300 dark:hover:border-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 sm:px-8 sm:py-4 sm:text-base"
              >
                View Our Process
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Visual showcase with mobile animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Tilt className="mx-auto max-w-4xl rounded-[2rem] border border-gray-200 dark:border-white/[0.05] bg-white dark:bg-white/[0.03] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-all duration-300">
            <div
              className="relative h-[400px] overflow-hidden rounded-[1.6rem] border border-gray-100 dark:border-white/[0.05] bg-gradient-to-b from-gray-100 to-gray-200 dark:from-[#222] dark:to-[#171717] transition-all duration-300"
              style={{ transform: 'translateZ(20px)' }}
            >
              <MobileAppVisual />
            </div>
          </Tilt>
        </motion.div>

        {/* Stats section - mobile app focused */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 flex w-full flex-row items-start justify-between gap-2"
        >
          <div className="w-1/4 min-w-0 flex-1 text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              80+
            </div>
            <div className="mt-2 text-xs font-medium text-gray-600 dark:text-white/70 sm:text-sm">
              Apps Delivered
            </div>
          </div>

          <div className="w-1/4 min-w-0 flex-1 text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              4.8★
            </div>
            <div className="mt-2 text-xs font-medium text-gray-600 dark:text-white/70 sm:text-sm">
              Avg App Rating
            </div>
          </div>

          <div className="w-1/4 min-w-0 flex-1 text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              iOS + Android
            </div>
            <div className="mt-2 text-xs font-medium text-gray-600 dark:text-white/70 sm:text-sm">
              Platform Support
            </div>
          </div>

          <div className="w-1/4 min-w-0 flex-1 text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              99%
            </div>
            <div className="mt-2 text-xs font-medium text-gray-600 dark:text-white/70 sm:text-sm">
              Success Rate
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}