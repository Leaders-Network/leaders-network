'use client'

import { motion } from 'framer-motion'
import type { Perk } from '@/types/careers'

const perks: Perk[] = [
  {
    id: 'compensation',
    title: 'Competitive Compensation',
    description: 'Market-leading salaries with performance bonuses and equity participation for senior roles.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 'flexibility',
    title: 'Remote & Hybrid Options',
    description: 'Work from anywhere in Nigeria or our Lagos office. Flexible hours that adapt to your productivity schedule.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9z" />
      </svg>
    )
  },
  {
    id: 'learning',
    title: 'Learning & Development',
    description: '₦500k annual learning stipend for courses, conferences, certifications, and professional development.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    )
  },
  {
    id: 'health',
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance for you and your family, plus mental health support and wellness programs.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    )
  },
  {
    id: 'technology',
    title: 'Modern Tech Stack',
    description: 'Work with cutting-edge technologies: React, Node.js, TypeScript, AWS, Docker, and the latest enterprise tools.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    )
  },
  {
    id: 'time-off',
    title: 'Generous Time Off',
    description: '25 days annual leave, public holidays, plus flexible sick leave and parental leave policies.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 012.25 2.25v7.5" />
      </svg>
    )
  }
]

export default function PerksAndBenefitsSection() {
  return (
    <section className="relative scroll-mt-28 bg-white dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center rounded-full border border-gray-200 dark:border-white/[0.06] bg-gray-100 dark:bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-gray-700 dark:text-white/90 sm:text-sm transition-colors duration-300"
          >
            Perks & Benefits
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            More Than Just a Paycheck
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            We believe in investing in our team's success, well-being, and professional growth. 
            Here's what you can expect as a Leaders Network team member.
          </motion.p>
        </div>

        {/* Perks Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((perk, index) => (
            <motion.div
              key={perk.id}
              className="group relative rounded-2xl border border-gray-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.02] p-6 shadow-sm dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-gray-300 dark:hover:border-white/20 hover:shadow-md dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 dark:bg-white text-white dark:text-black transition-all duration-300 group-hover:scale-110">
                {perk.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                  {perk.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-white/70 transition-colors duration-300">
                  {perk.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-4 rounded-full border border-gray-200 dark:border-white/[0.06] bg-gray-100 dark:bg-white/[0.04] py-2 pl-6 pr-2 transition-colors duration-300">
            <span className="text-sm text-gray-600 dark:text-white/80 transition-colors duration-300">
              Ready to join our amazing team?
            </span>
            <a
              href="#open-roles"
              className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:bg-white px-5 py-2 text-sm font-medium text-white dark:text-black shadow-lg transition-all hover:scale-105 duration-200"
            >
              View Positions →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}