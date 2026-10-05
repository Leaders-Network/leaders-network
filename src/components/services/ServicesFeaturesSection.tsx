'use client'

import { motion } from 'framer-motion'
import { IoShield, IoFlash, IoPeople, IoTrophy, IoTime, IoTrendingUp } from 'react-icons/io5'

const features = [
  {
    icon: IoShield,
    title: 'Enterprise Security',
    description: 'Bank-level security with encryption, compliance, and regular audits.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: IoFlash,
    title: 'Rapid Deployment',
    description: 'Agile methodologies ensure faster time-to-market without compromising quality.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: IoPeople,
    title: 'Expert Team',
    description: 'Seasoned professionals with deep expertise in enterprise technologies.',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: IoTrophy,
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality control processes ensure reliable solutions.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: IoTime,
    title: '24/7 Support',
    description: 'Round-the-clock support and maintenance for mission-critical systems.',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: IoTrendingUp,
    title: 'Scalable Solutions',
    description: 'Future-proof architecture that grows with your business needs.',
    color: 'from-red-500 to-pink-500'
  }
]

export default function ServicesFeaturesSection() {
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
            Why Choose{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Leaders Network
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group rounded-3xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-8 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color}`}>
                <feature.icon size={32} className="text-white" />
              </div>
              
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}