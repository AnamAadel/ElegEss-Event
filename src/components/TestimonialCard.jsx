import React from 'react'
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri"

function TestimonialCard({item}) {
  return (
    <div className="card card-compact w-96 h-full bg-base-100 shadow-2xl border py-8">
  <div className="card-body text-center">
    <p><RiDoubleQuotesL className='inline text-3xl' />{item.testimonial} <RiDoubleQuotesR className='inline text-3xl' /></p>
    <img src={item.image} alt="Shoes" className='w-16 h-16 object-cover object-top rounded-full overflow-hidden mx-auto' />
    <h2 className="font-bold">{item.name}</h2>
    <h3 className="font-medium">{item.location}</h3>
  </div>
</div>
  )
}

export default TestimonialCard