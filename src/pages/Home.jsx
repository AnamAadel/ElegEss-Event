import React from 'react'
import About from '../components/About'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Navbar from './shared/Navbar'

function Home() {
  return (
    <div className='overflow-hidden'>
        <Navbar />
        <Hero />
        <About />
        <Services />
    </div>
  )
}

export default Home