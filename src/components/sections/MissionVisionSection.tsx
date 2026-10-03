'use client'

import { motion } from 'framer-motion'
import { MissionVision } from '@/types/about'

interface MissionVisionSectionProps {
  data: MissionVision
}

function MissionVisionCard({
  title,
  content,
  highlights,
  delay = 0
}: {
  title: string
  content: string
  highlights?: string[]
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/[0.05] bg-gradient-to-br from-white to-gray-50 dark:from-white/[0.05] dark:to-white/[0.015] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_25px_70px_rgba(0,0,0,0.6)] sm:p-10 lg:p-12"
    >
      {/* Subtle background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-orange-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      <div className="relative z-10">
        {/* Title */}
        <h3 className="mb-6 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-3xl transition-colors duration-300">
          {title}
        </h3>

        {/* Content */}
        <p className="mb-6 text-base leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300">
          {content}
        </p>

        {/* Highlights if provided */}
        {highlights && highlights.length > 0 && (
          <div className="space-y-3">
            <div className="h-px bg-gray-200 dark:bg-white/10 transition-colors duration-300" />
            <ul className="space-y-2">
              {highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: delay + 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-orange-500" />
                  <span className="text-sm text-gray-500 dark:text-white/60 transition-colors duration-300">
                    {highlight}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Decorative corner accent */}
      <div className="absolute right-0 top-0 h-20 w-20 bg-gradient-to-br from-blue-500/10 to-orange-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" 
           style={{ clipPath: 'polygon(100% 0%, 0% 100%, 100% 100%)' }} />
    </motion.div>
  )
}

export default function MissionVisionSection({ data }: MissionVisionSectionProps) {
  return (
    <section
      id="mission-vision"
      className="relative scroll-mt-28 overflow-hidden bg-gray-50 dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center rounded-full border border-gray-200 dark:border-white/[0.06] bg-gray-100 dark:bg-white/[0.04] px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-white/90 transition-colors duration-300"
          >
            Our Foundation
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Mission & Vision
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            The guiding principles that drive our commitment to excellence and innovation in every project we undertake.
          </motion.p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <MissionVisionCard
            title={data.mission.title}
            content={data.mission.content}
            highlights={data.mission.highlights}
            delay={0}
          />
          <MissionVisionCard
            title={data.vision.title}
            content={data.vision.content}
            highlights={data.vision.highlights}
            delay={0.2}
          />
        </div>
      </div>
    </section>
  )
}