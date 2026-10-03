'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const technologies = {
  frontend: [
    { name: 'React', logo: '/images/react.png', description: 'Modern UI development' },
    { name: 'Next.js', logo: '/images/nextjs.png', description: 'Full-stack React framework' },
    { name: 'Vue.js', logo: '/images/vue.png', description: 'Progressive JavaScript framework' },
    { name: 'Angular', logo: '/images/angular.png', description: 'Enterprise web applications' },
    { name: 'TypeScript', logo: '/images/typescript.png', description: 'Type-safe JavaScript' },
    { name: 'Tailwind CSS', logo: '/images/tailwind.png', description: 'Utility-first CSS framework' }
  ],
  backend: [
    { name: 'Node.js', logo: '/images/nodejs.png', description: 'JavaScript runtime' },
    { name: 'Python', logo: '/images/python.png', description: 'Versatile programming language' },
    { name: 'Java', logo: '/images/java.png', description: 'Enterprise-grade development' },
    { name: '.NET', logo: '/images/dotnet.png', description: 'Microsoft development platform' },
    { name: 'PHP', logo: '/images/php.png', description: 'Web development language' },
    { name: 'Go', logo: '/images/go.png', description: 'High-performance backend' }
  ],
  database: [
    { name: 'PostgreSQL', logo: '/images/postgresql.png', description: 'Advanced relational database' },
    { name: 'MongoDB', logo: '/images/mongodb.png', description: 'NoSQL document database' },
    { name: 'MySQL', logo: '/images/mysql.png', description: 'Popular relational database' },
    { name: 'Redis', logo: '/images/redis.png', description: 'In-memory data store' }
  ],
  cloud: [
    { name: 'AWS', logo: '/images/aws.png', description: 'Amazon Web Services' },
    { name: 'Google Cloud', logo: '/images/gcp.png', description: 'Google Cloud Platform' },
    { name: 'Microsoft Azure', logo: '/images/azure.png', description: 'Microsoft cloud services' },
    { name: 'Docker', logo: '/images/docker.png', description: 'Containerization platform' }
  ]
}

export default function SDLCTechnologiesSection() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-dark-950 px-4 py-20 sm:px-6 lg:px-8 transition-colors duration-300">
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
            Our Technology Stack
          </div>
          
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Cutting-Edge{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            We leverage the latest technologies and frameworks to build scalable, maintainable, and high-performance applications.
          </p>
        </motion.div>

        {/* Technology Categories */}
        <div className="space-y-16">
          {Object.entries(technologies).map(([category, techs], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <h3 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white capitalize">
                {category} Technologies
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {techs.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className="group relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6 text-center transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    {/* Tech Logo */}
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white dark:bg-gray-700 shadow-sm">
                        {/* Fallback for missing images */}
                        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                          {tech.name.charAt(0)}
                        </div>
                      </div>
                    </div>
                    
                    {/* Tech Name */}
                    <h4 className="mb-2 font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tech.name}
                    </h4>
                    
                    {/* Tech Description */}
                    <p className="text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {tech.description}
                    </p>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8">
            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              Don't see your preferred technology?
            </h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              We're always adapting to new technologies and can work with your existing tech stack.
            </p>
            <button className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl">
              Discuss Your Requirements
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}