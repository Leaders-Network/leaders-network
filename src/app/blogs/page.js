import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Admin from '../adminn/page'
import React from 'react'
import Hero from './Hero'

export default function page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  )
}
