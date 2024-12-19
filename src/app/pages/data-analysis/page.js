import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    <div className='text-black'>
      <Navbar/>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-parkinsans font-bold mb-6 text-[#EC5E2A]">About & Leaders Data Analysis</h1>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 font-quicksand font-bold">
              <p className="text-lg mb-4">
                Data Processing stands as a pivotal element within any prosperous business strategy, encompassing the collection, structuring, and analysis of data to extract valuable insights that foster growth and enhance efficiency. In our organization, we excel in delivering state-of-the-art Data Processing services, empowering businesses to fully harness the potential of their data.
              </p>
              <p className="text-lg mb-4">
                Whether you're a small startup or a big company, we can help you with data, analytics, and AI/ML services to achieve your business goals. We offer innovative and affordable solutions to our clients.
              </p>
              <div className="flex flex-col space-y-4">
                <Link href="/pages/datatools">
                  <button className="bg-[#EC5E2A] text-white px-6 py-2 rounded-lg hover:bg-[#d54e1f] transition-colors animate-bounce w-full">
                    Our Data Analysis Tools Includes →
                  </button>
                </Link>
                <Link href="/pages/major-users">
                  <button className="bg-[#EC5E2A] text-white px-6 py-2 rounded-lg hover:bg-[#d54e1f] transition-colors w-full">
                    Major Users →
                  </button>
                </Link>
                <Link href="/pages/data-analysis-sectors">
                  <button className="bg-[#EC5E2A] text-white px-6 py-2 rounded-lg hover:bg-[#d54e1f] transition-colors w-full">
                    Other Data Analysis Sectors →
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
              <Image 
                src="/images/data-analysis-img.jpg" 
                alt="Data Analysis" 
                width={800}
                height={320}
                className="w-full h-80 rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-[#EC5E2A]">Data Analysis Services:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2 text-[#EC5E2A]">Data Architecture Design</h3>
              <p className='font-quicksand font-bold'>Our team of data engineers collaborates with you to construct a scalable, efficient, and secure data architecture, including data warehousing, data pipelines, and data quality assurance.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2 text-[#EC5E2A]">Data Integration</h3>
              <p className='font-quicksand font-bold'>We facilitate the integration of data from diverse sources into a centralized repository, simplifying accessibility, analysis, and visualization.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2 text-[#EC5E2A]">Data Preparation</h3>
              <p className='font-quicksand font-bold'>Our data engineers meticulously clean, transform, and prepare data for analysis, ensuring accuracy, completeness, and consistency.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2 text-[#EC5E2A]">Data Analysis</h3>
              <p className='font-quicksand font-bold'>Our Data Scientists employ statistical and machine learning techniques to extract valuable insights and knowledge from your data.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2 text-[#EC5E2A]">Predictive Analytics</h3>
              <p>We utilize machine learning models to forecast future trends, recognize patterns, and make informed predictions.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2 text-[#EC5E2A]">Data Visualization</h3>
              <p className='font-quicksand font-bold'>Our team crafts interactive dashboards and visualizations that facilitate data comprehension and data-driven decision-making.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2 text-[#EC5E2A]">Cloud Computing</h3>
              <p className='font-quicksand font-bold'>We assist in migrating your data and applications to the cloud, enabling access from anywhere, at any time, and on any device.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2 text-[#EC5E2A]">Artificial Intelligence and Machine Learning</h3>
              <p className='font-quicksand font-bold'>Our expert team provides AI and ML services to automate processes, uncover trends, and make predictions</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}