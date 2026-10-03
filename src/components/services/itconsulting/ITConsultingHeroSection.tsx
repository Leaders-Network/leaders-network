'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Settings, Target, Users } from 'lucide-react'

export default function ITConsultingHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-dark-950 dark:via-dark-900 dark:to-purple-950 px-4 py-24 sm:px-6 sm:py-32 lg:px-8 transition-colors duration-300">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20 px-4 py-2 text-sm font-medium text-purple-700 dark:text-purple-300">
              <Settings size={16} className="mr-2" />
              Strategic IT Consulting
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Transform Your{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                Technology Strategy
              </span>
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
              Expert IT consulting services to optimize your technology infrastructure, streamline operations, and accelerate digital transformation.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-start justify-center">
              <Link
                href="/contactus"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-3xl">
              <Image
                src="/images/architecture.jpg"
                alt="IT Consulting"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}