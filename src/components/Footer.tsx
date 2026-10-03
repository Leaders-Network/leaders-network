import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div>
      
      <footer className="bg-gradient-to-b from-[#040F4E] to-gray-950 
                        dark:to-black 
                       text-white dark:text-gray-200 py-16 transition-colors duration-500">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-6 border-b-2 border-[#EC5E2A] pb-2 inline-block">About Us</h3>
              <p className="text-gray-300 dark:text-gray-400 font-quicksand leading-relaxed hover:text-white transition-colors duration-300">Leaders Network has been delivering trusted technology solutions for Corporate Bodies, Government, Telecommunication, Educational.</p>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-6 border-b-2 border-[#EC5E2A] pb-2 inline-block">Quick Links</h3>
              <ul className="font-quicksand space-y-4">
                <li><Link href="/" className="hover:text-[#EC5E2A] transition-colors duration-300 flex items-center"><span className="mr-2">→</span>Home</Link></li>
                <li><Link href="/services" className="hover:text-[#EC5E2A] transition-colors duration-300 flex items-center"><span className="mr-2">→</span>Services</Link></li>
                <li><Link href="/contactus" className="hover:text-[#EC5E2A] transition-colors duration-300 flex items-center"><span className="mr-2">→</span>Contact</Link></li>
              </ul>
            </div>
            <div className="transform font-quicksand hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-6 border-b-2 border-[#EC5E2A] pb-2 inline-block">Contact Info</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="hover:text-white transition-colors duration-300 flex items-center">
                  <svg className="w-5 h-5 mr-3 text-[#EC5E2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  Email: info@eleadersnetwork.com
                </li>
                <li className="hover:text-white transition-colors duration-300 flex items-center">
                  <svg className="w-5 h-5 mr-3 text-[#EC5E2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  Phone: (234) 708-701-3213
                </li>
                <li className="hover:text-white transition-colors duration-300 flex items-center">
                  <svg className="w-5 h-5 mr-3 text-[#EC5E2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  Address: Suite 213, Block A 2-4, Sura Complex, Lagos, Nigeria.
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400 hover:text-white transition-colors duration-300">© 2025 LeadersNetworkLimited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
