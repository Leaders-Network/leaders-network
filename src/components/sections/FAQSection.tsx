'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: "What types of projects does Leaders Network specialize in?",
    answer: "We specialize in enterprise software development, digital transformation initiatives, government portal systems, financial services platforms, healthcare management solutions, and custom business applications. Our expertise spans web development, mobile apps, data analysis platforms, and smart card technology implementations."
  },
  {
    question: "How long does a typical project take to complete?",
    answer: "Project timelines vary based on scope and complexity. Simple web applications typically take 2-4 months, while enterprise systems can take 6-12 months. Government and financial sector projects often require 12-18 months due to compliance requirements. We provide detailed project timelines during our initial consultation phase."
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes, we offer comprehensive post-launch support including 24/7 monitoring, regular updates, security patches, performance optimization, and feature enhancements. Our support packages are tailored to your specific needs and can include dedicated support teams for enterprise clients."
  },
  {
    question: "What is your approach to data security and compliance?",
    answer: "Security is paramount in all our solutions. We implement enterprise-grade security protocols, conduct regular security audits, ensure compliance with international standards (ISO 27001, SOC 2), and maintain strict data protection measures. All our systems are designed with security-by-design principles."
  },
  {
    question: "Can you help us migrate from legacy systems?",
    answer: "Absolutely. Legacy system migration is one of our core specialties. We have successfully migrated complex enterprise systems for banks, government agencies, and large corporations. Our approach ensures minimal downtime, data integrity, and seamless user transition through phased migration strategies."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, we serve clients across Nigeria, West Africa, and internationally including partnerships in the USA, India, United Kingdom, and South Africa. We have experience with cross-border projects, international compliance requirements, and remote collaboration across different time zones."
  }
]

export default function FAQSection() {
  // -1 means all closed (the screenshot shows every row closed)
  const [openIndex, setOpenIndex] = useState(-1)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section
      id="faq"
      className="relative scroll-mt-28 overflow-hidden bg-white dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center rounded-full border border-gray-200 dark:border-white/[0.06] bg-gray-100 dark:bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-gray-700 dark:text-white/90 sm:text-sm transition-colors duration-300"
          >
            FAQ
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            Everything you need to know about working with Leaders Network and our technology solutions.
          </motion.p>
        </div>

        {/* Accordion */}
        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={index}
                className={`overflow-hidden rounded-3xl border bg-gradient-to-br from-white to-gray-50 dark:from-white/[0.05] dark:to-white/[0.015] shadow-[0_10px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-colors duration-300 ${
                  isOpen ? 'border-blue-300 dark:border-white/15' : 'border-gray-200 dark:border-white/[0.05] hover:border-gray-300 dark:hover:border-white/10'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-8 sm:py-6"
                >
                  <h3 className="text-base font-medium leading-snug text-gray-900 dark:text-white sm:text-lg transition-colors duration-300">
                    {faq.question}
                  </h3>

                  {/* Blue/white button for light mode, white button for dark mode */}
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:bg-white text-white dark:text-black shadow-lg dark:shadow-glow-white sm:h-11 sm:w-11"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="h-4 w-4"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 pr-16 text-sm leading-relaxed text-gray-600 dark:text-white/70 sm:px-8 sm:pb-8 sm:text-base transition-colors duration-300">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Still have questions */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-4 rounded-full border border-gray-200 dark:border-white/[0.06] bg-gray-100 dark:bg-white/[0.04] py-2 pl-6 pr-2 transition-colors duration-300">
            <span className="text-sm text-gray-600 dark:text-white/80 transition-colors duration-300">Still have questions?</span>
            <Link
              href="/contactus"
              className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:bg-white px-5 py-2 text-sm font-medium text-white dark:text-black shadow-lg dark:shadow-glow-white transition-all hover:scale-105 duration-200"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}