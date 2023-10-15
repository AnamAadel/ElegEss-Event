

function About() {
  return (
        <div className="container mx-auto">
            {/* <img src="/about.jpg" alt="office image" className='w-full md:w-1/2 border-[2rem] border-dark' /> */}
            <h2 className="text-3xl font-bold text-center py-10 relative mb-6">Our Services <img src="/underline.png" alt="underline" className='absolute w-[300px] bottom-2 left-1/2 -translate-x-1/2' /></h2>
            <div className="p-6 md:selection:p-16 text-center w-full col-span-3 relative overflow-hidden ">
            
            <img src="/symble.png" className='w-64 absolute -bottom-32 -right-32 opacity-30' alt="" />
            <img src="/tree.png" className='w-32 absolute bottom-0 left-32 opacity-30' alt="" />
            
                <p className="font-medium max-w-xl mx-auto">Welcome to <b>Elegance & Essence Events</b>, your trusted partner in creating unforgettable Islamic events and experiences.

                    At <b>Elegance & Essence Events</b>, we are passionate about bringing your dreams and visions to life, weaving together the rich traditions and values of Islam with modern creativity and expertise. Our mission is to provide top-notch event management services that not only meet but exceed your expectations, ensuring every moment is filled with beauty, spirituality, and meaning. Whether you are planning a wedding, a corporate gathering, a religious celebration, or any other special occasion, <b>Elegance & Essence Events</b> is here to make it extraordinary. Let us take the stress out of event planning while you focus on enjoying the moment and creating lasting memories.</p>
            </div>
        </div>
  )
}

export default About