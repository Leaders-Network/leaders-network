'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { IoArrowForward, IoCode, IoPeople, IoFlash, IoShield } from 'react-icons/io5'

export default function SDLCHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-dark-950 dark:via-dark-900 dark:to-blue-950 px-4 py-24 sm:px-6 sm:py-32 lg:px-8 transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-5 dark:opacity-10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-8 -left-8 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl animate-pulse" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300"
            >
              <IoCode size={16} className="mr-2" />
              SDLC Excellence
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl"
            >
              Software Development{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Lifecycle
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl"
            >
              From concept to deployment, we deliver enterprise-grade software solutions using industry-leading SDLC methodologies. Our agile approach ensures quality, scalability, and on-time delivery.
            </motion.p>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8 grid grid-cols-2 gap-4 text-sm"
            >
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <IoPeople size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
                Agile Methodology
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <IoShield size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
                Quality Assurance
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <IoFlash size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
                Rapid Deployment
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <IoCode size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
                Modern Tech Stack
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col gap-4 sm:flex-row lg:justify-start justify-center"
            >
              <IoLink
                href="/contactus"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30"
              >
                Start Your Project
                <IoArrowForward size={18} className="ml-2" />
              </Link>
              
              <IoLink
                href="#process"
                className="inline-flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-transparent px-8 py-4 text-base font-semibold text-gray-900 dark:text-white transition-all duration-200 hover:border-blue-600 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              >
                View Our Process
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-lg">
              {/* Main Image */}
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 p-8 shadow-2xl">
                <Image
                  src="/images/about-software.jpg"
                  alt="Software Development Process"
                  fill
                  className="object-cover opacity-90"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-indigo-600/80 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <IoCode size={40} />
                    </div>
                    <div className="text-lg font-semibold">Enterprise-Grade</div>
                    <div className="text-sm opacity-90">Development Solutions</div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -left-6 rounded-2xl bg-white dark:bg-gray-800 p-4 shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                    <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900 dark:text-white">99.9% Uptime</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Production Ready</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-6 -right-6 rounded-2xl bg-white dark:bg-gray-800 p-4 shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <IoFlash size={16} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900 dark:text-white">Fast Delivery</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Agile Sprints</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}