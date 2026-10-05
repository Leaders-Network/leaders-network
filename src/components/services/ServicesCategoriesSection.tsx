'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { IoArrowForward, IoCode, IoServer, IoPeople, IoPhonePortrait, IoTrendingUp, IoSettings } from 'react-icons/io5'

const services = [
  {
    id: 'sdlc',
    title: 'SDLC Software Development',
    description: 'End-to-end software development lifecycle with modern methodologies. From planning to deployment, we build scalable, maintainable applications using cutting-edge technologies.',
    image: '/images/about-software.jpg',
    icon: Code,
    color: 'from-blue-500 to-indigo-500',
    href: '/ourservices/sdlc',
    features: ['Agile Development', 'Quality Assurance', 'DevOps Integration', 'Scalable Architecture'],
    subServices: [
      { name: 'Web Development', href: '/ourservices/sdlc/web-development' },
      { name: 'Mobile Apps', href: '/ourservices/sdlc/app-development' }
    ]
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting & Strategy',
    description: 'Strategic technology consulting to optimize your infrastructure, accelerate digital transformation, and align technology with business objectives for maximum ROI.',
    image: '/images/architecture.jpg',
    icon: Users,
    color: 'from-purple-500 to-pink-500',
    href: '/ourservices/it-consulting',
    features: ['Digital Strategy', 'Cloud Migration', 'System Integration', 'Technology Roadmaps'],
    subServices: []
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis & Intelligence',
    description: 'Transform your data into actionable business insights with advanced analytics, machine learning, and business intelligence solutions that drive informed decision-making.',
    image: '/images/data-analysis.jpg',
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    href: '/ourservices/data-analysis',
    features: ['Business Intelligence', 'Machine Learning', 'Data Visualization', 'Predictive Analytics'],
    subServices: []
  },
  {
    id: 'social-media',
    title: 'Social Media Advertising',
    description: 'Strategic social media campaigns across all major platforms. Reach your target audience, build brand awareness, and drive conversions with data-driven marketing.',
    image: '/images/data-analysis-img.jpg',
    icon: TrendingUp,
    color: 'from-pink-500 to-orange-500',
    href: '/ourservices/social-media-advert',
    features: ['Campaign Strategy', 'Multi-Platform Management', 'Analytics & Reporting', 'Content Creation'],
    subServices: []
  }
]

export default function ServicesCategoriesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-white dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Our Service Categories
          </div>
          
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Comprehensive Technology{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            From concept to deployment, we offer end-to-end technology services that help businesses scale, innovate, and achieve their digital transformation goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative rounded-3xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}
            >
              <div className={`grid grid-cols-1 gap-8 lg:gap-16 ${
                index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'
              }`}>
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 0 ? '' : 'lg:order-2'}`}>
                  <div className="flex items-center space-x-4">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} shadow-lg`}>
                      <service.icon size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white lg:text-3xl">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${service.color}`} />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Sub-services */}
                  {service.subServices.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                        Specialized Services
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.subServices.map((subService, subIndex) => (
                          <IoLink
                            key={subIndex}
                            href={subService.href}
                            className="inline-flex items-center rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                          >
                            {subService.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <IoLink
                      href={service.href}
                      className={`inline-flex items-center justify-center rounded-full bg-gradient-to-r ${service.color} px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl`}
                    >
                      Learn More
                      <IoArrowForward size={16} className="ml-2" />
                    </Link>
                    
                    <IoLink
                      href="/contactus"
                      className="inline-flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-transparent px-6 py-3 text-base font-semibold text-gray-900 dark:text-white hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className={`relative ${index % 2 === 0 ? '' : 'lg:order-1'}`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                  </div>

                  {/* Floating Badge */}
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -bottom-4 -right-4 rounded-2xl bg-white dark:bg-gray-800 p-4 shadow-xl border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r ${service.color}`}>
                        <IoSettings size={16} className="text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-900 dark:text-white">Enterprise Ready</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Production Grade</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}