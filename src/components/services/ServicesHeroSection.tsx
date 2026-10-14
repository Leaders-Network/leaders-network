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

/* ---------- Custom animated visuals (no generic icons) ---------- */

// Code Development Animation
function CodeDevelopmentVisual() {
  const [activeLines, setActiveLines] = useState([0, 2, 4])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLines(prev => {
        const newLines: number[] = []
        while (newLines.length < 3) {
          const randomLine = Math.floor(Math.random() * 8)
          if (!newLines.includes(randomLine)) {
            newLines.push(randomLine)
          }
        }
        return newLines
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex h-full flex-col justify-center p-6">
      <div className="rounded-xl bg-gray-900 dark:bg-black p-4 shadow-2xl">
        <div className="mb-3 flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <div className="space-y-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{
                opacity: activeLines.includes(i) ? 1 : 0.3,
                scale: activeLines.includes(i) ? 1.02 : 1,
              }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <div className="h-2 w-4 rounded bg-blue-400"></div>
              <div className="h-2 flex-1 rounded bg-gray-600"></div>
              <div className="h-2 w-8 rounded bg-green-400"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Data Analytics Animation  
function DataAnalyticsVisual() {
  const [activeBar, setActiveBar] = useState(0)
  const bars = [65, 45, 80, 35, 70, 55]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBar(prev => (prev + 1) % bars.length)
    }, 1200)
    return () => clearInterval(interval)
  }, [bars.length])

  return (
    <div className="flex h-full items-end justify-center gap-3 p-6">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ 
            height: `${height}%`,
            backgroundColor: activeBar === i 
              ? 'rgb(59 130 246)' 
              : 'rgb(156 163 175)'
          }}
          transition={{ 
            duration: 0.8,
            ease: 'easeOut'
          }}
          className="w-4 rounded-t-lg shadow-lg"
          style={{
            boxShadow: activeBar === i 
              ? '0 0 20px rgba(59, 130, 246, 0.5)' 
              : 'none'
          }}
        />
      ))}
    </div>
  )
}

