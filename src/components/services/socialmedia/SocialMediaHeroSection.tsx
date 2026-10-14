'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState, type MouseEvent, type ReactNode } from 'react'

/* ---------- 3D tilt wrapper: matches WebDevHeroSection style ---------- */
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

/* ---------- Social Media Engagement Animation (Pink/Purple Theme) ---------- */
function SocialMediaVisual() {
  const [activePlatform, setActivePlatform] = useState(0)
  const [engagementPulse, setEngagementPulse] = useState(false)

  useEffect(() => {
    const platformInterval = setInterval(() => {
      setActivePlatform(prev => (prev + 1) % 4)
    }, 3000)

    const pulseInterval = setInterval(() => {
      setEngagementPulse(true)
      setTimeout(() => setEngagementPulse(false), 1000)
    }, 2000)

    return () => {
      clearInterval(platformInterval)
      clearInterval(pulseInterval)
    }
  }, [])

  const platforms = [
    { name: 'Facebook', color: 'from-blue-400 to-blue-600', icon: 'f' },
    { name: 'Instagram', color: 'from-pink-400 to-purple-600', icon: 'i' },
    { name: 'LinkedIn', color: 'from-blue-500 to-blue-700', icon: 'in' },
    { name: 'Twitter', color: 'from-blue-300 to-blue-500', icon: 'x' }
  ]

  return (
    <div className="flex h-full flex-col justify-center p-6">
      {/* Social Dashboard */}
      <div className="rounded-xl bg-gray-900 dark:bg-black shadow-2xl">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between rounded-t-xl bg-gray-800 dark:bg-gray-900 px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs font-medium text-gray-400">Social Media Manager</div>
        </div>
        
        {/* Dashboard Content */}
        <div className="p-6 space-y-6">
          {/* Platform Tabs */}
          <div className="flex justify-center space-x-2">
            {platforms.map((platform, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: activePlatform === i ? 1.1 : 1,
                  opacity: activePlatform === i ? 1 : 0.6
                }}
                transition={{ duration: 0.6 }}
                className={`h-8 w-8 rounded-full bg-gradient-to-r ${platform.color} flex items-center justify-center text-white text-xs font-bold shadow-lg`}
              >
                {platform.icon}
              </motion.div>
            ))}
          </div>

          {/* Engagement Metrics */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Reach', value: '2.4M', change: '+18%' },
              { label: 'Engagement', value: '156K', change: '+24%' },
              { label: 'Conversion', value: '5.2%', change: '+12%' }
            ].map((metric, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: engagementPulse ? 1.05 : 1,
                  backgroundColor: engagementPulse ? 'rgb(236, 72, 153)' : 'rgb(75, 85, 99)'
                }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="rounded-lg px-3 py-2"
              >
                <div className="text-xs font-medium text-gray-300">{metric.label}</div>
                <div className="text-sm font-bold text-white">{metric.value}</div>
                <div className="text-xs text-pink-400">{metric.change}</div>
              </motion.div>
            ))}
          </div>

          {/* Post Performance Visualization */}
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  scale: activePlatform === i ? 1.02 : 1
                }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center space-x-3 p-2 rounded-lg bg-gray-800"
              >
                <div className={`h-3 w-3 rounded bg-gradient-to-r ${platforms[i]?.color || 'from-gray-400 to-gray-600'}`} />
                <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ width: activePlatform === i ? '75%' : '45%' }}
                    transition={{ duration: 1.2 }}
                    className="h-full bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
                  />
                </div>
                <div className="text-xs font-medium text-gray-400">
                  {activePlatform === i ? '2.1K' : '1.2K'}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Live Engagement Animation */}
          <div className="flex justify-center space-x-4">
            {['♥', '👍', '💬', '🔗'].map((icon, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: engagementPulse ? [-10, 0] : 0,
                  scale: engagementPulse ? [1, 1.3, 1] : 1,
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 1.5, 
                  delay: i * 0.2,
                  repeat: engagementPulse ? 2 : 0
                }}
                className="text-lg"
              >
                {icon}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SocialMediaHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 transition-colors duration-300">
      {/* Background glow */}
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
            Social Media Advertising
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl transition-colors duration-300"
          >
            Strategic Social Media{' '}
            <br className="hidden sm:block" />
            Campaign Management
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-white/80 sm:text-xl transition-colors duration-300"
          >
            Reach your target audience with data-driven social media campaigns across all major platforms. 
            Build brand awareness, drive engagement, and convert followers into loyal customers.
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
                Launch Campaign
              </Link>

              <Link
                href="#social-services"
                className="inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-full border border-gray-200 bg-gray-100 px-4 py-3 text-sm font-semibold text-gray-900 transition-all duration-200 hover:scale-105 hover:border-gray-300 hover:bg-gray-200 dark:border-white/20 dark:bg-white/[0.08] dark:text-white dark:hover:border-white/30 dark:hover:bg-white/15 sm:px-8 sm:py-4 sm:text-base"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Social Media Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <Tilt className="w-full max-w-2xl rounded-[2rem] border border-gray-200 dark:border-white/[0.05] bg-white dark:bg-white/[0.03] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-all duration-300">
            <div
              className="relative h-[400px] overflow-hidden rounded-[1.6rem] border border-gray-100 dark:border-white/[0.05] bg-gradient-to-b from-pink-50 to-purple-100 dark:from-pink-950/20 dark:to-purple-900/20 transition-all duration-300"
              style={{ transform: 'translateZ(20px)' }}
            >
              <SocialMediaVisual />
            </div>
            <div className="px-4 pb-4 pt-6" style={{ transform: 'translateZ(10px)' }}>
              <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
                Multi-Platform Campaign Management
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-white/80 transition-colors duration-300">
                Comprehensive social media dashboard with real-time analytics, engagement tracking, and performance optimization across all major social platforms.
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
              80+
            </div>
            <div className="mt-2 text-xs font-medium text-gray-600 dark:text-white/70 sm:text-sm">
              Campaigns Launched
            </div>
          </div>

          <div className="w-1/3 min-w-0 flex-1 text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              450%
            </div>
            <div className="mt-2 text-xs font-medium text-gray-600 dark:text-white/70 sm:text-sm">
              Average ROI Increase
            </div>
          </div>

          <div className="w-1/3 min-w-0 flex-1 text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              96%
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