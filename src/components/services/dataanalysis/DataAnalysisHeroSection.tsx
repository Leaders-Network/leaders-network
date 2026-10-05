'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { IoBarChart, IoTrendingUp, IoServer, IoEllipse } from 'react-icons/io5'

export default function DataAnalysisHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-dark-950 dark:via-dark-900 dark:to-green-950 px-4 py-24 sm:px-6 sm:py-32 lg:px-8 transition-colors duration-300">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 px-4 py-2 text-sm font-medium text-green-700 dark:text-green-300">
              <IoBarChart size={16} className="mr-2" />
              Data Analytics Excellence
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Transform Data Into{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
                Business Intelligence
              </span>
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
              Unlock the power of your data with advanced analytics, machine learning, and business intelligence solutions that drive informed decision-making.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-start justify-center">
              <IoLink
                href="/contactus"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105"
              >
                Get Started
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
                src="/images/data-analysis.jpg"
                alt="Data Analysis"
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