import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'

export default function Page() {
  return (
    <div className='bg-white text-gray-800'>
      <Navbar/>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#EC5E2A]">About Leaders Mobile App Services</h1>

        <div className="mb-12">
          <p className="text-lg leading-relaxed mb-6">Mobile app development services refer to the process of designing, creating, testing, and deploying mobile applications for smartphones, tablets, and other mobile devices. These services can be offered by specialized mobile app development agencies or independent developers, and they typically cover both the front-end (user interface) and back-end (server-side) development of apps.</p>

          <p className="text-lg leading-relaxed mb-6">Mobile app development services encompass a wide range of offerings, from initial strategy and design to post-launch support and marketing. Whether you're building a simple app or a complex platform, Leaders Network will select a development team with expertise in your industry and goals. Once we understand the goals and scope of the project, we will ensure you have a prudent budgeting effective for a successful app launch.</p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#EC5E2A]">Consultation & Strategy</h2>
          <div className="mb-6">
            <Image src="/images/Picture 1.jpg" alt="Consultation and Strategy" width={800} height={512} className="w-full h-[400px] object-cover rounded-xl shadow-lg mb-6"/>
          </div>
          <p className="text-lg mb-4">We will discuss with you to understand the following:</p>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-lg">
            <li>Market Research: Understanding your target audience, competitors, and industry trends.</li>
            <li>App Strategy: Defining the app's objectives, features, and monetization model.</li>
            <li>Technical Consultation: Selecting the right technologies, platforms (iOS, Android, or cross-platform), and frameworks.</li>
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#EC5E2A]">UI/UX Design</h2>
          <div className="mb-6">
            <Image src="/images/Picture 2.jpg" alt="UI/UX Design" width={800} height={512} className="w-full h-[400px] object-cover rounded-xl shadow-lg mb-6"/>
          </div>
          <p className="text-lg mb-4">After this we will do focus on the following:</p>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-lg">
            <li>Wireframing & Prototyping: Creating mockups and interactive prototypes of the app.</li>
            <li>User Interface (UI) Design: Designing the look and feel of the app, including its colors, typography, icons, and layout.</li>
            <li>User Experience (UX) Design: Ensuring the app is intuitive and user-friendly by focusing on navigation, functionality, and overall usability.</li>
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#EC5E2A]">Mobile App Development</h2>
          <div className="mb-6">
            <Image src="/images/Picture 3.jpg" alt="Mobile App Development" width={800} height={512} className="w-full h-[400px] object-cover rounded-xl shadow-lg mb-6"/>
          </div>
          <p className="text-lg mb-4">The decision to build depends on the following:</p>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-lg">
            <li>Native App Development: Building apps for specific platforms (iOS or Android) using native programming languages.</li>
            <li>Cross-Platform Development: Using frameworks like React Native, Flutter, or Xamarin.</li>
            <li>Backend Development: Setting up servers, databases, and APIs.</li>
            <li>Third-Party Integration: Integrating external APIs, payment gateways, social media logins, etc.</li>
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#EC5E2A]">App Testing & Quality Assurance (QA)</h2>
          <div className="mb-6">
            <Image src="/images/Picture 4.jpg" alt="App Testing" width={800} height={512} className="w-full h-[400px] object-cover rounded-xl shadow-lg mb-6"/>
          </div>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-lg">
            <li>Functional Testing: Ensuring the app's features work as intended.</li>
            <li>Performance Testing: Testing the app's performance under different conditions.</li>
            <li>Security Testing: Identifying and addressing security vulnerabilities.</li>
            <li>Usability Testing: Verifying that the app is easy to use and navigate.</li>
            <li>Device & Platform Testing: Testing the app on multiple devices and operating systems.</li>
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#EC5E2A]">App Deployment & Launch</h2>
          <div className="mb-6">
            <Image src="/images/Picture 5.jpg" alt="App Deployment" width={800} height={512} className="w-full h-[400px] object-cover rounded-xl shadow-lg mb-6"/>
          </div>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-lg">
            <li>App Store Optimization (ASO)</li>
            <li>Deployment to App Stores</li>
            <li>Beta Testing</li>
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#EC5E2A]">Post-Launch Support & Maintenance</h2>
          <div className="mb-6">
            <Image src="/images/Picture 6.jpg" alt="Post-Launch Support" width={800} height={512} className="w-full h-[400px] object-cover rounded-xl shadow-lg mb-6"/>
          </div>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-lg">
            <li>Bug Fixes & Updates</li>
            <li>App Analytics</li>
            <li>User Feedback</li>
            <li>New Features</li>
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#EC5E2A]">App Marketing & User Acquisition</h2>
          <div className="mb-6">
            <Image src="/images/Picture 1.jpg" alt="App Marketing" width={800} height={512} className="w-full h-[400px] object-cover rounded-xl shadow-lg mb-6"/>
          </div>
          <p className="text-lg mb-4">We also render the post development services of social media advertisement</p>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-lg">
            <li>Social Media Marketing</li>
            <li>Paid Advertising</li>
            <li>Email Marketing</li>
            <li>Referral Programs</li>
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#EC5E2A]">Platforms & Technologies Used</h2>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-lg">
            <li>iOS: Swift, Objective-C, Xcode</li>
            <li>Android: Java, Kotlin, Android Studio</li>
            <li>Cross-Platform: React Native, Flutter, Xamarin, Ionic</li>
            <li>Backend: Node.js, Ruby on Rails, Django, Laravel, Firebase, AWS</li>
            <li>Databases: MySQL, PostgreSQL, MongoDB, Firebase</li>
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#EC5E2A]">Cost of Mobile App Development</h2>
          <p className="text-lg mb-4">The cost of mobile app development can vary significantly depending on various factors like complexity, platform, location of the development team, and features. Here's an estimate:</p>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-lg">
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