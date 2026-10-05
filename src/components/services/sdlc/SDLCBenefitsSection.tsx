'use client'

import { motion } from 'framer-motion'
import { IoFlash, IoShield, IoPeople, IoTrendingUp, IoTime, IoTrophy } from 'react-icons/io5'

const benefits = [
  {
    icon: IoFlash,
    title: 'Faster Time to Market',
    description: 'Agile methodology and efficient processes reduce development time by up to 40%',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: IoShield,
    title: 'Enhanced Security',
    description: 'Built-in security practices and regular audits ensure your application is protected',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: IoPeople,
    title: 'Collaborative Approach',
    description: 'Transparent communication and regular updates keep you involved throughout',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: IoTrendingUp,
    title: 'Scalable Solutions',
    description: 'Architecture designed to grow with your business needs and user base',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: IoTime,
    title: 'Reduced Maintenance',
    description: 'Clean code and documentation minimize long-term maintenance costs',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: IoTrophy,
    title: 'Quality Assurance',
    description: 'Comprehensive testing ensures bug-free, reliable software delivery',
    color: 'from-red-500 to-pink-500'
  }
]

export default function SDLCBenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-dark-900 px-4 py-20 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Why Choose Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              SDLC Approach
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${benefit.color}`}>
                <benefit.icon size={32} className="text-white" />
              </div>
              
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}