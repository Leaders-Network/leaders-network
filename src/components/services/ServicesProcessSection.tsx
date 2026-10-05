'use client'

import { motion } from 'framer-motion'
import { IoCheckmarkCircle, IoArrowForward } from 'react-icons/io5'

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Analysis',
    description: 'We begin with a comprehensive analysis of your business requirements, goals, and technical needs.',
    details: ['Requirements gathering', 'Stakeholder interviews', 'Technical assessment', 'Project scope definition']
  },
  {
    step: '02',
    title: 'Strategy & Planning',
    description: 'Develop a detailed project roadmap with timelines, milestones, and resource allocation.',
    details: ['Project planning', 'Architecture design', 'Technology selection', 'Risk assessment']
  },
  {
    step: '03',
    title: 'Development & Implementation',
    description: 'Our expert team builds your solution using agile methodologies and industry best practices.',
    details: ['Agile development', 'Regular updates', 'Quality assurance', 'Performance testing']
  },
  {
    step: '04',
    title: 'Deployment & Support',
    description: 'Seamless deployment to production with ongoing support and maintenance for optimal performance.',
    details: ['Production deployment', 'Performance monitoring', 'Ongoing support', 'Continuous improvement']
  }
]

export default function ServicesProcessSection() {
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
            Our Proven{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            A structured approach that ensures successful project delivery, from initial consultation to ongoing support.
          </p>
        </motion.div>

        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {step.details.map((detail, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <IoCheckmarkCircle size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  <div className="h-64 w-64 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 p-1">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-gray-800">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                          {step.step}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          Step {index + 1} of 4
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {index < processSteps.length - 1 && (
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                      <IoArrowForward className="h-6 w-6 text-gray-400 rotate-90" />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}