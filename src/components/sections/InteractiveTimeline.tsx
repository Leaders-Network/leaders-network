'use client'

import { motion } from 'framer-motion'
import { CompanyMilestone } from '@/types/about'

interface InteractiveTimelineProps {
  milestones: CompanyMilestone[]
}

function TimelineNode({ 
  milestone, 
  index, 
  isLast 
}: { 
  milestone: CompanyMilestone
  index: number
  isLast: boolean 
}) {
  const isHighlight = milestone.isHighlight || false
  
  return (
    <div className="relative flex items-start gap-6 pb-12 last:pb-0">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-12 h-full w-px bg-gray-200 dark:bg-white/10 transition-colors duration-300" />
      )}
      
      {/* Timeline node */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ 
          duration: 0.5, 
          delay: index * 0.1,
          type: "spring",
          stiffness: 200
        }}
        className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 transition-all duration-300 ${
          isHighlight 
            ? 'border-orange-500 bg-orange-500 shadow-[0_0_20px_rgba(255,107,53,0.4)]' 
            : 'border-gray-300 dark:border-white/20 bg-white dark:bg-dark-950'
        }`}
      >
        {milestone.icon ? (
          <div className={`h-6 w-6 ${isHighlight ? 'text-white' : 'text-gray-600 dark:text-white/70'}`}>
            {milestone.icon === 'rocket' && (
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full">
                <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2M12 21.5C12.83 21.5 13.5 20.83 13.5 20C13.5 19.17 12.83 18.5 12 18.5C11.17 18.5 10.5 19.17 10.5 20C10.5 20.83 11.17 21.5 12 21.5M8 21.5C8.83 21.5 9.5 20.83 9.5 20C9.5 19.17 8.83 18.5 8 18.5C7.17 18.5 6.5 19.17 6.5 20C6.5 20.83 7.17 21.5 8 21.5M16 21.5C16.83 21.5 17.5 20.83 17.5 20C17.5 19.17 16.83 18.5 16 18.5C15.17 18.5 14.5 19.17 14.5 20C14.5 20.83 15.17 21.5 16 21.5Z"/>
              </svg>
            )}
            {milestone.icon === 'building' && (
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full">
                <path d="M17 7H22V17H17V19A1 1 0 0 1 16 20H8A1 1 0 0 1 7 19V17H2V7H7V5A1 1 0 0 1 8 4H16A1 1 0 0 1 17 5V7M4 9V15H5V9H4M9 6V18H15V6H9M19 9V15H20V9H19M11 8H13V10H11V8M11 12H13V14H11V12M11 16H13V18H11V16Z"/>
              </svg>
            )}
            {milestone.icon === 'government' && (
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full">
                <path d="M12 1L22 6V8H20V17H22V19H2V17H4V8H2V6L12 1M6 8V17H8V8H6M10 8V17H12V8H10M14 8V17H16V8H14M18 8V17H20V8H18Z"/>
              </svg>
            )}
            {milestone.icon === 'globe' && (
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full">
                <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2M11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93M17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z"/>
              </svg>
            )}
            {milestone.icon === 'lightbulb' && (
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full">
                <path d="M12 2A7 7 0 0 0 5 9C5 11.38 6.19 13.47 8 14.74V17A1 1 0 0 0 9 18H15A1 1 0 0 0 16 17V14.74C17.81 13.47 19 11.38 19 9A7 7 0 0 0 12 2M9 21V20H15V21A1 1 0 0 1 14 22H10A1 1 0 0 1 9 21Z"/>
              </svg>
            )}
            {milestone.icon === 'star' && (
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.62L12 2L9.19 8.62L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
              </svg>
            )}
          </div>
        ) : (
          <div className={`h-3 w-3 rounded-full ${
            isHighlight ? 'bg-white' : 'bg-gradient-to-r from-blue-500 to-orange-500'
          }`} />
        )}
        
        {/* Glow effect for highlights */}
        {isHighlight && (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-orange-500/20 blur-md"
          />
        )}
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
        className={`flex-1 rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg ${
          isHighlight
            ? 'border-orange-200 dark:border-orange-500/20 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-500/5 dark:to-orange-500/10'
            : 'border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:bg-gray-50 dark:hover:bg-white/[0.05]'
        }`}
      >
        {/* Year badge */}
        <div className={`mb-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold transition-colors duration-300 ${
          isHighlight
            ? 'bg-orange-500 text-white'
            : 'bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/80'
        }`}>
          {milestone.year}
        </div>

        {/* Title */}
        <h3 className={`mb-2 text-lg font-semibold transition-colors duration-300 ${
          isHighlight
            ? 'text-orange-900 dark:text-orange-100'
            : 'text-gray-900 dark:text-white'
        }`}>
          {milestone.title}
        </h3>

        {/* Description */}
        <p className={`text-sm leading-relaxed transition-colors duration-300 ${
          isHighlight
            ? 'text-orange-800 dark:text-orange-200'
            : 'text-gray-600 dark:text-white/70'
        }`}>
          {milestone.description}
        </p>
      </motion.div>
    </div>
  )
}

export default function InteractiveTimeline({ milestones }: InteractiveTimelineProps) {
  return (
    <section
      id="timeline"
      className="relative scroll-mt-28 overflow-hidden bg-white dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300"
    >
      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center rounded-full border border-gray-200 dark:border-white/[0.06] bg-gray-100 dark:bg-white/[0.04] px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-white/90 transition-colors duration-300"
          >
            Our Journey
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Two Decades of Innovation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            From humble beginnings to industry leadership, explore the key milestones that shaped our growth and expertise.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {milestones.map((milestone, index) => (
            <TimelineNode
              key={milestone.id}
              milestone={milestone}
              index={index}
              isLast={index === milestones.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}