// IT Consulting Animation
function ITConsultingVisual() {
  const [pulseActive, setPulseActive] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseActive(true)
      setTimeout(() => setPulseActive(false), 1000)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative flex h-full items-center justify-center p-6">
      {/* Center hub */}
      <motion.div
        animate={{ 
          scale: pulseActive ? 1.1 : 1,
          boxShadow: pulseActive 
            ? '0 0 30px rgba(59, 130, 246, 0.6)' 
            : '0 0 10px rgba(59, 130, 246, 0.3)'
        }}
        transition={{ duration: 0.8 }}
        className="relative z-10 h-16 w-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600"
      />
      
      {/* Connecting nodes */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const x = Math.cos((angle * Math.PI) / 180) * 60
        const y = Math.sin((angle * Math.PI) / 180) * 60
        
        return (
          <motion.div
            key={angle}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              backgroundColor: pulseActive ? 'rgb(34 197 94)' : 'rgb(107 114 128)'
            }}
            transition={{ 
              duration: 0.5, 
              delay: i * 0.1,
              backgroundColor: { duration: 0.3, delay: pulseActive ? i * 0.1 : 0 }
            }}
            className="absolute h-8 w-8 rounded-full shadow-lg"
            style={{
              left: `calc(50% + ${x}px - 16px)`,
              top: `calc(50% + ${y}px - 16px)`,
            }}
          />
        )
      })}
      
      {/* Connection lines */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <motion.div
          key={`line-${angle}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: pulseActive ? 0.8 : 0.3 }}
          transition={{ duration: 0.3, delay: pulseActive ? i * 0.05 : 0 }}
          className="absolute h-0.5 w-12 bg-blue-300 dark:bg-white/30"
          style={{
            left: '50%',
            top: '50%',
            transformOrigin: '0 50%',
            transform: `translate(0, -50%) rotate(${angle}deg)`,
          }}
        />
      ))}
    </div>
  )
}

export default function ServicesHeroSection() {
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
            Our Services
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl transition-colors duration-300"
          >
            Enterprise Technology{' '}
            <br className="hidden sm:block" />
            Solutions That Scale
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-white/80 sm:text-xl transition-colors duration-300"
          >
            From software development to data analytics and IT consulting, we deliver 
            comprehensive solutions that transform your business operations and drive measurable results.
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
              href="#service-details"
              className="inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-full border border-gray-200 bg-gray-100 px-4 py-3 text-sm font-semibold text-gray-900 transition-all duration-200 hover:scale-105 hover:border-gray-300 hover:bg-gray-200 dark:border-white/20 dark:bg-white/[0.08] dark:text-white dark:hover:border-white/30 dark:hover:bg-white/15 sm:px-8 sm:py-4 sm:text-base"
            >
              Explore Services
            </Link>
          </div>

          </motion.div>
        </div>

        {/* Service cards - matches landing page card style */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Software Development Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Tilt className="rounded-[2rem] border border-gray-200 dark:border-white/[0.05] bg-white dark:bg-white/[0.03] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-all duration-300">
              <div
                className="relative h-[280px] overflow-hidden rounded-[1.6rem] border border-gray-100 dark:border-white/[0.05] bg-gradient-to-b from-gray-100 to-gray-200 dark:from-[#222] dark:to-[#171717] transition-all duration-300"
                style={{ transform: 'translateZ(20px)' }}
              >
                <CodeDevelopmentVisual />
              </div>
              <div className="px-4 pb-4 pt-6" style={{ transform: 'translateZ(10px)' }}>
                <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
                  Software Development
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-white/80 transition-colors duration-300">
                  Custom software solutions built with modern frameworks. From web applications to enterprise systems, we create scalable code that grows with your business.
                </p>
              </div>
            </Tilt>
          </motion.div>

          {/* Data Analytics Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Tilt className="rounded-[2rem] border border-gray-200 dark:border-white/[0.05] bg-white dark:bg-white/[0.03] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-all duration-300">
              <div
                className="relative h-[280px] overflow-hidden rounded-[1.6rem] border border-gray-100 dark:border-white/[0.05] bg-gradient-to-b from-gray-100 to-gray-200 dark:from-[#222] dark:to-[#171717] transition-all duration-300"
                style={{ transform: 'translateZ(20px)' }}
              >
                <DataAnalyticsVisual />
              </div>
              <div className="px-4 pb-4 pt-6" style={{ transform: 'translateZ(10px)' }}>
                <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
                  Data Analytics
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-white/80 transition-colors duration-300">
                  Transform raw data into actionable insights. Our analytics solutions help you make data-driven decisions that accelerate growth and operational efficiency.
                </p>
              </div>
            </Tilt>
          </motion.div>

          {/* IT Consulting Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Tilt className="rounded-[2rem] border border-gray-200 dark:border-white/[0.05] bg-white dark:bg-white/[0.03] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-all duration-300">
              <div
                className="relative h-[280px] overflow-hidden rounded-[1.6rem] border border-gray-100 dark:border-white/[0.05] bg-gradient-to-b from-gray-100 to-gray-200 dark:from-[#222] dark:to-[#171717] transition-all duration-300"
                style={{ transform: 'translateZ(20px)' }}
              >
                <ITConsultingVisual />
              </div>
              <div className="px-4 pb-4 pt-6" style={{ transform: 'translateZ(10px)' }}>
                <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
                  IT Consulting
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-white/80 transition-colors duration-300">
                  Strategic technology guidance that aligns with your business goals. We help optimize your IT infrastructure and implement solutions that drive competitive advantage.
                </p>
              </div>
            </Tilt>
          </motion.div>
        </div>



{/* Stats section */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="mt-20 flex w-full flex-row items-start justify-between gap-2"
>
  <div className="w-1/3 min-w-0 flex-1 text-center">
    <div className="text-2xl font-bold text-gray-900 dark:text-white sm:text-4xl">
      500+
    </div>
    <div className="mt-2 text-xs font-medium text-gray-600 dark:text-white/70 sm:text-sm">
      Projects Delivered
    </div>
  </div>

  <div className="w-1/3 min-w-0 flex-1 text-center">
    <div className="text-2xl font-bold text-gray-900 dark:text-white sm:text-4xl">
      19+
    </div>
    <div className="mt-2 text-xs font-medium text-gray-600 dark:text-white/70 sm:text-sm">
      Years of Excellence
    </div>
  </div>

  <div className="w-1/3 min-w-0 flex-1 text-center">
    <div className="text-2xl font-bold text-gray-900 dark:text-white sm:text-4xl">
      98%
    </div>
    <div className="mt-2 text-xs font-medium text-gray-600 dark:text-white/70 sm:text-sm">
      Client Satisfaction
    </div>
  </div>
</motion.div>


      </div>
    </section>
  )
}