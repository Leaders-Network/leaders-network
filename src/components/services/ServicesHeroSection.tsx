'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { IoArrowForward, IoCode, IoServer, IoPhonePortrait, IoTrendingUp, IoPeople, IoFlash } from 'react-icons/io5'

export default function ServicesHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-dark-950 dark:via-dark-900 dark:to-blue-950 px-4 py-24 sm:px-6 sm:py-32 lg:px-8 transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 opacity-5 dark:opacity-10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-8 -left-8 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl animate-pulse" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 px-6 py-3 text-sm font-medium text-blue-700 dark:text-blue-300"
          >
            <IoFlash size={16} className="mr-2" />
            Enterprise Technology Solutions
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-7xl"
          >
            Transform Your Business with{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Cutting-Edge Technology
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12 mx-auto max-w-4xl text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl"
          >
            From software development lifecycle (SDLC) to data analytics and IT consulting, 
            we deliver enterprise-grade solutions that convert prospects into customers and scale with your ambitions. 
            <strong className="text-gray-900 dark:text-white"> Trusted by 500+ organizations worldwide.</strong>
          </motion.p>

          {/* Service Icons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12 flex flex-wrap items-center justify-center gap-8"
          >
            {[
              { icon: IoCode, label: 'Software Development', color: 'text-blue-600' },
              { icon: IoServer, label: 'Data Analytics', color: 'text-green-600' },
              { icon: IoPeople, label: 'IT Consulting', color: 'text-purple-600' },
              { icon: IoPhonePortrait, label: 'Mobile Apps', color: 'text-indigo-600' },
              { icon: IoTrendingUp, label: 'Digital Marketing', color: 'text-pink-600' }
            ].map((service, index) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group flex flex-col items-center space-y-2 p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-white/5 transition-all duration-300"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={24} />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {service.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href="/contactus"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30"
            >
              Get Started Today
              <IoArrowForward size={18} className="ml-2" />
            </Link>
            
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-transparent px-8 py-4 text-base font-semibold text-gray-900 dark:text-white transition-all duration-200 hover:border-blue-600 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3"
          >
            {[
              { number: '500+', label: 'Projects Delivered', description: 'Enterprise solutions worldwide' },
              { number: '98%', label: 'Client Satisfaction', description: 'Consistent excellence rating' },
              { number: '19+', label: 'Years of Excellence', description: 'Industry leadership & innovation' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-white/5 p-6 text-center backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                  {stat.number}
                </div>
                <div className="mt-2 text-base font-semibold text-gray-700 dark:text-gray-300">
                  {stat.label}
                </div>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}