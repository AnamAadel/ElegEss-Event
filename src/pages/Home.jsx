import About from '../components/About'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from "../components/Testimonials"

function Home() {
  return (
    <div className='overflow-hidden'>
        <Hero />
        <About />
        <Services />
        <Testimonials />
    </div>
  )
}

export default Home