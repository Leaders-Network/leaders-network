import React from "react";
import Image from "next/image";

export default function Body() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-8 md:py-12 bg-gradient-to-b from-gray-100 to-white">
      <div className="bg-[#040F4E] text-white px-4 sm:px-6 md:px-8 lg:px-10 rounded-2xl shadow-2xl">
        <div className="p-6 md:p-10 text-center flex-col space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">About Leaders Network Limited</h2>
          <p className="text-base md:text-lg lg:text-xl py-2 md:py-3 text-gray-300 font-light tracking-wide">
            Best Management and Information Technology Consultants
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-evenly gap-8 pb-8">
          <div className="w-full md:w-1/2 p-4 md:p-[2rem] transition-transform duration-300 hover:scale-105">
            <Image
              src={"/images/about-leaders-network.png"}
              alt="about-img"
              width={"1000"}
              height={"1000"}
              className="object-contain w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
          <div className="w-full md:w-1/2 p-4 md:p-[2rem] space-y-6">
            <h2 className="text-base md:text-lg leading-relaxed hover:text-blue-200 transition-colors duration-300">
              Leaders Network Ltd is a firm of Management and Information
              Technology Consultants providing services on Document Management,
              Resource As A Service (RAAS), Software Development, Social Media
              Campaigns, Management Training and Smartcard Solutions
            </h2>
            <div className="w-16 h-0.5 bg-blue-400 rounded-full"></div>
            <h2 className="text-base md:text-lg leading-relaxed hover:text-blue-200 transition-colors duration-300">
              Our consulting methodology is driven by world-class tools sourced
              from our international partner firms in the USA, India, United
              Kingdom and South Africa. This partnership provides us with
              excellent training, development and consultancy support.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
