'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState, type MouseEvent, type ReactNode } from 'react'

/* ---------- 3D tilt wrapper: matches ServicesHeroSection style ---------- */
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

/* ---------- Web Development Visual Animation ---------- */
function WebDevelopmentVisual() {
  const [activeElements, setActiveElements] = useState({ html: true, css: false, js: false })

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveElements(prev => ({
        html: !prev.html && !prev.css && !prev.js,
        css: prev.html && !prev.css && !prev.js,
        js: prev.html && prev.css && !prev.js,
      }))
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex h-full flex-col justify-center p-6">
      {/* Browser mockup */}
      <div className="rounded-xl bg-gray-900 dark:bg-black shadow-2xl">
        {/* Browser chrome */}
        <div className="flex items-center justify-between rounded-t-xl bg-gray-800 dark:bg-gray-900 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 mx-4">
            <div className="h-6 rounded-md bg-gray-700 dark:bg-gray-800 px-3 flex items-center">
              <div className="h-2 w-32 rounded bg-gray-500"></div>
            </div>
          </div>
        </div>
        
        {/* Website content */}
        <div className="p-6 space-y-4">
          {/* Header */}
          <motion.div
            animate={{
              opacity: activeElements.html ? 1 : 0.3,
              y: activeElements.html ? 0 : 10,
            }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600"></div>
            <div className="space-y-2">
              <div className="h-3 w-24 rounded bg-gray-300"></div>
              <div className="h-2 w-32 rounded bg-gray-400"></div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            animate={{
              opacity: activeElements.css ? 1 : 0.3,
              scale: activeElements.css ? 1.02 : 1,
            }}
            transition={{ duration: 0.6 }}
            className="flex gap-4"
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-2 w-16 rounded bg-blue-400"></div>
            ))}
          </motion.div>

          {/* Content grid */}
          <motion.div
            animate={{
              opacity: activeElements.js ? 1 : 0.3,
              scale: activeElements.js ? 1.05 : 1,
            }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 gap-3"
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-16 w-full rounded bg-gradient-to-br from-blue-400 to-purple-500"></div>
                <div className="h-1.5 w-full rounded bg-gray-400"></div>
                <div className="h-1 w-3/4 rounded bg-gray-500"></div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default function WebDevHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 transition-colors duration-300">
      {/* Background glow - matches ServicesHeroSection */}
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
            Web Development Services
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl transition-colors duration-300"
          >
            Professional Web{' '}
            <br className="hidden sm:block" />
            Development Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-white/80 sm:text-xl transition-colors duration-300"
          >
            Custom web applications, responsive websites, and e-commerce platforms built with modern frameworks. 
            We create scalable, secure, and user-friendly solutions that drive business growth.
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
                className="inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-105 hover:from-orange-400 hover:to-orange-500 hover:shadow-xl hover:shadow-orange-500/30 sm:px-8 sm:py-4 sm:text-base"
              >
                Start Your Project
              </Link>

              <Link
                href="#web-services"
                className="inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-full border border-gray-200 bg-gray-100 px-4 py-3 text-sm font-semibold text-gray-900 transition-all duration-200 hover:scale-105 hover:border-gray-300 hover:bg-gray-200 dark:border-white/20 dark:bg-white/[0.08] dark:text-white dark:hover:border-white/30 dark:hover:bg-white/15 sm:px-8 sm:py-4 sm:text-base"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Visual demonstration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <Tilt className="w-full max-w-2xl rounded-[2rem] border border-gray-200 dark:border-white/[0.05] bg-white dark:bg-white/[0.03] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-all duration-300">
            <div
              className="relative h-[400px] overflow-hidden rounded-[1.6rem] border border-gray-100 dark:border-white/[0.05] bg-gradient-to-b from-gray-100 to-gray-200 dark:from-[#222] dark:to-[#171717] transition-all duration-300"
              style={{ transform: 'translateZ(20px)' }}
            >
              <WebDevelopmentVisual />
            </div>
            <div className="px-4 pb-4 pt-6" style={{ transform: 'translateZ(10px)' }}>
              <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
                Modern Web Applications
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-white/80 transition-colors duration-300">
                Interactive, responsive web applications built with cutting-edge technologies and best practices for optimal performance and user experience.
              </p>
            </div>
          </Tilt>
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 flex w-full flex-row items-start justify-between gap-2"
        >
          <div className="w-1/3 min-w-0 flex-1 text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              150+
            </div>
            <div className="mt-2 text-xs font-medium text-gray-600 dark:text-white/70 sm:text-sm">
              Websites Delivered
            </div>
          </div>

          <div className="w-1/3 min-w-0 flex-1 text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              99.9%
            </div>
            <div className="mt-2 text-xs font-medium text-gray-600 dark:text-white/70 sm:text-sm">
              Uptime Guaranteed
            </div>
          </div>

          <div className="w-1/3 min-w-0 flex-1 text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              3s
            </div>
            <div className="mt-2 text-xs font-medium text-gray-600 dark:text-white/70 sm:text-sm">
              Avg Load Time
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}