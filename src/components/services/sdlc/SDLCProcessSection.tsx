'use client'

import { motion } from 'framer-motion'
import { 
  Lightbulb, 
  FileText, 
  Palette, 
  Code, 
  TestTube, 
  Rocket, 
  Headphones,
  CheckCircle 
} from 'lucide-react'

const processSteps = [
  {
    id: 1,
    title: 'Requirements Analysis',
    description: 'Deep dive into business requirements, user needs, and technical specifications to create a comprehensive project roadmap.',
    icon: Lightbulb,
    color: 'from-purple-500 to-pink-500',
    tasks: ['Stakeholder interviews', 'Business analysis', 'Technical feasibility', 'Risk assessment']
  },
  {
    id: 2,
    title: 'System Design',
    description: 'Create detailed system architecture, database design, and technical specifications that guide the development process.',
    icon: FileText,
    color: 'from-blue-500 to-indigo-500',
    tasks: ['Architecture design', 'Database modeling', 'API specification', 'Security planning']
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Design intuitive user interfaces and experiences that align with user needs and business objectives.',
    icon: Palette,
    color: 'from-green-500 to-emerald-500',
    tasks: ['User research', 'Wireframing', 'Prototyping', 'Design systems']
  },
  {
    id: 4,
    title: 'Development',
    description: 'Agile development using modern technologies and best practices with continuous integration and collaboration.',
    icon: Code,
    color: 'from-orange-500 to-red-500',
    tasks: ['Sprint planning', 'Code development', 'Code reviews', 'Version control']
  },
  {
    id: 5,
    title: 'Quality Assurance',
    description: 'Comprehensive testing including unit tests, integration tests, and user acceptance testing.',
    icon: TestTube,
    color: 'from-cyan-500 to-blue-500',
    tasks: ['Unit testing', 'Integration testing', 'Performance testing', 'Security testing']
  },
  {
    id: 6,
    title: 'Deployment',
    description: 'Seamless deployment to production environments with monitoring and performance optimization.',
    icon: Rocket,
    color: 'from-violet-500 to-purple-500',
    tasks: ['Environment setup', 'CI/CD pipeline', 'Production deployment', 'Performance monitoring']
  },
  {
    id: 7,
    title: 'Maintenance',
    description: 'Ongoing support, updates, and enhancements to ensure optimal performance and user satisfaction.',
    icon: Headphones,
    color: 'from-teal-500 to-green-500',
    tasks: ['Bug fixes', 'Feature updates', 'Performance optimization', '24/7 support']
  }
]

export default function SDLCProcessSection() {
  return (
    <section id="process" className="relative overflow-hidden bg-gray-50 dark:bg-dark-900 px-4 py-20 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300">
            Our SDLC Process
          </div>
          
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Structured Development{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Methodology
            </span>
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Our proven 7-step SDLC process ensures quality, efficiency, and successful project delivery from concept to maintenance.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col gap-8 lg:gap-16 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} shadow-lg`}>
                    <step.icon size={32} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                      Step {step.id}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {step.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex items-center space-x-3">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{task}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className="flex-1 flex items-center justify-center">
                <div className="relative">
                  {/* Main Circle */}
                  <div className={`relative h-64 w-64 rounded-full bg-gradient-to-br ${step.color} p-1 shadow-2xl`}>
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-gray-800">
                      <div className="text-center">
                        <step.icon size={64} className={`mx-auto mb-4 bg-gradient-to-br ${step.color} bg-clip-text text-transparent`} />
                        <div className="text-xl font-bold text-gray-900 dark:text-white">
                          {step.title}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Step {step.id}/7
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute -bottom-6 left-1/2 h-12 w-0.5 -translate-x-1/2 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600" />
                  )}

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ 
                      rotate: 360,
                    }}
                    transition={{ 
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 opacity-80"
                  />
                  
                  <motion.div
                    animate={{ 
                      rotate: -360,
                    }}
                    transition={{ 
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute -bottom-4 -left-4 h-6 w-6 rounded-full bg-gradient-to-br from-pink-400 to-red-500 opacity-80"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}