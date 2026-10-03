'use client'

import { motion } from 'framer-motion'
import { CoreValue } from '@/types/about'

interface CoreValuesSectionProps {
  values: CoreValue[]
}

function ValueCard({ value, index }: { value: CoreValue; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.1, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className="group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/[0.05] bg-gradient-to-br from-white to-gray-50 dark:from-white/[0.05] dark:to-white/[0.015] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_25px_70px_rgba(0,0,0,0.6)]"
    >
      {/* Icon background */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-orange-100 dark:from-blue-500/20 dark:to-orange-500/20 transition-colors duration-300">
        <div className="h-8 w-8 text-gray-700 dark:text-white/90">
          {value.icon === 'security' && (
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full">
              <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
            </svg>
          )}
          {value.icon === 'speed' && (
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full">
              <path d="M12,16A3,3 0 0,1 9,13C9,11.88 9.61,10.9 10.5,10.39L20.21,4.77L14.68,14.35C14.18,15.33 13.17,16 12,16M12,3C13.81,3 15.5,3.5 16.97,4.32L14.87,5.53C14,5.19 13,5 12,5A8,8 0 0,0 4,13C4,15.21 4.89,17.21 6.34,18.65H6.35C6.74,19.04 6.74,19.67 6.35,20.06C5.96,20.45 5.33,20.45 4.94,20.06C3.1,18.22 2,15.76 2,13A10,10 0 0,1 12,3M22,13C22,15.76 20.9,18.22 19.06,20.06C18.67,20.45 18.04,20.45 17.65,20.06C17.26,19.67 17.26,19.04 17.65,18.65C19.11,17.21 20,15.21 20,13C20,12 19.81,11 19.47,10.13L20.68,8.03C21.5,9.5 22,11.19 22,13Z"/>
            </svg>
          )}
          {value.icon === 'target' && (
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full">
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10Z"/>
            </svg>
          )}
          {value.icon === 'handshake' && (
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full">
              <path d="M11,1.07C7.05,1.56 4,4.92 4,9H7L12,4L17,9H20C20,4.92 16.95,1.56 13,1.07V4A1,1 0 0,1 12,5A1,1 0 0,1 11,4V1.07M4,15V22H6V19H18V22H20V15H18V17H6V15H4M2,10V14H4V10H2M20,10V14H22V10H20Z"/>
            </svg>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
        {value.title}
      </h3>

      {/* Description */}
      <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-white/70 transition-colors duration-300">
        {value.description}
      </p>

      {/* Features list */}
      {value.features && value.features.length > 0 && (
        <div className="space-y-2">
          <div className="h-px bg-gray-200 dark:bg-white/10 transition-colors duration-300" />
          <ul className="mt-4 space-y-2">
            {value.features.map((feature, featureIndex) => (
              <motion.li
                key={featureIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1 + featureIndex * 0.05 + 0.3 
                }}
                className="flex items-center gap-2"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-orange-500" />
                <span className="text-xs text-gray-500 dark:text-white/60 transition-colors duration-300">
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      )}

      {/* Subtle hover gradient */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-orange-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Corner accent */}
      <div 
        className="absolute right-0 top-0 h-20 w-20 bg-gradient-to-br from-blue-500/10 to-orange-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" 
        style={{ clipPath: 'polygon(100% 0%, 0% 100%, 100% 100%)' }} 
      />
    </motion.div>
  )
}

export default function CoreValuesSection({ values }: CoreValuesSectionProps) {
  return (
    <section
      id="values"
      className="relative scroll-mt-28 overflow-hidden bg-white dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center rounded-full border border-gray-200 dark:border-white/[0.06] bg-gray-100 dark:bg-white/[0.04] px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-white/90 transition-colors duration-300"
          >
            Core Values
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Our Guiding Principles
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            The fundamental values that shape our culture, drive our decisions, and define our commitment to excellence.
          </motion.p>
        </div>

        {/* Values Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <ValueCard key={value.id} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}