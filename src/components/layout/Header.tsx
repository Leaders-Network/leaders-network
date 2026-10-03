"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Solutions", href: "#solutions" },
  { name: "Industries", href: "#industries" },
  { name: "Insights", href: "#insights" },
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
];

const solutionsMenu = [
  { name: "Strategic Consulting", href: "/services" },
  { name: "Software Development", href: "/services" },
  { name: "Digital Transformation", href: "/services" },
  { name: "Quality Assurance", href: "/services" },
  { name: "IT Consulting & Strategy", href: "/services" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-2 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 md:left-6 md:right-6 lg:left-8 lg:right-8 z-50 rounded-full border border-white/10 bg-[#1A1613]/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-3 sm:px-4 sm:py-3 md:px-6 md:py-4 lg:px-8 lg:py-4 xl:px-12">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Leaders Network"
              width={120}
              height={40}
              className="h-6 w-auto sm:h-7 md:h-8 lg:h-9 xl:h-10"
              priority
            />
          </Link>

          {/* Desktop Navigation - Hidden until lg breakpoint */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="text-sm xl:text-base font-medium text-white/80 transition-all duration-200 hover:text-white hover:scale-105"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link 
              href="/contactus" 
              className="rounded-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-500 hover:to-orange-400 px-4 py-2 xl:px-6 xl:py-3 text-sm xl:text-base font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile/Tablet Menu Button - Visible until lg */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all duration-200 hover:bg-white/20"
            aria-label="Toggle mobile menu"
          >
            <motion.div
              animate={mobileMenuOpen ? "open" : "closed"}
              className="flex flex-col justify-center items-center w-4 h-4 sm:w-5 sm:h-5"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 4 }
                }}
                transition={{ duration: 0.3 }}
                className="block w-full h-0.5 bg-white origin-center"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                transition={{ duration: 0.2 }}
                className="block w-full h-0.5 bg-white mt-1"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -4 }
                }}
                transition={{ duration: 0.3 }}
                className="block w-full h-0.5 bg-white mt-1 origin-center"
              />
            </motion.div>
          </button>
        </div>
      </header>

      {/* Mobile/Tablet Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-[#0A0A0B]/95 backdrop-blur-xl"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center"
            >
              {/* Navigation Links */}
              <div className="space-y-6 sm:space-y-8 mb-12">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-4 text-2xl sm:text-3xl md:text-4xl font-medium text-white hover:text-blue-400 transition-all duration-200 hover:scale-105 min-h-[44px] flex items-center justify-center"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Solutions Submenu */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 }}
                className="mb-12"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-white/60 mb-6">Solutions</h3>
                <div className="space-y-3 sm:space-y-4">
                  {solutionsMenu.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-base sm:text-lg text-white/80 hover:text-white transition-all duration-200 hover:scale-105 min-h-[44px] flex items-center justify-center"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.9 }}
              >
                <Link
                  href="/contactus"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-block w-full max-w-xs py-4 px-8 bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-500 hover:to-orange-400 text-white font-semibold text-lg sm:text-xl rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 min-h-[44px]"
                >
                  Start Project
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}