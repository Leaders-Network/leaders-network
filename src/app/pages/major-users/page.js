import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div className='text-black bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen'>
        <Navbar/>
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-12 text-center text-gray-800 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    Major Users
                </span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="w-full h-48 relative rounded-lg mb-6 overflow-hidden">
                        <Image
                            src="/images/major-01.jpg"
                            alt="Telecoms"
                            fill
                            className="rounded-lg object-cover transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">Telecoms</h2>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="w-full h-48 relative rounded-lg mb-6 overflow-hidden">
                        <Image
                            src="/images/major-08.jpg"
                            alt="Banks"
                            fill
                            className="rounded-lg object-cover transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">Banks</h2>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="w-full h-48 relative rounded-lg mb-6 overflow-hidden">
                        <Image
                            src="/images/major-18.jpg"
                            alt="Manufacturing"
                            fill
                            className="rounded-lg object-cover transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">Manufacturing</h2>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="w-full h-48 relative rounded-lg mb-6 overflow-hidden">
                        <Image
                            src="/images/major-27.jpg"
                            alt="Government Sectors"
                            fill
                            className="rounded-lg object-cover transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">Government Sectors</h2>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}