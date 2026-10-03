'use client'

import { useEffect, useState, type ReactNode, type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

/* ---------- 3D tilt wrapper: the panel leans toward the mouse ---------- */
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

/* ---------- Shared card shell: outer card + inner "screen" ---------- */
function Card({
  visual,
  title,
  text,
  delay = 0,
}: {
  visual: ReactNode
  title: string
  text: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Tilt className="rounded-[2rem] border border-gray-200 dark:border-white/[0.05] bg-white dark:bg-white/[0.03] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-all duration-300">
        <div
          className="relative h-[300px] overflow-hidden rounded-[1.6rem] border border-gray-100 dark:border-white/[0.05] bg-gradient-to-b from-gray-100 to-gray-200 dark:from-[#222] dark:to-[#171717] sm:h-[340px] transition-all duration-300"
          style={{ transform: 'translateZ(20px)' }}
        >
          {visual}
        </div>
        <div className="px-4 pb-4 pt-6" style={{ transform: 'translateZ(10px)' }}>
          <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">{title}</h3>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-white/80 transition-colors duration-300">{text}</p>
        </div>
      </Tilt>
    </motion.div>
  )
}

/* ---------- Card 1: timeline pills ---------- */
const timeline = ['Week 1-2', 'Day 1-3', 'Week 3', 'Day 1-5', 'Week 4-6']

function TimelineVisual() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % timeline.length), 1800)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="flex h-full flex-col justify-between p-5">
      {/* faint rings behind */}
      {[180, 260, 340].map((s) => (
        <div
          key={s}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-300/30 dark:border-white/[0.04]"
          style={{ width: s, height: s }}
        />
      ))}

      <div className="relative space-y-3">
        {timeline.map((label, i) => {
          const isActive = i === active
          return (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              animate={{ scale: isActive ? 1.03 : 1 }}
              className={`flex items-center justify-between rounded-full px-4 py-3 transition-colors duration-500 ${
                isActive 
                  ? 'bg-blue-50 dark:bg-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.4)]' 
                  : 'bg-gray-200/50 dark:bg-black/30'
              }`}
            >
              {isActive ? (
                <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-blue-500 dark:border-white/80 border-t-transparent" />
              ) : (
                <span className="h-2 w-2 rounded-full bg-gray-500 dark:bg-white" />
              )}
              <span className={`text-xs font-medium ${isActive ? 'text-blue-600 dark:text-white' : 'text-gray-500 dark:text-white/40'}`}>
                {label}
              </span>
            </motion.div>
          )
        })}
      </div>

      {/* Live pill */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="relative flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:bg-white py-3 text-sm font-semibold text-white dark:text-black shadow-lg dark:shadow-glow-white"
      >
        <motion.span
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="h-2 w-2 rounded-full bg-white dark:bg-black"
        />
        Live
      </motion.div>
    </div>
  )
}

/* ---------- Card 2: rising bars ---------- */
const bars = [92, 74, 58, 82, 62, 46, 68, 72]

function BarsVisual() {
  const [hot, setHot] = useState(3)

  useEffect(() => {
    const t = setInterval(() => setHot((h) => (h + 1) % bars.length), 1500)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="flex h-full items-end justify-center gap-2.5 px-6 sm:gap-3">
      {bars.map((h, i) => {
        const isHot = i === hot
        return (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: [`${h}%`, `${Math.max(h - 14, 25)}%`, `${h}%`] }}
            viewport={{ once: true }}
            transition={{
              height: {
                duration: 4 + i * 0.4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.15,
              },
            }}
            className={`w-2.5 rounded-t-full transition-all duration-700 sm:w-3 ${
              isHot
                ? 'bg-gradient-to-b from-blue-500 via-blue-400/80 to-blue-500/0 dark:from-white dark:via-white/80 dark:to-white/0 shadow-[0_0_20px_rgba(59,130,246,0.5)] dark:shadow-[0_0_20px_rgba(255,255,255,0.5)]'
                : 'bg-gradient-to-b from-gray-400 to-gray-400/0 dark:from-white/35 dark:to-white/0'
            }`}
          />
        )
      })}
    </div>
  )
}

/* ---------- Card 3: orbit rings + floating sparkle ---------- */
const rings = [
  { size: 130, duration: 8 },
  { size: 210, duration: 14 },
  { size: 290, duration: 20 },
]

function OrbitVisual() {
  return (
    <div className="relative flex h-full items-center justify-center">
      {rings.map((r, i) => (
        <div
          key={r.size}
          className="absolute rounded-full border border-gray-300/50 dark:border-white/[0.07]"
          style={{ width: r.size, height: r.size }}
        >
          {/* orbiting dot */}
          <motion.div
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: r.duration, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0"
          >
            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 dark:bg-white shadow-[0_0_12px_rgba(59,130,246,0.9)] dark:shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
          </motion.div>
        </div>
      ))}

      <motion.div
        animate={{ y: [-6, 6, -6], rotate: [-4, 4, -4] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-b from-blue-400 to-blue-500 dark:from-white dark:to-gray-200 shadow-[0_10px_40px_rgba(59,130,246,0.25)] dark:shadow-[0_10px_40px_rgba(255,255,255,0.25)]"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-9 w-9 dark:stroke-black"
        >
          <path d="M9.5 4 11 9l5 1.5L11 12l-1.5 5L8 12 3 10.5 8 9l1.5-5Z" />
          <path d="M17 3v4M15 5h4" />
          <circle cx="17.5" cy="17.5" r="1.5" />
        </svg>
      </motion.div>
    </div>
  )
}

/* ---------- Section ---------- */
const ServicesSection = () => {
  return (
    <section id="services" className="scroll-mt-28 bg-gray-50 dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center rounded-full border border-gray-200 dark:border-white/[0.06] bg-gray-100 dark:bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-gray-700 dark:text-white/90 sm:text-sm transition-colors duration-300"
          >
            Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Services That Drive Results
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            Comprehensive solutions tailored to accelerate your digital transformation
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 sm:gap-8">
          <Card
            visual={<TimelineVisual />}
            title="Software Development"
            text="Robust, scalable software built on a proven SDLC process from design through testing to deployment."
          />
          <Card
            visual={<BarsVisual />}
            title="Consulting"
            text="Management and IT consulting backed by world-class tools and international partnerships, driving measurable results for your organization."
            delay={0.1}
          />
          <Card
            visual={<OrbitVisual />}
            title="Staff Recruitment"
            text="Connecting you with the right people a structured recruitment process built to identify and attract top talent."
            delay={0.2}
          />
        </div>
      </div>
    </section>
  )
}

export default ServicesSection