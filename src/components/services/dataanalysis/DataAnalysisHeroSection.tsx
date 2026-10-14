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

/* ---------- Data Analytics Animation (Green/Teal Theme) ---------- */
function DataAnalyticsVisual() {
  const [activeChart, setActiveChart] = useState(0)
  const [dataPoints, setDataPoints] = useState([
    { id: 0, value: 65, color: 'from-emerald-400 to-green-500' },
    { id: 1, value: 85, color: 'from-teal-400 to-emerald-500' },
    { id: 2, value: 45, color: 'from-green-400 to-teal-500' },
    { id: 3, value: 75, color: 'from-emerald-400 to-emerald-600' },
    { id: 4, value: 95, color: 'from-teal-400 to-green-500' },
    { id: 5, value: 55, color: 'from-green-400 to-emerald-500' }
  ])

  useEffect(() => {
    const chartInterval = setInterval(() => {
      setActiveChart(prev => (prev + 1) % 3)
    }, 2500)

    const dataInterval = setInterval(() => {
      setDataPoints(prev => prev.map(point => ({
        ...point,
        value: Math.max(30, Math.min(95, point.value + (Math.random() - 0.5) * 20))
      })))
    }, 1500)

    return () => {
      clearInterval(chartInterval)
      clearInterval(dataInterval)
    }
  }, [])

  return (
    <div className="flex h-full flex-col justify-center p-6">
      {/* Analytics Dashboard */}
      <div className="rounded-xl bg-gray-900 dark:bg-black shadow-2xl">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between rounded-t-xl bg-gray-800 dark:bg-gray-900 px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs font-medium text-gray-400">Analytics Dashboard</div>
        </div>
        
        {/* Dashboard Content */}
        <div className="p-6 space-y-6">
          {/* Metrics Cards */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Revenue', value: '$2.4M', change: '+12%' },
              { label: 'Users', value: '45.2K', change: '+8%' },
              { label: 'Growth', value: '23.5%', change: '+5%' }
            ].map((metric, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: activeChart === 0 ? 1.05 : 1,
                  backgroundColor: activeChart === 0 ? 'rgb(16, 185, 129)' : 'rgb(75, 85, 99)'
                }}
                transition={{ duration: 0.6 }}
                className="rounded-lg px-3 py-2"
              >
                <div className="text-xs font-medium text-gray-300">{metric.label}</div>
                <div className="text-sm font-bold text-white">{metric.value}</div>
                <div className="text-xs text-green-400">{metric.change}</div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Charts */}
          <div className="space-y-4">
            {/* Bar Chart */}
            <motion.div
              animate={{ opacity: activeChart === 1 ? 1 : 0.4 }}
              transition={{ duration: 0.6 }}
              className="flex items-end justify-center space-x-2 h-24"
            >
              {dataPoints.map((point) => (
                <motion.div
                  key={point.id}
                  animate={{ 
                    height: `${point.value}%`,
                    scale: activeChart === 1 ? 1.1 : 1
                  }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className={`w-3 rounded-t-sm bg-gradient-to-t ${point.color} shadow-lg`}
                />
              ))}
            </motion.div>

            {/* Line Chart Simulation */}
            <motion.div
              animate={{ opacity: activeChart === 2 ? 1 : 0.4 }}
              transition={{ duration: 0.6 }}
              className="relative h-16 bg-gray-800 rounded-lg overflow-hidden"
            >
              <svg className="absolute inset-0 w-full h-full">
                <motion.path
                  d="M10,40 Q30,10 60,25 Q90,5 130,30 Q160,15 190,35"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  animate={{
                    pathLength: activeChart === 2 ? 1 : 0,
                    strokeDasharray: activeChart === 2 ? "none" : "5,5"
                  }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="50%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Data Points */}
              {[20, 45, 75, 90].map((x, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: activeChart === 2 ? 1 : 0.5, 
                    opacity: activeChart === 2 ? 1 : 0.3 
                  }}
                  transition={{ duration: 0.4, delay: i * 0.2 }}
                  className="absolute w-2 h-2 bg-emerald-400 rounded-full shadow-lg"
                  style={{ 
                    left: `${x}%`, 
                    top: `${20 + Math.sin(i) * 15}px`,
                    boxShadow: activeChart === 2 ? '0 0 10px rgba(16, 185, 129, 0.6)' : 'none'
                  }}
                />
              ))}
            </motion.div>

            {/* Real-time Data Flow */}
            <div className="flex justify-center space-x-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    opacity: [0.3, 1, 0.3],
                    backgroundColor: ['rgb(75, 85, 99)', 'rgb(16, 185, 129)', 'rgb(75, 85, 99)']
                  }}
                  transition={{ 
                    duration: 2, 
                    delay: i * 0.1, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-1 h-6 rounded-full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DataAnalysisHeroSection() {
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
            Data Analysis & Intelligence
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl transition-colors duration-300"
          >
            Transform Data Into{' '}
            <br className="hidden sm:block" />
            Actionable Insights
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-white/80 sm:text-xl transition-colors duration-300"
          >
            Unlock the power of your data with advanced analytics, machine learning, and business intelligence 
            solutions that drive informed decision-making and competitive advantage.
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
                Start Data Journey
              </Link>

              <Link
                href="#analytics-services"
                className="inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-full border border-gray-200 bg-gray-100 px-4 py-3 text-sm font-semibold text-gray-900 transition-all duration-200 hover:scale-105 hover:border-gray-300 hover:bg-gray-200 dark:border-white/20 dark:bg-white/[0.08] dark:text-white dark:hover:border-white/30 dark:hover:bg-white/15 sm:px-8 sm:py-4 sm:text-base"
              >
                Explore Analytics
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Data Analytics Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <Tilt className="w-full max-w-2xl rounded-[2rem] border border-gray-200 dark:border-white/[0.05] bg-white dark:bg-white/[0.03] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-all duration-300">
            <div
              className="relative h-[400px] overflow-hidden rounded-[1.6rem] border border-gray-100 dark:border-white/[0.05] bg-gradient-to-b from-emerald-50 to-teal-100 dark:from-emerald-950/20 dark:to-teal-900/20 transition-all duration-300"
              style={{ transform: 'translateZ(20px)' }}
            >
              <DataAnalyticsVisual />
            </div>
            <div className="px-4 pb-4 pt-6" style={{ transform: 'translateZ(10px)' }}>
              <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
                Advanced Analytics Dashboard
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-white/80 transition-colors duration-300">
                Real-time data visualization with interactive charts, predictive analytics, and comprehensive business intelligence that transforms raw data into strategic insights.
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
              100+
            </div>
            <div className="mt-2 text-xs font-medium text-gray-600 dark:text-white/70 sm:text-sm">
              Analytics Projects
            </div>
          </div>

          <div className="w-1/3 min-w-0 flex-1 text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              85%
            </div>
            <div className="mt-2 text-xs font-medium text-gray-600 dark:text-white/70 sm:text-sm">
              Better Decision Making
            </div>
          </div>

          <div className="w-1/3 min-w-0 flex-1 text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              97%
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