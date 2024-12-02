import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-stretch gap-12 py-24 px-6 md:px-10">
        <div className="w-full md:w-[50%] space-y-10">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-primary bg-clip-text text-[#EC5E2A]">
              About Website Development Service
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 animate-fade-in">
              Website development refers to the process of creating, designing,
              building, and maintaining websites. It involves several aspects,
              including web design, web content development, client-side and
              server-side scripting, web server configuration, and database
              management. Website development can range from creating simple
              static websites to complex web applications with interactive
              features.
            </p>

            <h2 className="text-4xl font-bold text-primary bg-clip-text text-[#EC5E2A] mt-12">
              Our Strong Team
            </h2>
            <ul className="space-y-6 list-none pl-6 text-gray-700">
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
                  className="flex items-start space-x-3 transform hover:translate-x-2 transition-transform duration-300"
                >
                  <span className="text-[#EC5E2A] mt-1.5">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full md:w-[40%] flex items-center">
          <div className="relative w-full h-full">
            <Image
              src="/images/about-web-dev-2.jpg"
              alt="Web Development Team"
              width={500}
              height={700}
              priority
              className="rounded-2xl shadow-2xl w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-8 text-[#EC5E2A]">Our Web Development Offerings</h2>
          <ul className="space-y-4 list-none pl-6">
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
              <li key={index} className="flex items-start space-x-3 text-gray-700 transform hover:translate-x-2 transition-transform duration-300">
                <span className="text-[#EC5E2A] mt-1.5">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#EC5E2A]">Our Tools & Technologies</h2>
              <ul className="space-y-4 list-none pl-6">
                {[
                  "Development Frameworks: React, Angular, Vue.js for front-end development; Node.js, Django, Laravel for back-end development.",
                  "CMS Platforms: WordPress, Shopify, Magento, Wix for client websites requiring easy content management.",
                  "Version Control: Git (e.g., GitHub, GitLab) for managing code and collaborating within teams.",
                  "Prototyping Tools: Figma, Sketch, or Adobe XD for UI/UX design.",
                  "Testing Tools: Selenium, Cypress, or manual testing processes for ensuring quality assurance."
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3 text-gray-700 transform hover:translate-x-2 transition-transform duration-300">
                    <span className="text-[#EC5E2A] mt-1.5">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    </span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#EC5E2A]">Our Moderate Rates</h2>
              <ul className="space-y-4 list-none pl-6">
                <li className="flex items-start space-x-3 text-gray-700">
                  <span className="text-[#EC5E2A] mt-1.5">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </span>
                  <span className="text-lg">Our rates are according to the various features, such as basic websites, e-commerce sites, or premium custom-built sites.</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#EC5E2A]">Support and Maintenance Packages</h2>
              <ul className="space-y-4 list-none pl-6">
                <li className="flex items-start space-x-3 text-gray-700">
                  <span className="text-[#EC5E2A] mt-1.5">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </span>
                  <span className="text-lg">We offer support after the website is launched. This can be for regular updates, security patches, bug fixes, and performance optimization.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/about-web-dev.jpg"
              alt="Web Development Team"
              width={500}
              height={300}
              priority
              className="rounded-2xl shadow-2xl w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}