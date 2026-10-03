'use client'

import { motion } from 'framer-motion'
import { CompanyStats } from '@/types/about'

interface AboutHeroSectionProps {
  pillBadge: string
  headline: string
  subtitle: string
  stats: CompanyStats[]
}

export default function AboutHeroSection({
  pillBadge,
  headline,
  subtitle,
  stats
}: AboutHeroSectionProps) {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-white dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(0,0,0,0.03),_transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.06),_transparent_55%)]" />
      
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          {/* Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center rounded-full border border-gray-200 dark:border-white/[0.06] bg-gray-100 dark:bg-white/[0.04] px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-white/90 transition-colors duration-300"
          >
            {pillBadge}
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6 text-4xl font-semibold leading-[1.05] tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl xl:text-7xl transition-colors duration-300"
          >
            {headline}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mb-12 max-w-3xl text-base leading-relaxed text-gray-600 dark:text-white/75 sm:text-lg md:text-xl transition-colors duration-300"
          >
            {subtitle}
          </motion.p>

          {/* Stats Counter Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.7 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="relative"
              >
                {/* Stat Number */}
                <div className="mb-2 text-5xl font-semibold leading-none tracking-tighter text-gray-900 dark:text-white sm:text-6xl md:text-7xl transition-colors duration-300">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-white/80 bg-clip-text text-transparent"
                  >
                    {stat.number}
                  </motion.span>
                </div>

                {/* Stat Label */}
                <div className="text-sm font-medium text-gray-600 dark:text-white/70 sm:text-base md:text-lg transition-colors duration-300">
                  {stat.label}
                </div>

                {/* Optional Description */}
                {stat.description && (
                  <div className="mt-2 text-xs text-gray-500 dark:text-white/50 transition-colors duration-300">
                    {stat.description}
                  </div>
                )}

                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-blue-500/5 to-orange-500/5 opacity-0 transition-opacity duration-300 hover:opacity-100 dark:from-blue-400/10 dark:to-orange-400/10" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-gray-300 dark:border-white/20 transition-colors duration-300"
        >
          <div className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-600 dark:bg-white/60 transition-colors duration-300" />
        </motion.div>
      </motion.div>
    </section>
  )
}