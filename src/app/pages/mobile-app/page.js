import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'

export default function Page() {
  return (
    <div className='bg-gradient-to-b from-white to-gray-50 text-gray-800'>
      <Navbar/>
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <h1 className="text-5xl font-bold mb-12 text-center text-[#EC5E2A] leading-tight">About Leaders Mobile App Services</h1>

        <div className="mb-16 max-w-4xl mx-auto">
          <p className="text-xl leading-relaxed mb-8 text-gray-700">Mobile app development services refer to the process of designing, creating, testing, and deploying mobile applications for smartphones, tablets, and other mobile devices. These services can be offered by specialized mobile app development agencies or independent developers, and they typically cover both the front-end (user interface) and back-end (server-side) development of apps.</p>

          <p className="text-xl leading-relaxed mb-8 text-gray-700">Mobile app development services encompass a wide range of offerings, from initial strategy and design to post-launch support and marketing. Whether you're building a simple app or a complex platform, Leaders Network will select a development team with expertise in your industry and goals. Once we understand the goals and scope of the project, we will ensure you have a prudent budgeting effective for a successful app launch.</p>
        </div>

        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-8 text-[#EC5E2A] text-center">Consultation & Strategy</h2>
          <div className="mb-8 hover:transform hover:scale-105 transition-transform duration-300">
            <Image src="/images/Picture 1.jpg" alt="Consultation and Strategy" width={1200} height={800} className="w-full h-[500px] object-cover rounded-2xl shadow-2xl mb-8"/>
          </div>
          <p className="text-xl mb-6 text-center text-gray-700">We will discuss with you to understand the following:</p>
          <ul className="list-disc pl-8 mb-6 space-y-4 text-xl text-gray-700 max-w-4xl mx-auto">
            <li>Market Research: Understanding your target audience, competitors, and industry trends.</li>
            <li>App Strategy: Defining the app's objectives, features, and monetization model.</li>
            <li>Technical Consultation: Selecting the right technologies, platforms (iOS, Android, or cross-platform), and frameworks.</li>
          </ul>
        </div>

        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-8 text-[#EC5E2A] text-center">UI/UX Design</h2>
          <div className="mb-8 hover:transform hover:scale-105 transition-transform duration-300">
            <Image src="/images/Picture 2.jpg" alt="UI/UX Design" width={1200} height={800} className="w-full h-[500px] object-cover rounded-2xl shadow-2xl mb-8"/>
          </div>
          <p className="text-xl mb-6 text-center text-gray-700">After this we will do focus on the following:</p>
          <ul className="list-disc pl-8 mb-6 space-y-4 text-xl text-gray-700 max-w-4xl mx-auto">
            <li>Wireframing & Prototyping: Creating mockups and interactive prototypes of the app.</li>
            <li>User Interface (UI) Design: Designing the look and feel of the app, including its colors, typography, icons, and layout.</li>
            <li>User Experience (UX) Design: Ensuring the app is intuitive and user-friendly by focusing on navigation, functionality, and overall usability.</li>
          </ul>
        </div>

        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-8 text-[#EC5E2A] text-center">Mobile App Development</h2>
          <div className="mb-8 hover:transform hover:scale-105 transition-transform duration-300">
            <Image src="/images/Picture 3.jpg" alt="Mobile App Development" width={1200} height={800} className="w-full h-[500px] object-cover rounded-2xl shadow-2xl mb-8"/>
          </div>
          <p className="text-xl mb-6 text-center text-gray-700">The decision to build depends on the following:</p>
          <ul className="list-disc pl-8 mb-6 space-y-4 text-xl text-gray-700 max-w-4xl mx-auto">
            <li>Native App Development: Building apps for specific platforms (iOS or Android) using native programming languages.</li>
            <li>Cross-Platform Development: Using frameworks like React Native, Flutter, or Xamarin.</li>
            <li>Backend Development: Setting up servers, databases, and APIs.</li>
            <li>Third-Party Integration: Integrating external APIs, payment gateways, social media logins, etc.</li>
          </ul>
        </div>

        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-8 text-[#EC5E2A] text-center">App Testing & Quality Assurance (QA)</h2>
          <div className="mb-8 hover:transform hover:scale-105 transition-transform duration-300">
            <Image src="/images/Picture 4.jpg" alt="App Testing" width={1200} height={800} className="w-full h-[500px] object-cover rounded-2xl shadow-2xl mb-8"/>
          </div>
          <ul className="list-disc pl-8 mb-6 space-y-4 text-xl text-gray-700 max-w-4xl mx-auto">
            <li>Functional Testing: Ensuring the app's features work as intended.</li>
            <li>Performance Testing: Testing the app's performance under different conditions.</li>
            <li>Security Testing: Identifying and addressing security vulnerabilities.</li>
            <li>Usability Testing: Verifying that the app is easy to use and navigate.</li>
            <li>Device & Platform Testing: Testing the app on multiple devices and operating systems.</li>
          </ul>
        </div>

        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-8 text-[#EC5E2A] text-center">App Deployment & Launch</h2>
          <div className="mb-8 hover:transform hover:scale-105 transition-transform duration-300">
            <Image src="/images/Picture 5.jpg" alt="App Deployment" width={1200} height={800} className="w-full h-[500px] object-cover rounded-2xl shadow-2xl mb-8"/>
          </div>
          <ul className="list-disc pl-8 mb-6 space-y-4 text-xl text-gray-700 max-w-4xl mx-auto">
            <li>App Store Optimization (ASO)</li>
            <li>Deployment to App Stores</li>
            <li>Beta Testing</li>
          </ul>
        </div>

        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-8 text-[#EC5E2A] text-center">Post-Launch Support & Maintenance</h2>
          <div className="mb-8 hover:transform hover:scale-105 transition-transform duration-300">
            <Image src="/images/Picture 6.jpg" alt="Post-Launch Support" width={1200} height={800} className="w-full h-[500px] object-cover rounded-2xl shadow-2xl mb-8"/>
          </div>
          <ul className="list-disc pl-8 mb-6 space-y-4 text-xl text-gray-700 max-w-4xl mx-auto">
            <li>Bug Fixes & Updates</li>
            <li>App Analytics</li>
            <li>User Feedback</li>
            <li>New Features</li>
          </ul>
        </div>

        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-8 text-[#EC5E2A] text-center">App Marketing & User Acquisition</h2>
          <div className="mb-8 hover:transform hover:scale-105 transition-transform duration-300">
            <Image src="/images/Picture 1.jpg" alt="App Marketing" width={1200} height={800} className="w-full h-[500px] object-cover rounded-2xl shadow-2xl mb-8"/>
          </div>
          <p className="text-xl mb-6 text-center text-gray-700">We also render the post development services of social media advertisement</p>
          <ul className="list-disc pl-8 mb-6 space-y-4 text-xl text-gray-700 max-w-4xl mx-auto">
            <li>Social Media Marketing</li>
            <li>Paid Advertising</li>
            <li>Email Marketing</li>
            <li>Referral Programs</li>
          </ul>
        </div>

        <div className="mb-24 bg-white p-12 rounded-3xl shadow-xl">
          <h2 className="text-4xl font-bold mb-8 text-[#EC5E2A] text-center">Platforms & Technologies Used</h2>
          <ul className="list-disc pl-8 mb-6 space-y-4 text-xl text-gray-700 max-w-4xl mx-auto">
            <li>iOS: Swift, Objective-C, Xcode</li>
            <li>Android: Java, Kotlin, Android Studio</li>
            <li>Cross-Platform: React Native, Flutter, Xamarin, Ionic</li>
            <li>Backend: Node.js, Ruby on Rails, Django, Laravel, Firebase, AWS</li>
            <li>Databases: MySQL, PostgreSQL, MongoDB, Firebase</li>
          </ul>
        </div>

        <div className="mb-24 bg-white p-12 rounded-3xl shadow-xl">
          <h2 className="text-4xl font-bold mb-8 text-[#EC5E2A] text-center">Cost of Mobile App Development</h2>
          <p className="text-xl mb-6 text-center text-gray-700">The cost of mobile app development can vary significantly depending on various factors like complexity, platform, location of the development team, and features. Here's an estimate:</p>
          <ul className="list-disc pl-8 mb-6 space-y-4 text-xl text-gray-700 max-w-4xl mx-auto">
            <li>Basic Apps: From $2000 or N3.4 million</li>
            <li>High End Complexity Apps: From $5000 or N8.6 million</li>
            <li>Maintenance: Post-launch updates, bug fixes, and new feature additions contribute to ongoing costs.</li>
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  )
}