import React from 'react'

function About() {
  return (
        <div className="grid grid-cols-1 md:grid-cols-5">
            {/* <img src="/about.jpg" alt="office image" className='w-full md:w-1/2 border-[2rem] border-dark' /> */}
            <div className='bg-primary flex justify-center items-center relative'>
                <h2 className='text-4xl font-bold md:rotate-180 text-center md:write_lr py-4 ' >About Us </h2>
                <img src="/tree.png" className='w-16 absolute bottom-0 right-0 rotateY opacity-50' alt="" />
            </div>
            <div className="p-6 md:selection:p-16 text-center w-full col-span-3 bg-bisque relative overflow-hidden">
            
            <img src="/symble.png" className='w-64 absolute -bottom-32 -right-32 opacity-30' alt="" />
            
                <p className="font-medium ">Welcome to <b>Elegance & Essence Events</b>, your trusted partner in creating unforgettable Islamic events and experiences.

                    At <b>Elegance & Essence Events</b>, we are passionate about bringing your dreams and visions to life, weaving together the rich traditions and values of Islam with modern creativity and expertise. Our mission is to provide top-notch event management services that not only meet but exceed your expectations, ensuring every moment is filled with beauty, spirituality, and meaning. Whether you're planning a wedding, a corporate gathering, a religious celebration, or any other special occasion, <b>Elegance & Essence Events</b> is here to make it extraordinary. Let us take the stress out of event planning while you focus on enjoying the moment and creating lasting memories.</p>
            </div>
            <div className='bg-dark'></div>
        </div>
  )
}

export default About