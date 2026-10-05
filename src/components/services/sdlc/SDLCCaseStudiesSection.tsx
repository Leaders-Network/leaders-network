'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { IoOpenOutline, IoArrowForward } from 'react-icons/io5'

const caseStudies = [
  {
    title: 'E-Commerce Platform Modernization',
    client: 'Regional Retailer',
    challenge: 'Legacy system migration to modern cloud-based platform',
    solution: 'Complete platform rebuild using React, Node.js, and AWS',
    results: ['300% performance improvement', '50% faster checkout process', '99.9% uptime achieved'],
    image: '/images/data-analysis.jpg',
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL']
  },
  {
    title: 'Financial Services Dashboard',
    client: 'Investment Firm',
    challenge: 'Real-time data visualization for investment tracking',
    solution: 'Custom dashboard with real-time analytics and reporting',
    results: ['Real-time data processing', '40% faster decision making', 'Improved client satisfaction'],
    image: '/images/architecture.jpg',
    technologies: ['Vue.js', 'Python', 'Redis', 'Chart.js']
  },
  {
    title: 'Healthcare Management System',
    client: 'Medical Center',
    challenge: 'Digital transformation of patient management processes',
    solution: 'Comprehensive patient management and scheduling system',
    results: ['60% reduction in admin time', 'Improved patient experience', 'HIPAA compliant'],
    image: '/images/development.jpg',
    technologies: ['Angular', '.NET', 'SQL Server', 'Azure']
  }
]

export default function SDLCCaseStudiesSection() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-dark-950 px-4 py-20 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Success{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            See how our SDLC methodology has delivered exceptional results for clients across industries.
          </p>
        </motion.div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col gap-8 lg:gap-16 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image */}
              <div className="flex-1">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {study.client}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {study.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Challenge</h4>
                    <p className="text-gray-600 dark:text-gray-300">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Solution</h4>
                    <p className="text-gray-600 dark:text-gray-300">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-center text-green-600 dark:text-green-400">
                          <IoArrowForward size={16} className="mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-700 dark:text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  View Case Study
                  <IoOpenOutline size={16} className="ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}