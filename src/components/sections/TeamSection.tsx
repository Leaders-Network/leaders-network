'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const teamMembers = [
  {
    id: "ademoye-olatunde",
    name: "Ademoye Olatunde",
    role: "Chief Executive Officer",
    bio: "Visionary leader with 20+ years driving digital transformation across enterprise, government, and financial sectors.",
    image: ""
  },
  {
    id: "cto-member",
    name: "Ambimbola",
    role: "Lead Tech",
    bio: "Technical architect specializing in scalable cloud solutions, enterprise software, and emerging technology integration.",
    image: "https://res.cloudinary.com/yaovkmpi/image/upload/v1791812179/abimbola1_ewuipt.jpg"
  },
  {
    id: "omobolaji-ibrahim", 
    name: "Omobolaji Ibrahim",
    role: "Co-Lead Tech and Full-Stack Developer",
    bio: " Full-stack developer and technical lead driving software delivery and product quality through collaborative leadership and hands-on expertise.",
    image: "https://res.cloudinary.com/yaovkmpi/image/upload/v1791804705/mobolaji_cv8q44.jpg"
  },
  {
    id: "oyindamola-ojubanire",
    name: "Oyindamola Ojubanire",
    role: "Human Resources Officer",
    bio: "HR specialist focused on talent acquisition, team development, and organizational culture.",
    image: "https://res.cloudinary.com/yaovkmpi/image/upload/v1791810936/oyin_isvkiq.jpg"
  }
]

/* Photo that falls back to the initial if the image file is missing */
function Photo({ src, name, role }: { src: string; name: string; role: string }) {
  const [failed, setFailed] = useState(false)
  
  // Show placeholder immediately if no src provided
  const showPlaceholder = !src || failed

  // Get appropriate role abbreviation
  const getRoleAbbreviation = (role: string) => {
    if (role === "Chief Executive Officer") return "C.E.O"
    return role.split(' ')[0] // Default to first word
  }

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-full bg-gradient-to-br from-gray-200/80 to-gray-300/40 dark:from-white/20 dark:to-white/[0.03] transition-colors duration-300">
      {showPlaceholder ? (
        <div className="flex h-full w-full flex-col items-center justify-center text-gray-700 dark:text-white transition-colors duration-300">
          <span className="text-5xl font-semibold md:text-6xl">{name.charAt(0)}</span>
          <span className="mt-1 text-xs text-gray-500 dark:text-white/70">{getRoleAbbreviation(role)}</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={name}
          fill
          sizes="(max-width: 768px) 220px, 280px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}

/* Special CEO Card Component */
function CEOCard({ member }: { member: typeof teamMembers[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className="group relative mx-auto w-full max-w-sm lg:max-w-md"
    >
      {/* CEO Badge */}
      <div className="absolute -right-2 -top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-white shadow-lg">
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>

      {/* Enhanced ring with orange accent for CEO */}
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.3 }}
        className="rounded-full border-2 border-orange-200 dark:border-orange-500/30 bg-gradient-to-br from-orange-50 to-white dark:from-orange-500/10 dark:bg-[#111112] p-4 shadow-[0_25px_80px_rgba(234,88,12,0.2)] dark:shadow-[0_25px_80px_rgba(234,88,12,0.4)] transition-all duration-300"
      >
        <Photo src={member.image} name={member.name} role={member.role} />
      </motion.div>

      {/* Name, role and bio */}
      <div className="mx-auto mt-8 max-w-[280px] text-center">
        <h3 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
          {member.name}
        </h3>
        <p className="mt-2 text-base font-medium text-orange-600 dark:text-orange-400 transition-colors duration-300">{member.role}</p>
        <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-white/70 transition-colors duration-300">{member.bio}</p>
      </div>
    </motion.div>
  )
}

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative scroll-mt-28 overflow-hidden bg-gray-50 dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 text-center sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center rounded-full border border-gray-200 dark:border-white/[0.06] bg-gray-100 dark:bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-gray-700 dark:text-white/90 sm:text-sm transition-colors duration-300"
          >
            Team
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            The Leaders Behind the Work
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            Meet the experienced professionals who drive innovation and deliver exceptional results for our clients worldwide.
          </motion.p>
        </div>

        {/* Team Layout */}
        <div className="space-y-16">
          {/* CEO Section - Prominently displayed on larger screens */}
          {teamMembers.length > 0 && (
            <div className="flex justify-center">
              <CEOCard member={teamMembers[0]} />
            </div>
          )}

          {/* Other Team Members - Overlapping circles layout */}
          {teamMembers.length > 1 && (
            <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:justify-center md:gap-0">
              {teamMembers.slice(1).map((member, index) => (
                <motion.div
                  key={member.id}
                  className="group relative w-[220px] cursor-pointer md:w-[280px] md:-ml-10 md:first:ml-0"
                  style={{ zIndex: index + 1 }}
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: (index + 1) * 0.2, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ zIndex: 20 }}
                >
                  {/* Thick dark ring around the photo */}
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-full border border-gray-200 dark:border-white/[0.06] bg-white dark:bg-[#111112] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-300"
                  >
                    <Photo src={member.image} name={member.name} role={member.role} />
                  </motion.div>

                  {/* Name, role and bio */}
                  <div className="mx-auto mt-6 max-w-[210px] text-center">
                    <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white sm:text-xl transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-white/70 transition-colors duration-300">{member.role}</p>
                    <p className="mt-3 text-xs leading-relaxed text-gray-500 dark:text-white/50 transition-colors duration-300">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Careers call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-gray-200 dark:border-white/[0.06] bg-gray-100 dark:bg-white/[0.04] py-2 pl-6 pr-2 transition-colors duration-300">
            <span className="text-sm text-gray-600 dark:text-white/80 transition-colors duration-300">Want to join our team?</span>
            <Link
              href="/careers"
              className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:bg-white px-5 py-2 text-sm font-medium text-white dark:text-black shadow-lg dark:shadow-glow-white transition-all hover:scale-105 duration-200"
            >
              View Careers →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}