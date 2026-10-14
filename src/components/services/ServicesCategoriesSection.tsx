'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, type ReactNode, type MouseEvent } from 'react'

/* ---------- Custom SVG Icons (matching homepage style) ---------- */
const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'h-8 w-8',
}

const ServiceIcons = {
  code: (
    <svg {...iconProps}>
      <polyline points="16,18 22,12 16,6" />
      <polyline points="8,6 2,12 8,18" />
      <line x1="12" y1="2" x2="12" y2="22" />
    </svg>
  ),
  consulting: (
    <svg {...iconProps}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="m22 21-3-3" />
      <circle cx="17" cy="17" r="3" />
    </svg>
  ),
  analytics: (
    <svg {...iconProps}>
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  ),
  marketing: (
    <svg {...iconProps}>
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  )
}

/* ---------- 3D tilt wrapper (matching landing page) ---------- */
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

/* ---------- Glow Card (matching WhyChooseUsSection) ---------- */
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
    id: 'sdlc',
    title: 'Software Development Lifecycle',
    shortTitle: 'SDLC',
    description: 'End-to-end software development with modern methodologies. From planning to deployment, we build scalable, maintainable applications using cutting-edge technologies.',
    image: '/images/about-software.jpg',
    icon: ServiceIcons.code,
    href: '/ourservices/sdlc',
    features: ['Agile Development', 'Quality Assurance', 'DevOps Integration', 'Scalable Architecture'],
    subServices: [
      { name: 'Web Development', href: '/ourservices/sdlc/web-development' },
      { name: 'Mobile Apps', href: '/ourservices/sdlc/app-development' }
    ],
    stats: { projects: '200+', satisfaction: '98%' }
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting & Strategy',
    shortTitle: 'Consulting',
    description: 'Strategic technology consulting to optimize infrastructure, accelerate digital transformation, and align technology with business objectives for maximum ROI.',
    image: '/images/architecture.jpg',
    icon: ServiceIcons.consulting,
    href: '/ourservices/it-consulting',
    features: ['Digital Strategy', 'Cloud Migration', 'System Integration', 'Technology Roadmaps'],
    subServices: [],
    stats: { projects: '150+', satisfaction: '99%' }
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis & Intelligence',
    shortTitle: 'Analytics',
    description: 'Transform data into actionable business insights with advanced analytics, machine learning, and business intelligence solutions that drive informed decision-making.',
    image: '/images/data-analysis.jpg',
    icon: ServiceIcons.analytics,
    href: '/ourservices/data-analysis',
    features: ['Business Intelligence', 'Machine Learning', 'Data Visualization', 'Predictive Analytics'],
    subServices: [],
    stats: { projects: '100+', satisfaction: '97%' }
  },
  {
    id: 'social-media',
    title: 'Social Media Advertising',
    shortTitle: 'Marketing',
    description: 'Strategic social media campaigns across all major platforms. Reach your target audience, build brand awareness, and drive conversions with data-driven marketing.',
    image: '/images/data-analysis-img.jpg',
    icon: ServiceIcons.marketing,
    href: '/ourservices/social-media-advert',
    features: ['Campaign Strategy', 'Multi-Platform Management', 'Analytics & Reporting', 'Content Creation'],
    subServices: [],
    stats: { projects: '80+', satisfaction: '96%' }
  }
]

export default function ServicesCategoriesSection() {
  return (
    <section id="service-details" className="scroll-mt-28 bg-gray-50 dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300">
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
            Service Categories
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Comprehensive Technology Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            From concept to deployment, we offer end-to-end technology services that help businesses scale, innovate, and achieve their digital transformation goals.
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
                        <span>{service.stats.satisfaction} Success Rate</span>
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

                {/* Sub-services */}
                {service.subServices.length > 0 && (
                  <div className="mb-6 space-y-2">
                    <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                      Specialized Services
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.subServices.map((subService, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subService.href}
                          className="inline-flex items-center rounded-full bg-gray-100 dark:bg-white/[0.08] border border-gray-200 dark:border-white/20 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
                        >
                          {subService.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Image */}
                <div className="mb-6">
                  <Tilt className="relative aspect-[16/10] overflow-hidden rounded-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
                  </Tilt>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <Link
                    href={service.href}
                    className="flex-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30"
                  >
                    Learn More
                  </Link>
                  
                  <Link
                    href="/contactus"
                    className="flex-1 inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-white/20 bg-gray-100 dark:bg-white/[0.08] px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white hover:border-gray-300 dark:hover:border-white/30 hover:bg-gray-200 dark:hover:bg-white/15 transition-all duration-200"
                  >
                    Get Quote
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
              Ready to Transform Your Business?
            </h3>
            <p className="mb-8 text-base text-gray-600 dark:text-white/80 transition-colors duration-300">
              Let's discuss how our technology solutions can accelerate your growth and streamline your operations.
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