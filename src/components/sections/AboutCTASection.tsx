'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface AboutCTASectionProps {
  headline: string
  description: string
  primaryButton: {
    text: string
    href: string
  }
  secondaryButton: {
    text: string
    href: string
  }
}

export default function AboutCTASection({
  headline,
  description,
  primaryButton,
  secondaryButton
}: AboutCTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-orange-500/5 dark:from-blue-400/10 dark:to-orange-400/10" />
      
      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-3xl border border-gray-200 dark:border-white/[0.05] bg-gradient-to-br from-white to-gray-50 dark:from-white/[0.05] dark:to-white/[0.015] p-12 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] text-center lg:p-16"
        >
          {/* Decorative elements */}
          <div className="absolute left-0 top-0 h-32 w-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-2xl" />
          <div className="absolute right-0 bottom-0 h-32 w-32 bg-gradient-to-tl from-orange-500/20 to-transparent rounded-full blur-2xl" />
          
          <div className="relative z-10">
            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
            >
              {headline}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-white/80 transition-colors duration-300"
            >
              {description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link
                href={primaryButton.href}
                className="group inline-flex min-w-[200px] items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-105 hover:from-orange-400 hover:to-orange-500 hover:shadow-xl hover:shadow-orange-500/30"
              >
                {primaryButton.text}
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </Link>

              <Link
                href={secondaryButton.href}
                className="group inline-flex min-w-[200px] items-center justify-center rounded-full border border-gray-300 dark:border-white/20 bg-white/80 dark:bg-white/[0.08] px-8 py-4 text-base font-semibold text-gray-900 dark:text-white backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-gray-400 dark:hover:border-white/30 hover:bg-white dark:hover:bg-white/15 hover:shadow-lg"
              >
                {secondaryButton.text}
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex items-center justify-center gap-8 text-sm text-gray-500 dark:text-white/50"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>500+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                <span>98% Client Satisfaction</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-orange-500" />
                <span>19+ Years Experience</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}