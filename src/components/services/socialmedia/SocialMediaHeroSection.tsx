'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function SocialMediaHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-orange-50 dark:from-dark-950 dark:via-dark-900 dark:to-pink-950 px-4 py-24 sm:px-6 sm:py-32 lg:px-8 transition-colors duration-300">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Social Media{' '}
              <span className="bg-gradient-to-r from-pink-600 to-orange-600 dark:from-pink-400 dark:to-orange-400 bg-clip-text text-transparent">
                Advertising
              </span>
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
              Reach your target audience with strategic social media campaigns across all major platforms.
            </p>

            <Link
              href="/contactus"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-600 to-orange-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105"
            >
              Start Campaign
            </Link>
          </motion.div>
          <div className="relative aspect-square overflow-hidden rounded-3xl">
            <Image src="/images/data-analysis.jpg" alt="Social Media" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}