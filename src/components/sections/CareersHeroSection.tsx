'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CareersHeroSection() {
  const scrollToRoles = () => {
    const element = document.getElementById('open-roles')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white dark:bg-dark-950 px-4 py-20 sm:px-6 md:px-8 transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.03),_transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_right,_rgba(0,102,204,0.08),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,107,53,0.02),_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,107,53,0.06),_transparent_60%)]" />
      
      <div className="relative z-10 mx-auto max-w-7xl w-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full border border-gray-200 dark:border-white/[0.06] bg-gray-100 dark:bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-gray-700 dark:text-white/90 sm:text-sm transition-colors duration-300">
              Join Our Team
            </div>
            
            {/* Main Headline */}
            <h1 className="mb-6 text-4xl font-semibold leading-[1.1] tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl transition-colors duration-300">
              Build the Future of
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                Enterprise Technology
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-gray-600 dark:text-white/75 sm:text-lg md:text-xl transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join our team of innovators and help shape the digital transformation of 
            enterprises across Nigeria, Africa, and beyond. With 19+ years of excellence, 
            we're looking for passionate professionals ready to make a lasting impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={scrollToRoles}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-8 py-4 font-semibold text-base shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-105"
            >
              View Open Positions
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            
            <Link
              href="#culture"
              className="inline-flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/20 text-gray-900 dark:text-white px-8 py-4 font-semibold text-base transition-all duration-200 hover:bg-gray-200 dark:hover:bg-white/15 hover:border-gray-300 dark:hover:border-white/30 hover:scale-105"
            >
              Learn About Our Culture
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">19+</div>
              <div className="text-sm text-gray-600 dark:text-white/60 transition-colors duration-300">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">500+</div>
              <div className="text-sm text-gray-600 dark:text-white/60 transition-colors duration-300">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">50+</div>
              <div className="text-sm text-gray-600 dark:text-white/60 transition-colors duration-300">Team Members</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}