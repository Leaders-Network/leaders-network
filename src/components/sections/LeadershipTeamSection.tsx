'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { TeamMember } from '@/types/about'

interface LeadershipTeamSectionProps {
  leaders: TeamMember[]
}

function LeaderPhoto({ src, name, role }: { src: string; name: string; role: string }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-200/80 to-gray-300/40 dark:from-white/20 dark:to-white/[0.03] transition-colors duration-300">
      {failed ? (
        <div className="flex h-full w-full flex-col items-center justify-center text-gray-700 dark:text-white transition-colors duration-300">
          <span className="text-4xl font-semibold md:text-5xl">{name.charAt(0)}</span>
          <span className="mt-1 text-xs text-gray-500 dark:text-white/70">{role.split(' ')[0]}</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={name}
          fill
          sizes="(max-width: 768px) 280px, 320px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}

function LeaderCard({ leader, index }: { leader: TeamMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className="group relative"
    >
      {/* Card container */}
      <div className="overflow-hidden rounded-3xl border border-gray-200 dark:border-white/[0.05] bg-gradient-to-br from-white to-gray-50 dark:from-white/[0.05] dark:to-white/[0.015] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_25px_70px_rgba(0,0,0,0.6)] sm:p-8">
        
        {/* Photo */}
        <div className="mb-6">
          <LeaderPhoto src={leader.image} name={leader.name} role={leader.role} />
        </div>

        {/* Name and Role */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
            {leader.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-orange-600 dark:text-orange-400 transition-colors duration-300">
            {leader.role}
          </p>
        </div>

        {/* Bio */}
        <p className="text-sm leading-relaxed text-gray-600 dark:text-white/70 transition-colors duration-300">
          {leader.bio}
        </p>

        {/* Social links */}
        {(leader.linkedIn || leader.email) && (
          <div className="mt-6 flex gap-3">
            {leader.linkedIn && (
              <motion.a
                href={leader.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 transition-all duration-200 hover:bg-blue-200 dark:hover:bg-blue-500/20"
                aria-label={`${leader.name}'s LinkedIn`}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
            )}
            {leader.email && (
              <motion.a
                href={`mailto:${leader.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white/70 transition-all duration-200 hover:bg-gray-200 dark:hover:bg-white/20"
                aria-label={`Email ${leader.name}`}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.a>
            )}
          </div>
        )}

        {/* Subtle hover effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-orange-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </motion.div>
  )
}

export default function LeadershipTeamSection({ leaders }: LeadershipTeamSectionProps) {
  return (
    <section
      id="leadership"
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
            Leadership
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Executive Team
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            Meet the visionary leaders who guide our strategic direction and drive innovation across every aspect of our business.
          </motion.p>
        </div>

        {/* Leadership Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader, index) => (
            <LeaderCard key={leader.id} leader={leader} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}