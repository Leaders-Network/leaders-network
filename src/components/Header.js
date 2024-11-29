'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="text-black px-4 pt-10 sm:pt-0 sm:px-8 lg:px-20 bg-gradient-to-br from-white to-gray-100 min-h-[70vh] flex items-center justify-center">
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-16 max-w-7xl mx-auto w-full">

        <div className="flex-1 space-y-6 lg:space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC5E2A] to-orange-600">
                  Information Technology & Software Development Solutions
                </span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-medium max-w-2xl">
                Empowering businesses with innovative technology solutions and expert software development services.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 bg-[#EC5E2A] rounded-lg text-white font-semibold hover:bg-opacity-90 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Get Started
                </button>

                <Link href="/about">
                  <button className="px-8 py-4 bg-white rounded-lg border-2 border-[#EC5E2A] text-[#EC5E2A] font-semibold hover:bg-[#EC5E2A] hover:text-white transition-all duration-300 hover:shadow-xl">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
        </div>

        <div className="flex-1 w-full max-w-xl">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105">
            <div className="relative w-full h-[400px]">
              {[
                '/images/software.png',
                '/images/web-development.jpg',
                '/images/software-development.png',
                '/images/programming.jpg'
              ].map((src, index) => (
                <Image
                  key={index}
                  width={2000}
                  height={2000}
                  className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000`}
                  src={src}
                  alt={`Professional IT Solutions ${index + 1}`}
                  priority={index === 0}
                  style={{
                    opacity: 0,
                    animation: `carouselFade 16s infinite ${index * 4}s`
                  }}
                />
              ))}
              <style jsx global>{`
                @keyframes carouselFade {
                  0%, 20% { opacity: 1; }
                  25%, 95% { opacity: 0; }
                  100% { opacity: 1; }
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </div>  )
}