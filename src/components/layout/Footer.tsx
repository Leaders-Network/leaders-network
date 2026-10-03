'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const NAVY = '#0A1F44' // swap for your exact navy if different

const footerLinks = {
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Services', href: '/ourservices' },
    { label: 'Case Studies', href: '/pages/case-studies' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blogs' },
    { label: 'Contact', href: '/contactus' },
  ],
  Services: [
    { label: 'Web Development', href: '/pages/web-development' },
    { label: 'Software Development', href: '/pages/software-development' },
    { label: 'Data Analysis', href: '/pages/data-analysis' },
    { label: 'Staff Recruitment', href: '/pages/staff-recruitment' },
    { label: 'Digital Transformation', href: '/ourservices' },
  ],
}

const socials = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: '#',
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    id: 'twitter',
    label: 'Twitter',
    href: '#',
    icon: (
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    ),
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: '#',
    icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: '#',
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
]

export default function Footer() {
  const [open, setOpen] = useState<string | null>(null)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <footer
      className="relative w-full text-white "
      style={{ backgroundColor: NAVY }}
    >
      {/* Background map + navy overlay (same in light & dark mode) */}
     {/* Background image + navy overlay (same in light & dark mode) */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/yaovkmpi/image/upload/f_auto,q_auto/v1790774932/footerbg_u2s6av.jpg')",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: NAVY, opacity: 0.80 }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-10 lg:pt-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-10">
          {/* Logo, description, socials */}
          <motion.div
            className="min-w-0 lg:max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/logo.png"
              alt="Leaders Network"
              width={240}
              height={80}
              className="h-12 sm:h-14 lg:h-16 w-auto mb-5"
            />
            <p className="text-sm leading-relaxed text-white/80 max-w-sm break-words">
              Leaders Network has been delivering trusted technology solutions
              for Corporate Bodies, Government, Telecommunication, Educational.
            </p>

            <h3 className="mt-8 mb-4 text-base font-semibold text-white">Follow Us</h3>
            <div className="flex flex-wrap items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith('#') ? undefined : '_blank'}
                  rel={s.href.startsWith('#') ? undefined : 'noopener noreferrer'}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0066CC] text-white transition-transform duration-200 hover:scale-110 hover:bg-[#0a7ae6]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[18px] w-[18px]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link columns: accordion on mobile, open columns on desktop */}
          <div className="flex min-w-0 flex-col lg:flex-row lg:gap-24 xl:gap-32 lg:pr-8">
            {Object.entries(footerLinks).map(([title, links], i) => {
              const isOpen = open === title
              return (
                <motion.div
                  key={title}
                  className="min-w-0 border-b border-white/10 lg:min-w-[190px] lg:border-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : title)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between py-4 text-left text-base font-semibold text-white lg:pointer-events-none lg:cursor-default lg:pt-0 lg:pb-6 lg:text-lg"
                  >
                    {title}
                    <svg
                      viewBox="0 0 24 24"
                      className={`h-4 w-4 shrink-0 transition-transform duration-300 lg:hidden ${
                        isOpen ? 'rotate-90' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>

                  <ul
                    className={`${isOpen ? 'block' : 'hidden'} space-y-4 pb-5 lg:block lg:space-y-5 lg:pb-0`}
                  >
                    {links.map((link) => (
                      <li key={link.href + link.label}>
                        <Link
                          href={link.href}
                          className="block text-sm text-white/80 transition-colors duration-200 hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Copyright row */}
        <motion.div
          className="mt-8 pt-2 pr-14 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-left text-sm leading-relaxed text-white/80 sm:pr-0 sm:text-center lg:mt-12 lg:py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          © {new Date().getFullYear()} Leaders Network. All Rights Reserved |{' '}
          <Link href="/privacy" className="underline underline-offset-2 hover:text-white">
            Privacy Policy
          </Link>{' '}
          |{' '}
          <Link href="/terms" className="underline underline-offset-2 hover:text-white">
            Terms of Service
          </Link>
        </motion.div>
      </div>
    </footer>
  )
}