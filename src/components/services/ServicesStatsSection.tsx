'use client'

import { motion } from 'framer-motion'

const stats = [
  { number: '500+', label: 'Projects Completed', description: 'Successful deliveries worldwide' },
  { number: '98%', label: 'Client Retention', description: 'Long-term partnerships' },
  { number: '19+', label: 'Years Experience', description: 'Industry expertise' },
  { number: '24/7', label: 'Support Available', description: 'Round-the-clock assistance' }
]

export default function ServicesStatsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Proven Track Record
          </h2>
          <p className="text-xl text-blue-100">
            Numbers that speak to our commitment and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-blue-100 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-blue-200">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}