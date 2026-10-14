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

/* ---------- IT Infrastructure Animation (Blue Theme) ---------- */
function ITInfrastructureVisual() {
  const [pulseActive, setPulseActive] = useState(false)
  const [connections, setConnections] = useState([0, 2, 4])

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulseActive(true)
      setTimeout(() => setPulseActive(false), 1500)
    }, 3000)

    const connectionInterval = setInterval(() => {
      setConnections(prev => {
        const newConnections: number[] = []
        while (newConnections.length < 3) {
          const randomIdx = Math.floor(Math.random() * 6)
          if (!newConnections.includes(randomIdx)) {
            newConnections.push(randomIdx)
          }
        }
        return newConnections
      })
    }, 2000)

    return () => {
      clearInterval(pulseInterval)
      clearInterval(connectionInterval)
    }
  }, [])

  return (
    <div className="relative flex h-full items-center justify-center p-6">
      {/* Central Server */}
      <motion.div
        animate={{ 
          scale: pulseActive ? 1.1 : 1,
          boxShadow: pulseActive 
            ? '0 0 40px rgba(59, 130, 246, 0.8)' 
            : '0 0 20px rgba(59, 130, 246, 0.4)'
        }}
        transition={{ duration: 1.2 }}
        className="relative z-10 h-20 w-16 rounded-lg bg-gradient-to-b from-blue-400 to-blue-600 shadow-xl"
      >
        {/* Server indicators */}
        <div className="absolute inset-x-2 top-2 space-y-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                backgroundColor: pulseActive 
                  ? ['rgb(34, 197, 94)', 'rgb(59, 130, 246)', 'rgb(34, 197, 94)']
                  : 'rgb(59, 130, 246)'
              }}
              transition={{ duration: 0.8, delay: i * 0.2, repeat: pulseActive ? 2 : 0 }}
              className="h-1 w-full rounded bg-blue-300"
            />
          ))}
        </div>
      </motion.div>

      {/* Network Nodes */}
      {[
        { x: -80, y: -60, type: 'cloud' },
        { x: 80, y: -60, type: 'database' },
        { x: -80, y: 60, type: 'security' },
        { x: 80, y: 60, type: 'analytics' },
        { x: 0, y: -100, type: 'network' },
        { x: 0, y: 100, type: 'mobile' }
      ].map((node, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            backgroundColor: connections.includes(i) 
              ? 'rgb(34, 197, 94)' 
              : 'rgb(107, 114, 128)'
          }}
          transition={{ 
            duration: 0.6, 
            delay: i * 0.1,
            backgroundColor: { duration: 0.4 }
          }}
          className="absolute h-10 w-10 rounded-full shadow-lg flex items-center justify-center"
          style={{
            left: `calc(50% + ${node.x}px - 20px)`,
            top: `calc(50% + ${node.y}px - 20px)`,
          }}
        >
          {/* Custom SVG icons for each node type */}
          {node.type === 'cloud' && (
            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 7c-1.5 0-3 1.5-3 3.5s1.5 3.5 3.5 3.5h8c2 0 3.5-1.5 3.5-3.5S17.5 7 15.5 7c-.5-2-2-3.5-4.5-3.5s-4 1.5-4 3.5z" />
            </svg>
          )}
          {node.type === 'database' && (
            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6">
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
          )}
          {node.type === 'security' && (
            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 1l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" />
            </svg>
          )}
          {node.type === 'analytics' && (
            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6">
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
          )}
          {node.type === 'network' && (
            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
            </svg>
          )}
          {node.type === 'mobile' && (
            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
          )}
        </motion.div>
      ))}

      {/* Connection Lines */}
      {[
        { angle: 315, length: 85 }, // to top-left cloud
        { angle: 45, length: 85 },  // to top-right database
        { angle: 225, length: 85 }, // to bottom-left security
        { angle: 135, length: 85 }, // to bottom-right analytics
        { angle: 270, length: 100 }, // to top network
        { angle: 90, length: 100 }   // to bottom mobile
      ].map((line, i) => (
        <motion.div
          key={`line-${i}`}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: connections.includes(i) ? 0.8 : 0.3,
            backgroundColor: connections.includes(i) ? 'rgb(34, 197, 94)' : 'rgb(59, 130, 246)'
          }}
          transition={{ duration: 0.4 }}
          className="absolute h-0.5 rounded"
          style={{
            width: line.length,
            left: '50%',
            top: '50%',
            transformOrigin: '0 50%',
            transform: `translate(0, -50%) rotate(${line.angle}deg)`,
          }}
        />
      ))}

      {/* Data flow particles */}
      {pulseActive && connections.map((connectionIdx, i) => (
        <motion.div
          key={`particle-${i}`}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ 
            scale: [0, 1, 0],
            opacity: [1, 0.8, 0]
          }}
          transition={{ 
            duration: 1.5, 
            delay: i * 0.3,
            ease: "easeOut"
          }}
          className="absolute h-2 w-2 rounded-full bg-green-400"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  )
}

export default function ITConsultingHeroSection() {
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
            IT Consulting & Strategy
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl transition-colors duration-300"
          >
            Strategic IT Solutions{' '}
            <br className="hidden sm:block" />
            for Digital Excellence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-white/80 sm:text-xl transition-colors duration-300"
          >
            Transform your technology infrastructure with expert consulting services. We help businesses optimize 
            operations, accelerate digital transformation, and achieve measurable ROI through strategic IT planning.
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
                Schedule Consultation
              </Link>

              <Link
                href="#it-services"
                className="inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-full border border-gray-200 bg-gray-100 px-4 py-3 text-sm font-semibold text-gray-900 transition-all duration-200 hover:scale-105 hover:border-gray-300 hover:bg-gray-200 dark:border-white/20 dark:bg-white/[0.08] dark:text-white dark:hover:border-white/30 dark:hover:bg-white/15 sm:px-8 sm:py-4 sm:text-base"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* IT Infrastructure Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <Tilt className="w-full max-w-2xl rounded-[2rem] border border-gray-200 dark:border-white/[0.05] bg-white dark:bg-white/[0.03] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-all duration-300">
            <div
              className="relative h-[400px] overflow-hidden rounded-[1.6rem] border border-gray-100 dark:border-white/[0.05] bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 transition-all duration-300"
              style={{ transform: 'translateZ(20px)' }}
            >
              <ITInfrastructureVisual />
            </div>
            <div className="px-4 pb-4 pt-6" style={{ transform: 'translateZ(10px)' }}>
              <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
                Enterprise IT Infrastructure
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-white/80 transition-colors duration-300">
                Comprehensive network architecture design with cloud integration, security protocols, and scalable infrastructure solutions that grow with your business needs.
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
              IT Projects Completed
            </div>
          </div>

          <div className="w-1/3 min-w-0 flex-1 text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              40%
            </div>
            <div className="mt-2 text-xs font-medium text-gray-600 dark:text-white/70 sm:text-sm">
              Average Cost Reduction
            </div>
          </div>

          <div className="w-1/3 min-w-0 flex-1 text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              99%
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