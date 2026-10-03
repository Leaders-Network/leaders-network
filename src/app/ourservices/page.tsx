import Navbar from '@/components/layout/Navbar'
import FooterReveal from '@/components/layout/FooterReveal'
import Ourservices from '@/components/Solutions'
import React from 'react'

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Page content sits above the footer */}
      <div className="relative z-10 bg-white dark:bg-dark-950 transition-colors duration-300">
        <Navbar />
        <main>
          <Ourservices />
        </main>
      </div>
      <FooterReveal />
    </div>
  )
}