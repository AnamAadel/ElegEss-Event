import React from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Navbar from './shared/Navbar'

function Home() {
  return (
    <div className='overflow-hidden'>
        <Hero />
        <About />
        <Services />
        {/* <Testimonials /> */}
    </div>
  )
}

export default Home