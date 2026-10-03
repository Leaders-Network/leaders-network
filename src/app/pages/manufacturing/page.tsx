import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'

export default function page() {
    return (
      <div className='text-black'>
          <Navbar/>
          <div className="container mx-auto px-4 py-8">
              <div className="mb-8">
                  <h1 className="text-3xl text-[#EC5E2A] font-bold mb-6">Data Analysis in Manufacturing</h1>
                  <p className="mb-6">Data analysis in manufacturing has become a critical tool for optimizing production processes, improving quality, reducing costs, and enhancing overall operational efficiency. By harnessing the power of data, manufacturers can make informed decisions, predict potential issues before they occur, and streamline their operations to stay competitive.</p>
              </div>

              <div className="mb-8">
                  <h2 className="text-2xl text-[#EC5E2A] font-bold mb-4">Quality Control and Improvement</h2>
                  <ul className="list-disc pl-6 space-y-3">
                      <li>Defect Detection: Leaders Network use advanced data analysis techniques, such as machine vision and image processing to detect defects in products during the manufacturing process.</li>
                      <li>Root Cause Analysis: Leaders assist manufacturers when defects or quality issues are detected to help trace the root cause of the problem.</li>
                      <li>Process Optimization: By analyzing data from the production line, manufacturers can identify bottlenecks, inefficiencies, and variations in the process that affect product quality.</li>
                  </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-100 p-4 rounded-lg h-64 relative">
                      <Image src="/images/major-19.jpg" alt="Manufacturing Process 1" layout="fill" objectFit="cover" className="rounded-lg"/>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg h-64 relative">
                      <Image src="/images/major-20.jpg" alt="Manufacturing Process 2" layout="fill" objectFit="cover" className="rounded-lg"/>
                  </div>
              </div>

              <div className="mb-8">
                  <h2 className="text-2xl text-[#EC5E2A] font-bold mb-4">Supply Chain Optimization</h2>
                  <ul className="list-disc pl-6 space-y-3">
                      <li>Demand Forecasting: Leaders utilize data analysis which allows manufacturers to forecast product demand based on historical data.</li>
                      <li>Inventory Management: Leaders use real-time data on inventory levels, orders, and raw materials.</li>
                      <li>Supplier Performance Analytics: Leaders assist manufacturers analyze data related to supplier delivery times.</li>
                  </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-100 p-4 rounded-lg h-64 relative">
                      <Image src="/images/major-21.jpg" alt="Supply Chain 1" layout="fill" objectFit="cover" className="rounded-lg"/>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg h-64 relative">
                      <Image src="/images/major-22.jpg" alt="Supply Chain 2" layout="fill" objectFit="cover" className="rounded-lg"/>
                  </div>
              </div>

              <div className="mb-8">
                  <h2 className="text-2xl text-[#EC5E2A] font-bold mb-4">Production Optimization</h2>
                  <ul className="list-disc pl-6 space-y-3">
                      <li>Process Efficiency: Data from machines, workers, and systems is analyzed to identify areas where production processes can be streamlined.</li>
                      <li>Energy Consumption Optimization: Manufacturing is often energy-intensive.</li>
                      <li>Lean Manufacturing: By using data to identify wasteful practices.</li>
                  </ul>
              </div>

              <div className="mb-8">
                  <h2 className="text-2xl text-[#EC5E2A] font-bold mb-4">Production Planning and Scheduling</h2>
                  <ul className="list-disc pl-6 space-y-3">
                      <li>Optimized Scheduling: Leaders Network use data analysis to help manufacturers create more efficient production schedules.</li>
                      <li>Capacity Planning: Manufacturers can use data analysis to monitor production capacity.</li>
                  </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-100 p-4 rounded-lg h-64 relative">
                      <Image src="/images/major-23.jpg" alt="Production Process 1" layout="fill" objectFit="cover" className="rounded-lg"/>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg h-64 relative">
                      <Image src="/images/major-24.jpg" alt="Production Process 2" layout="fill" objectFit="cover" className="rounded-lg"/>
                  </div>
              </div>

              <div className="mb-8">
                  <h2 className="text-2xl text-[#EC5E2A] font-bold mb-4">Energy and Resource Management</h2>
                  <ul className="list-disc pl-6 space-y-3">
                      <li>Energy Efficiency: Leaders assist manufacturers use data to monitor energy usage throughout their operations.</li>
                      <li>Resource Optimization: Data analysis can be used to optimize the use of raw materials, tools, and labor.</li>
                  </ul>
              </div>

              <div className="mb-8">
                  <h2 className="text-2xl text-[#EC5E2A] font-bold mb-4">Cost Analysis and Reduction</h2>
                  <ul className="list-disc pl-6 space-y-3">
                      <li>Cost Breakdown: Leaders use data analysis to help manufacturers break down costs at different stages of production.</li>
                      <li>Cost Forecasting: By analyzing historical cost data, manufacturers can forecast future production costs.</li>
                  </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-100 p-4 rounded-lg h-64 relative">
                      <Image src="/images/major-25.jpg" alt="Cost Analysis 1" layout="fill" objectFit="cover" className="rounded-lg"/>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg h-64 relative">
                      <Image src="/images/major-26.jpg" alt="Cost Analysis 2" layout="fill" objectFit="cover" className="rounded-lg"/>
                  </div>
              </div>

              <div className="mb-8">
                  <h2 className="text-2xl text-[#EC5E2A] font-bold mb-4">Real-Time Monitoring and Data Visualization</h2>
                  <ul className="list-disc pl-6 space-y-3">
                      <li>Dashboards and KPIs: Leaders use real-time data from machines, processes, and sensors.</li>
                      <li>Alerts and Notifications: Data analysis can trigger automated alerts when certain thresholds are met.</li>
                  </ul>
              </div>

              <div className="mb-8">
                  <h2 className="text-2xl text-[#EC5E2A] font-bold mb-4">Product Customization and Innovation</h2>
                  <ul className="list-disc pl-6 space-y-3">
                      <li>Customer Insights: Data analysis helps manufacturers gain insights into customer preferences.</li>
                      <li>Innovation and R&D: Data analysis is essential in research and development.</li>
                  </ul>
              </div>
          </div>
          <Footer/>
      </div>
    )
}