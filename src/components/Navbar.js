"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggler from "./Helper/ThemeToggler";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-[#040F4E] text-white font-quicksand shadow-lg fixed top-0 left-0 right-0 z-50">
        <nav className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 h-auto md:h-12 py-4 md:py-10 transition-all duration-300 ease-in-out">
          <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
            <Link href="/">
              <Image
                width={150}
                height={60}
                className="object-contain hover:opacity-90 transition-opacity duration-300 max-w-[120px] md:max-w-[150px]"
                src="/images/logo.png"
                alt="hero-banner"
                priority
              />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden hover:bg-blue-900 p-2 rounded-lg transition-colors duration-200"
            >
              <svg
                className="w-6 h-6 transform transition-transform duration-200 ease-in-out"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          <div
            className={`fixed md:static top-16 left-0 h-[calc(100vh-4rem)] md:h-auto bg-[#040F4E] w-full md:w-auto md:bg-transparent md:mr-20 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 transition-transform duration-300 ease-in-out z-50 overflow-y-auto md:overflow-visible`}
          >
            <ul className="flex flex-col md:flex-row gap-4 md:gap-5 items-center p-4 md:p-0">
              <Link href="/about">
                <li className="w-full md:w-auto text-center py-2 md:py-0 hover:text-gray-300 hover:bg-blue-900 md:hover:bg-transparent px-4 rounded-md transition-all duration-200 ease-in-out transform hover:scale-105">
                  About
                </li>
              </Link>
              <div className='w-full md:container mx-auto font-bold py-4 md:py-8 md:px-4 md:block border-t md:border-0 overflow-visible'>
                <div className='whitespace-nowrap'>
                  <ul className='flex flex-col md:inline-flex md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-gray-600'>
                    <li className='relative group'>
                      <a href='/services' className='text-white flex items-center justify-center md:inline-flex'>
                        Services 
                        <svg
                          className="w-4 h-4 ml-1 inline-block"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </a>
                      <ul className='md:absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-full md:w-64 z-50'>
                        <li><a href='/pages/web-dev' className='block py-2 hover:bg-blue-900 transition-colors duration-200 px-4 hover:text-white'>Website Development</a></li>
                        <li><a href='/pages/staff-recruit' className='block py-2 hover:bg-blue-900 transition-colors duration-200 px-4 hover:text-white'>Staff Recruitment</a></li>
                        <li><a href='/pages/sdlc' className='block py-2 hover:bg-blue-900 transition-colors duration-200 px-4 hover:text-white'>SDLC Software Development</a></li>
                        <li><a href='/pages/data-analysis' className='block py-2 hover:bg-blue-900 transition-colors duration-200 px-4 hover:text-white'>Data Analysis</a></li>
                        <li><a href='/pages/social-media-advert' className='block py-2 hover:bg-blue-900 transition-colors duration-200 px-4 hover:text-white'>Social Media Adverts</a></li>
                        <li><a href='/pages/mobile-app' className='block py-2 hover:bg-blue-900 transition-colors duration-200 px-4 hover:text-white'>Mobile Apps Development</a></li>
                      </ul>
                    </li>
                  </ul>          
                </div>
              </div>
              
              <Link href="/solutions">
                {" "}
              </Link>
             
              <Link href="/contactus">
                <li className="w-full md:w-auto text-center py-2 md:py-0 hover:text-gray-300 hover:bg-blue-900 md:hover:bg-transparent px-4 rounded-md transition-all duration-200 ease-in-out transform hover:scale-105">
                  Contact
                </li>
              </Link>
              
              <Link href="/blogs">
                <li className="w-full md:w-auto text-center py-2 md:py-0 hover:text-gray-300 hover:bg-blue-900 md:hover:bg-transparent px-4 rounded-md transition-all duration-200 ease-in-out transform hover:scale-105">
                  Blogs
                </li>
              </Link>
              <Link href="/adminn">
                <li className="w-full md:w-auto text-center py-2 md:py-0 hover:text-gray-300 hover:bg-blue-900 md:hover:bg-transparent px-4 rounded-md transition-all duration-200 ease-in-out transform hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </li>
              </Link>
              <ThemeToggler />
            </ul>
          </div>
        </nav>
      </div>
      <div className="h-24 md:h-32"></div>
    </>
  );
}
