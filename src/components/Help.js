import React from 'react'

export default function Help() {
  return (
    <div>
      <div className='flex-col items-center text-center p-20 space-y-10 bg-gradient-to-b from-white to-gray-100'>
        <h2 className='text-5xl font-bold text-[#040F4E] leading-tight tracking-tight hover:text-[#0A1F7D] transition-colors duration-300'>Do you need help from Leaders Network?</h2>
        <p className='text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed'>Kindly, contact us for more information about our services and solutions</p>
        <button className='bg-transparent hover:bg-[#EC5E2A] hover:text-white transition-all duration-300 ease-in-out rounded-full border-2 border-[#EC5E2A] text-[#EC5E2A] px-14 py-5 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105'>Contact Us</button>
      </div>
    </div>
  )
}
