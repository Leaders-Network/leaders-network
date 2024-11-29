import React from "react";
import Image from "next/image";

export default function Ourservices() {
  const servicesData = [
    {
      image: "/images/document-management.jpg",
      title: "Website Development",
      description: "Leaders Network Ventures Ltd offer services in Digital Information, Work Flow evaluation, Project Management, Scanning, Capturing and ....",
      width: "500",
      height: "500"
    },
    {
      image: "/images/software-development.png",
      title: "Staff Recruitment",
      description: "Leaders Network Limited is a Software development & Solution firm that is focused on developing high standard and cost persuasive ....",
      width: "600",
      height: "600"
    },
    {
      image: "/images/RaaS.png",
      title: "SDLC Software Development",
      description: "Leaders Network is experienced in Human resource outsourcing for Information Technology and Management jobs whereby an employer transfers ....",
      width: "500",
      height: "500"
    }
  ];

  const servicesData2 = [
    {
      image: "/images/social-media.png",
      title: "Social Media Campaigns",
      description: "In view of the fact that the present social media platforms being used by politicians in Nigeria now rely so much on followership ....",
      width: "500",
      height: "500"
    },
    {
      image: "/images/management-trainning.jpg",
      title: "Management Training",
      description: "We train on the following: Leadership Training,Time Management and Human Development Training ....",
      width: "500",
      height: "500"
    },
    {
      image: "/images/smartcard.jpg",
      title: "Smart-Card Programming",
      description: "Leaders Network offers solution for clients through the Smartcard technology. This comprise of smartcards and card readers....",
      width: "500",
      height: "500"
    }
  ];

  return (
    <div className="p-4 md:p-20 bg-gradient-to-b from-white to-gray-50">
      <div>
        <div className="text-center flex-col space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">Our Services</h2>
          <p className="text-xl md:text-2xl text-gray-600">
            Leaders Network offers the following Products and Services
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center text-center gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="flex-col space-y-6 p-6 md:p-16 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center">
                <Image
                  src={service.image}
                  alt="about-img"
                  width={service.width}
                  height={service.height}
                  className="object-contain w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">{service.title}</h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <button className="bg-transparent hover:bg-[#EC5E2A] hover:text-white text-black rounded-full border-2 border-[#EC5E2A] p-3 md:p-4 text-sm md:text-base transition-colors duration-300 font-medium">READ MORE</button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <div className="flex flex-col md:flex-row items-center justify-center text-center gap-8">
          {servicesData2.map((service, index) => (
            <div key={index} className="space-y-6 p-6 md:p-16 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center">
                <Image
                  src={service.image}
                  alt="about-img"
                  width={service.width}
                  height={service.height}
                  className="object-contain w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">{service.title}</h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <button className="bg-transparent hover:bg-[#EC5E2A] hover:text-white text-black rounded-full border-2 border-[#EC5E2A] p-3 md:p-4 text-sm md:text-base transition-colors duration-300 font-medium">READ MORE</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}