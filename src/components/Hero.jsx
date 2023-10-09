import React from 'react'

function Hero() {
  return (
      <div className="hero min-h-screen relative bg-primary">
      <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
        <img src="/public/mosque.png" alt="" className='w-full h-1/2 absolute bottom-0 left-0 object-cover sm:object-fill' />
        <img src="/public/lighter.png" alt="" className='w-[300px] md:w-[500px] lg:w-[600px] absolute top-0 -left-20 sm:-left-12 lg:-left-32' />
        <img src="/public/text.png" alt="" className='w-[300px] md:w-[500px] lg:w-[600px] absolute top-0 -right-16 sm:-right-12 lg:-right-4' />
        <img src="/public/leaves.png" alt="" className='w-[300px] md:w-[500px] lg:w-[600px] absolute bottom-0 -left-72' />
      </div>
          <div className="hero-content text-center">
              <div className="max-w-md -mt-44">
                  <h1 className="text-3xl font-bold">Elevating Moments, Inspiring Memories</h1>
                  <p className="py-6 font-medium">Welcome to <span className='font-extrabold'>Elegance & Essence Events</span>, where we specialize in crafting unforgettable Islamic events that reflect your unique style and culture. From weddings to conferences, we bring your visions to life, ensuring every detail celebrates tradition and artistry. Let us transform your moments into cherished memories</p>
                  
              </div>
          </div>
      </div>
  )
}

export default Hero