import Navbar from '@/components/layout/Navbar'
import FooterReveal from '@/components/layout/FooterReveal'
import React from 'react'

export default function ContactUsPage() {
    return (
      <div className="min-h-screen">
        {/* Page content sits above the footer */}
        <div className="relative z-10 bg-white dark:bg-dark-950 transition-colors duration-300">
          <Navbar />
          <main className="pt-20">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-lg md:max-w-none md:grid md:grid-cols-2 md:gap-12">
                <div className="overflow-hidden rounded-3xl border border-gray-200 dark:border-white/[0.05] bg-gradient-to-br from-white to-gray-50 dark:from-white/[0.05] dark:to-white/[0.015] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                  <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    Contact Leaders Network
                  </h2>
                  <div className="mt-4">
                    <p className="text-lg leading-relaxed text-gray-600 dark:text-white/80">
                      We&apos;re here to help and answer any questions you might have. We look forward to hearing from you.
                    </p>
                  </div>
                  <div className="mt-10 space-y-6">
                    <div className="flex items-center">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-500/20">
                        <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-600 dark:text-white/80">
                        (234) 708-701-3213
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-500/20">
                        <svg className="h-6 w-6 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-600 dark:text-white/80">
                        info@leadersnetwork.com
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 md:mt-0">
                  <form className="overflow-hidden rounded-3xl border border-gray-200 dark:border-white/[0.05] bg-gradient-to-br from-white to-gray-50 dark:from-white/[0.05] dark:to-white/[0.015] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                      <div className="mt-2">
                        <input 
                          type="text" 
                          name="name" 
                          id="name" 
                          className="block w-full rounded-xl border border-gray-300 dark:border-white/20 bg-white dark:bg-white/[0.05] px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50 shadow-sm transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
                      <div className="mt-2">
                        <input 
                          type="email" 
                          name="email" 
                          id="email" 
                          className="block w-full rounded-xl border border-gray-300 dark:border-white/20 bg-white dark:bg-white/[0.05] px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50 shadow-sm transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white">Your Message</label>
                      <div className="mt-2">
                        <textarea 
                          id="message" 
                          name="message" 
                          rows={4} 
                          className="block w-full rounded-xl border border-gray-300 dark:border-white/20 bg-white dark:bg-white/[0.05] px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50 shadow-sm transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"
                          placeholder="How can we help you?"
                        ></textarea>
                      </div>
                    </div>
                    <div>
                      <button 
                        type="submit" 
                        className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-105 hover:from-orange-400 hover:to-orange-500 hover:shadow-xl hover:shadow-orange-500/30 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </div>
        <FooterReveal />
      </div>
    )
}