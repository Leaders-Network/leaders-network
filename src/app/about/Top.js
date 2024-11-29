import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="text-[#EC5E2A] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8">
              About Leaders Network
            </h1>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-700">
                Since the year 2005, Leaders Network has been delivering trusted
                technology solutions for Corporate Bodies, Government,
                Telecommunication, Educational, Insurance and Financial Services
                all over the world.
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                In view of the global village nature of the world, we also
                collaborate together on several projects with various
                organisations and consultants as partners in a team thereby
                increasing the knowledge base of team members and enhancing
                capacities.
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                We always seek for the most experienced organization on a
                particular project and collaborate to give our customers the
                full benefit. We continue to innovate and improve the product
                experience for all our customers
              </p>
            </div>
          </div>
          <div className="flex-1 w-full">
            <Image
              src={"/images/about-leaders-network.png"}
              alt="About Leaders Network"
              width={600}
              height={600}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>



      <div className="max-w-7xl mx-auto mt-8 sm:mt-12 md:mt-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 w-full md:w-1/2">
            <Image
              src={"/images/software.png"}
              alt="About Leaders Network"
              width={600}
              height={600}
              className="w-full h-auto object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              priority
            />
          </div>
          <div className="flex-1 md:w-1/2 space-y-6 px-4 sm:px-6 md:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#EC5E2A] tracking-tight">Our services are as follows:</h2>
            <ol className="space-y-4 text-base sm:text-lg text-gray-700">
              <li className="flex items-center gap-3 hover:text-blue-600 transition-colors duration-200">
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse"></span>
                Website Development
              </li>
              <li className="flex items-center gap-3 hover:text-blue-600 transition-colors duration-200">
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse"></span>
                Staff Recruitment
              </li>
              <li className="flex items-center gap-3 hover:text-blue-600 transition-colors duration-200">
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse"></span>
                SDLC Software Development
              </li>
              <li className="flex items-center gap-3 hover:text-blue-600 transition-colors duration-200">
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse"></span>
                Data Analysis
              </li>
              <li className="flex items-center gap-3 hover:text-blue-600 transition-colors duration-200">
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse"></span>
                Social Media Adverts
              </li>
              <li className="flex items-center gap-3 hover:text-blue-600 transition-colors duration-200">
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse"></span>
                Mobile Apps Development
              </li>
            </ol>
            <p className="mt-8 text-base sm:text-lg text-gray-700 leading-relaxed">
                Our goal is to assist corporate bodies, states and organizations
                to motivate and inspire their employees to peak performance as
                evidence has shown this to be the key drive for successful
                corporate performance. Our consulting methodology is driven by
                world-class tools sourced from our international partner firms
                in the USA, India, United Kingdom and South Africa. This
                partnership provides us with excellent training, development and
                consultancy support.
            </p>
          </div>
        </div>
      </div>
    </div>  );
}