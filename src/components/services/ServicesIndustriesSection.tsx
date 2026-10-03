'use client'

import { motion } from 'framer-motion'

const industries = [
  'Financial Services',
  'Healthcare',
  'Government',
  'Telecommunications',
  'E-commerce',
  'Manufacturing',
  'Education',
  'Real Estate'
]

export default function ServicesIndustriesSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-dark-900 px-4 py-20 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Trusted Across Industries
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}