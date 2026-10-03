import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Solutions() {
  const solutions = [
    {
      image: "/images/website-development.jpg",
      title: "Website Development",
      description: "Website development refers to the process of creating, designing, building, and maintaining websites. It involves several aspects...",
      link: "/pages/web-dev"
    },
    {
      image: "/images/staff-recruitment.jpg",
      title: "Staff Recruitment",
      description: "Leaders Network offers Staff Recruitment as a service. We follow all the basic processes of identifying, attracting....",
      link: "/pages/staff-recruit"
    },
    {
      image: "/images/sdlc-software-development.jpg",
      title: "SDLC Software Development",
      description: "Leaders Network utilizes Software Development Life Cycle (SDLC) which is a process used by the software industry to design....",
      link: "/pages/sdlc"
    }
  ]

  const additionalSolutions = [
    {
      image: "/images/data-analysis.jpg",
      title: "Data Analysis",
      description: "Data Processing stands as a pivotal element within any prosperous business strategy, encompassing the collection....",
      link: "/pages/data-analysis"
    },
    {
      image: "/images/social-media-ad.jpg",
      title: "Social Media Adverts",
      description: "Social media platforms are indispensable tools for modern communication, entertainment, and business marketing.....",
      link: "/pages/social-media-advert"
    },
    {
      image: "/images/mobile-app-development.avif",
      title: "Mobile Apps Development",
      description: "Mobile app development services refer to the process of designing, creating, testing, and deploying mobile applications....",
      link: "/pages/mobile-app"
    },
    {
      image: "/images/doc-mgt.jpg",
      title: "Document Management",
      description: "Leaders Network offers Document Management Services (DMS) as a service with a clear strategy, a combination of technologies.....",
      link: "/pages/doc-mgt"
    }
  ]

  return (
    <div className='px-4 md:px-20 py-10 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300'>
  <div className='bg-[#040F4E] dark:bg-[#0B132B] text-white px-4 md:px-10 py-12 md:py-16 rounded-2xl shadow-2xl'>

        <div>
          <div className="text-center flex-col space-y-6 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#EC5E2A] to-white bg-clip-text text-transparent">Our Services</h2>
            <p className="text-xl font-quicksand md:text-2xl text-gray-300 max-w-3xl mx-auto">
              We have the following solutions to solve challenges being faced by governments
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Link href={solution.link} key={index}>
                <div className="flex flex-col gap-6 md:gap-10 p-6 md:p-16 bg-[#071263] rounded-xl hover:transform hover:scale-105 transition-all duration-300 h-full">
                  <div className="flex justify-center flex-1">
                    <Image
                      src={solution.image}
                      alt="about-img"
                      width={"500"}
                      height={"500"}
                      className="object-cover w-full h-[200px] rounded-lg hover:opacity-90 transition-opacity"
                    />
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold text-[#EC5E2A]">{solution.title}</h2>
                  <p className="text-sm md:text-base text-gray-300 flex-1 font-['Quicksand']">
                    {solution.description}
                  </p>
                  <button className="bg-transparent rounded-full border-2 border-[#EC5E2A] text-white px-8 md:px-12 py-3 md:py-4 hover:bg-[#EC5E2A] transition-all duration-300 font-medium mt-auto">READ MORE</button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {additionalSolutions.map((solution, index) => (
              <Link href={solution.link} key={index}>
                <div className="flex flex-col gap-6 md:gap-10 p-6 md:p-16 bg-[#071263] rounded-xl hover:transform hover:scale-105 transition-all duration-300 h-full">
                  <div className="flex justify-center flex-1">
                    <Image
                      src={solution.image}
                      alt="about-img"
                      width={"500"}
                      height={"500"}
                      className="object-cover w-full h-[200px] rounded-lg hover:opacity-90 transition-opacity"
                    />
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold text-[#EC5E2A]">{solution.title}</h2>
                  <p className="text-sm md:text-base text-gray-300 flex-1 font-['Quicksand']">
                    {solution.description}
                  </p>
                  <button className="bg-transparent rounded-full border-2 border-[#EC5E2A] text-white px-8 md:px-12 py-3 md:py-4 hover:bg-[#EC5E2A] transition-all duration-300 font-medium mt-auto">READ MORE</button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}