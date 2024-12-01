import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="text-black bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="w-full mx-auto space-y-12">
          <div className="flex flex-col lg:flex-row gap-12 items-start hover:transform hover:scale-[1.02] transition-transform duration-300">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl text-[#EC5E2A] font-bold mb-6 hover:text-[#ff6b33]">
                About Website Development service
              </h2>
              <p className="text-lg leading-relaxed mb-8 text-gray-700">
                Website development refers to the process of creating,
                designing, building, and maintaining websites. It involves
                several aspects, including web design, web content development,
                client-side and server-side scripting, web server configuration,
                and database management. Website development can range from
                creating simple static websites to complex web applications with
                interactive features.
              </p>

              <h2 className="text-4xl font-bold mb-6 text-[#EC5E2A] hover:text-[#ff6b33]">
                Our Strong Team
              </h2>
              <ul className="space-y-4 list-disc pl-6">
                <li className="text-lg text-gray-700 hover:text-black transition-colors">
                  Web Developers: Front-end (HTML, CSS, JavaScript), back-end
                  (PHP, Python, Ruby, Node.js), and full-stack developers
                </li>
                <li className="text-lg text-gray-700 hover:text-black transition-colors">
                  UI/UX Designers: Professionals who specialize in designing
                  visually appealing and user-friendly interfaces.
                </li>
                <li className="text-lg text-gray-700 hover:text-black transition-colors">
                  Project Managers: To coordinate the development process,
                  manage timelines, and communicate with clients.
                </li>
                <li className="text-lg text-gray-700 hover:text-black transition-colors">
                  SEO Specialists: For optimizing websites to rank higher in
                  search engines and improve online visibility.
                </li>
                <li className="text-lg text-gray-700 hover:text-black transition-colors">
                  Content Writers: For creating quality web content that engages
                  visitors and supports SEO efforts.
                </li>
                <li className="text-lg text-gray-700 hover:text-black transition-colors">
                  Quality Assurance (QA) Testers: To ensure the website is
                  bug-free, secure, and performs well across all devices and
                  browsers.
                </li>
                <li className="text-lg text-gray-700 hover:text-black transition-colors">
                  Digital Marketing Experts: To help clients with social media
                  integration, online marketing strategies, and SEO.
                </li>
              </ul>
            </div>
            <Image
              src="/images/about-web-dev.jpg"
              alt="Web Development Team"
              className="w-full lg:w-1/2 rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 mt-8 lg:mt-0"
              width={500}
              height={300}
              priority
            />
          </div>

          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-4xl font-bold mb-6 text-[#EC5E2A] hover:text-[#ff6b33]">
                Our Web Development Offerings
              </h2>
              <ul className="space-y-4 list-disc pl-6">
                <li className="text-lg text-gray-700 hover:text-black transition-colors">
                  Custom Web Development: Building unique, tailored websites
                  based on client requirements.
                </li>
                <li className="text-lg text-gray-700 hover:text-black transition-colors">
                  E-commerce Development: Creating online stores with features
                  like product catalogs, shopping carts, and payment gateways.
                </li>
                <li className="text-lg text-gray-700 hover:text-black transition-colors">
                  Content Management System (CMS) Development: Developing
                  websites using platforms like WordPress, Joomla, or Drupal.
                </li>
                <li className="text-lg text-gray-700 hover:text-black transition-colors">
                  Mobile-Friendly and Responsive Design: Ensuring that websites
                  function well on various devices and screen sizes.
                </li>
                <li className="text-lg text-gray-700 hover:text-black transition-colors">
                  Web Application Development: Developing more complex websites
                  with integrated features (e.g., social networking, booking
                  systems).
                </li>
                <li className="text-lg text-gray-700 hover:text-black transition-colors">
                  Website Redesign: Redesigning outdated websites to improve
                  aesthetics and functionality.
                </li>
                <li className="text-lg text-gray-700 hover:text-black transition-colors">
                  Maintenance & Support: Providing ongoing support to update,
                  secure, and manage websites after launch.
                </li>
                <li className="text-lg text-gray-700 hover:text-black transition-colors">
                  SEO & Digital Marketing: Offering services like SEO
                  optimization, content marketing, and social media integration
                  to improve visibility.
                </li>
              </ul>
            </div>



            <div>
              <div>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-4xl font-bold mb-6 text-[#EC5E2A] hover:text-[#ff6b33]">
                    Our Tools & Technologies
                  </h2>
                  <ul className="space-y-4 list-disc pl-6">
                    <li className="text-lg text-gray-700 hover:text-black transition-colors">
                      Development Frameworks: React, Angular, Vue.js for
                      front-end development; Node.js, Django, Laravel for
                      back-end development.
                    </li>
                    <li className="text-lg text-gray-700 hover:text-black transition-colors">
                      CMS Platforms: WordPress, Shopify, Magento, Wix for client
                      websites requiring easy content management.
                    </li>
                    <li className="text-lg text-gray-700 hover:text-black transition-colors">
                      Version Control: Git (e.g., GitHub, GitLab) for managing
                      code and collaborating within teams.
                    </li>
                    <li className="text-lg text-gray-700 hover:text-black transition-colors">
                      Prototyping Tools: Figma, Sketch, or Adobe XD for UI/UX
                      design.
                    </li>
                    <li className="text-lg text-gray-700 hover:text-black transition-colors">
                      Testing Tools: Selenium, Cypress, or manual testing
                      processes for ensuring quality assurance.
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-4xl font-bold mb-6 text-[#EC5E2A] hover:text-[#ff6b33]">
                    Our Moderate Rates
                  </h2>
                  <ul className="space-y-4 list-disc pl-6">
                    <li className="text-lg text-gray-700 hover:text-black transition-colors">
                      Our rates are according to the various features, such as
                      basic websites, e-commerce sites, or premium custom-built
                      sites.
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-4xl font-bold mb-6 text-[#EC5E2A] hover:text-[#ff6b33]">
                    Support and Maintenance Packages
                  </h2>
                  <ul className="space-y-4 list-disc pl-6">
                    <li className="text-lg text-gray-700 hover:text-black transition-colors">
                      We offer support after the website is launched. This can
                      be for regular updates, security patches, bug fixes, and
                      performance optimization.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center mt-8">
                <Image
                  src="/images/about-web-dev-2.jpg"
                  alt="Web Development Team"
                  className="w-full lg:w-1/2 rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                  width={500}
                  height={300}
                  priority
                />
              </div>
            </div>






            
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
