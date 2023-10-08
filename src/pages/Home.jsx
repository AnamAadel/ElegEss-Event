import React from 'react'
import About from '../components/About'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Navbar from './shared/Navbar'

function Home() {
  return (
    <div className='overflow-hidden'>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Testimonials />
    </div>
  )
}

export default Home