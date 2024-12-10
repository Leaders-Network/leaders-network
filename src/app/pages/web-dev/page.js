import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-b text-black from-white to-gray-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-[#EC5E2A] leading-tight">
                About Website Development Service
              </h1>
              <p className="text-lg font-quicksand font-bold leading-relaxed text-gray-700 animate-fade-in">
                Website development refers to the process of creating, designing,
                building, and maintaining websites. It involves several aspects,
                including web design, web content development, client-side and
                server-side scripting, web server configuration, and database
                management. Website development can range from creating simple
                static websites to complex web applications with interactive
                features.
              </p>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <Image
                src="/images/about-web-dev-2.jpg"
                alt="Web Development Team"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#EC5E2A] mb-6">
                Our Strong Team
              </h2>
              <ul className="space-y-4">
                {[
                  "Web Developers: Front-end (HTML, CSS, JavaScript), back-end (PHP, Python, Ruby, Node.js), and full-stack developers",
                  "UI/UX Designers: Professionals who specialize in designing visually appealing and user-friendly interfaces.",
                  "Project Managers: To coordinate the development process, manage timelines, and communicate with clients.",
                  "SEO Specialists: For optimizing websites to rank higher in search engines and improve online visibility.",
                  "Content Writers: For creating quality web content that engages visitors and supports SEO efforts.",
                  "Quality Assurance (QA) Testers: To ensure the website is bug-free, secure, and performs well across all devices and browsers.",
                  "Digital Marketing Experts: To help clients with social media integration, online marketing strategies, and SEO.",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 font-quicksand font-bold"
                  >
                    <span className="text-[#EC5E2A] mt-1 flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    </span>
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-4xl font-bold text-[#EC5E2A] mb-12 text-center">
            Our Web Development Offerings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Custom Web Development: Building unique, tailored websites based on client requirements.",
              "E-commerce Development: Creating online stores with features like product catalogs, shopping carts, and payment gateways.",
              "Content Management System (CMS) Development: Developing websites using platforms like WordPress, Joomla, or Drupal.",
              "Mobile-Friendly and Responsive Design: Ensuring that websites function well on various devices and screen sizes.",
              "Web Application Development: Developing more complex websites with integrated features (e.g., social networking, booking systems).",
              "Website Redesign: Redesigning outdated websites to improve aesthetics and functionality.",
              "Maintenance & Support: Providing ongoing support to update, secure, and manage websites after launch.",
              "SEO & Digital Marketing: Offering services like SEO optimization, content marketing, and social media integration to improve visibility."
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3">
                  <span className="text-[#EC5E2A] mt-1 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </span>
                  <span className="text-base font-quicksand font-bold text-gray-700">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-[#EC5E2A] mb-6">
                Our Tools & Technologies
              </h2>
              <ul className="space-y-4">
                {[
                  "Development Frameworks: React, Angular, Vue.js for front-end development; Node.js, Django, Laravel for back-end development.",
                  "CMS Platforms: WordPress, Shopify, Magento, Wix for client websites requiring easy content management.",
                  "Version Control: Git (e.g., GitHub, GitLab) for managing code and collaborating within teams.",
                  "Prototyping Tools: Figma, Sketch, or Adobe XD for UI/UX design.",
                  "Testing Tools: Selenium, Cypress, or manual testing processes for ensuring quality assurance."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <span className="text-[#EC5E2A] mt-1 flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    </span>
                    <span className="text-base font-quicksand font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-[#EC5E2A] mb-6">
                Our Moderate Rates
              </h2>
              <p className="text-lg font-quicksand font-bold text-gray-700">
                Our rates are according to the various features, such as basic websites, e-commerce sites, or premium custom-built sites.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-web-dev.jpg"
                alt="Web Development Team"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-[#EC5E2A] mb-6">
                Support and Maintenance Packages
              </h2>
              <p className="text-lg font-quicksand font-bold text-gray-700">
                We offer support after the website is launched. This can be for regular updates, security patches, bug fixes, and performance optimization.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}