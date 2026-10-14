'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef, type ReactNode, type MouseEvent } from 'react'

/* ---------- Custom SVG Icons for Web Development Services ---------- */
const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'h-8 w-8',
}

const WebDevIcons = {
  webapp: (
    <svg {...iconProps}>
      <rect width="20" height="14" x="2" y="3" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  ecommerce: (
    <svg {...iconProps}>
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  ),
  responsive: (
    <svg {...iconProps}>
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  portal: (
    <svg {...iconProps}>
      <path d="M14 6a4 4 0 0 1-4.24 4 4 4 0 0 1-4.24-4 4 4 0 0 1 4.24-4 4 4 0 0 1 4.24 4z" />
      <path d="M19.25 12.46 21.84 15l-2.59 2.54A10.05 10.05 0 0 1 12 19.7 10 10 0 0 1 4.75 17.5L2.16 15l2.59-2.54A10.05 10.05 0 0 1 12 10.3a10 10 0 0 1 7.25 2.16z" />
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
            'radial-gradient(350px circle at var(--x, 50%) var(--y, 50%), rgba(59,130,246,0.08), transparent 70%)',
        }}
      />

      {/* Glowing border that follows the mouse */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          padding: 1.5,
          background:
            'radial-gradient(260px circle at var(--x, 50%) var(--y, 50%), rgba(59,130,246,0.4), rgba(59,130,246,0.1) 45%, transparent 70%)',
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
    id: 'webapp',
    title: 'Custom Web Applications',
    description: 'Scalable, modern web applications built with React, Next.js, and Node.js. Full-stack solutions tailored to your business requirements.',
    icon: WebDevIcons.webapp,
    features: ['React & Next.js', 'RESTful APIs', 'Database Integration', 'User Authentication'],
    stats: { projects: '50+', rating: '4.9/5' }
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Platforms',
    description: 'Complete e-commerce solutions with payment integration, inventory management, and analytics. Built for performance and conversion.',
    icon: WebDevIcons.ecommerce,
    features: ['Payment Gateway', 'Inventory System', 'Order Management', 'Analytics Dashboard'],
    stats: { projects: '30+', rating: '4.8/5' }
  },
  {
    id: 'responsive',
    title: 'Responsive Websites',
    description: 'Mobile-first responsive websites that look great on all devices. Optimized for speed, SEO, and user experience.',
    icon: WebDevIcons.responsive,
    features: ['Mobile-First Design', 'SEO Optimized', 'Fast Loading', 'Cross-Browser Compatible'],
    stats: { projects: '80+', rating: '4.9/5' }
  },
  {
    id: 'portal',
    title: 'Web Portals',
    description: 'Enterprise web portals for internal teams, customers, or partners. Secure, scalable solutions with role-based access.',
    icon: WebDevIcons.portal,
    features: ['Role-Based Access', 'Document Management', 'Workflow Automation', 'Integration APIs'],
    stats: { projects: '25+', rating: '4.8/5' }
  }
]

export default function WebDevServicesSection() {
  return (
    <section id="web-services" className="scroll-mt-28 bg-white dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300">
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
            Web Development Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Comprehensive Web Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            From simple websites to complex web applications, we deliver modern, scalable solutions that drive business growth and enhance user experience.
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
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:bg-white text-white dark:text-black shadow-lg dark:shadow-glow-white transition-all duration-500 group-hover:scale-110">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
                        {service.title}
                      </h3>
                      <div className="mt-1 flex gap-4 text-xs text-gray-500 dark:text-white/50">
                        <span>{service.stats.projects} Projects</span>
                        <span>{service.stats.rating} Rating</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-white/80 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6 grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-white" />
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <Link
                    href="/contactus"
                    className="flex-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30"
                  >
                    Get Quote
                  </Link>
                  
                  <Link
                    href="/contactus"
                    className="flex-1 inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-white/20 bg-gray-100 dark:bg-white/[0.08] px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white hover:border-gray-300 dark:hover:border-white/30 hover:bg-gray-200 dark:hover:bg-white/15 transition-all duration-200"
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
              Ready to Build Your Web Solution?
            </h3>
            <p className="mb-8 text-base text-gray-600 dark:text-white/80 transition-colors duration-300">
              Let's discuss your project requirements and create a web solution that meets your business goals and exceeds user expectations.
            </p>
            <Link
              href="/contactus"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30"
            >
              Start Your Project Today
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}