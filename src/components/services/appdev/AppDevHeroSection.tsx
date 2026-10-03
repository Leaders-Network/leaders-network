'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function AppDevHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-dark-950 dark:via-dark-900 dark:to-indigo-950 px-4 py-24 sm:px-6 sm:py-32 lg:px-8 transition-colors duration-300">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Mobile App{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                Development
              </span>
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
              Native and cross-platform mobile applications for iOS and Android with exceptional user experiences.
            </p>

            <Link
              href="/contactus"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105"
            >
              Build Your App
            </Link>
          </motion.div>
          <div className="relative aspect-square overflow-hidden rounded-3xl">
            <Image src="/images/mobile-app-development.avif" alt="Mobile App Development" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}