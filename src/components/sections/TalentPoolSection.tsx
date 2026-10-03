'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { TalentPoolApplication } from '@/types/careers'

export default function TalentPoolSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState<Partial<TalentPoolApplication>>({
    fullName: '',
    email: '',
    phone: '',
    linkedInProfile: '',
    portfolioUrl: '',
    coverLetter: '',
    interestedRoles: []
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the form submission
    console.log('Form submitted:', formData)
    setIsModalOpen(false)
    // Show success message or redirect
  }

  return (
    <>
      <section className="relative scroll-mt-28 bg-white dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="rounded-3xl border border-gray-200 dark:border-white/[0.08] bg-gradient-to-br from-white to-gray-50 dark:from-white/[0.02] dark:to-white/[0.005] p-8 sm:p-12 shadow-lg dark:shadow-[0_20px_60px_rgba(0,0,0,0.3)] text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Icon */}
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:bg-white text-white dark:text-black shadow-lg">
              <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM3 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 019.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
              </svg>
            </div>

            {/* Content */}
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl transition-colors duration-300">
              Join Our Talent Network
            </h2>
            
            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-white/75 sm:text-lg transition-colors duration-300">
              Don't see a role that matches your skills right now? Join our talent network and 
              we'll reach out when exciting opportunities arise that align with your expertise.
            </p>

            {/* Features */}
            <div className="mb-8 grid gap-4 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-white/10">
                  <svg className="h-6 w-6 text-gray-600 dark:text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 7H4l5-5v5zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900 dark:text-white text-sm transition-colors duration-300">Priority Access</h3>
                <p className="text-xs text-gray-600 dark:text-white/60 transition-colors duration-300">First to know about new openings</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-white/10">
                  <svg className="h-6 w-6 text-gray-600 dark:text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900 dark:text-white text-sm transition-colors duration-300">Personal Matching</h3>
                <p className="text-xs text-gray-600 dark:text-white/60 transition-colors duration-300">Roles matched to your skills</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-white/10">
                  <svg className="h-6 w-6 text-gray-600 dark:text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900 dark:text-white text-sm transition-colors duration-300">Privacy First</h3>
                <p className="text-xs text-gray-600 dark:text-white/60 transition-colors duration-300">Your information stays secure</p>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-8 py-4 font-semibold text-base shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-105"
            >
              Join Talent Network
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <p className="mt-4 text-xs text-gray-500 dark:text-white/50 transition-colors duration-300">
              Join 200+ professionals in our talent network
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4">
          <motion.div
            className="relative w-full max-w-2xl rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-900 p-6 sm:p-8 shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Join Our Talent Network
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-white/60 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/40 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/40 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                  LinkedIn Profile
                </label>
                <input
                  type="url"
                  value={formData.linkedInProfile}
                  onChange={(e) => setFormData({ ...formData, linkedInProfile: e.target.value })}
                  className="w-full rounded-xl border border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/40 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
                  placeholder="https://linkedin.com/in/johndoe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
                  Tell us about yourself *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  className="w-full rounded-xl border border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/40 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
                  placeholder="Share your experience, skills, and what type of roles interest you..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 rounded-full border border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 px-6 py-3 font-medium text-gray-700 dark:text-white/80 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </>
  )
}