
import PropTypes from 'prop-types';
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

function TestimonialCard({item}) {
  return (
    <div className="card card-compact h-[300] bg-base-100 shadow-xl border py-8 mb-16">
  <div className="card-body text-center">
    <p><RiDoubleQuotesL className='inline text-3xl' />{item.testimonial} <RiDoubleQuotesR className='inline text-3xl' /></p>
    <img src={item.image} alt="Shoes" className='w-16 h-16 object-cover object-top rounded-full overflow-hidden mx-auto' />
    <h2 className="font-bold">{item.name}</h2>
    <h3 className="font-medium">{item.location}</h3>
  </div>
</div>
  )
}

TestimonialCard.propTypes = {
  item: PropTypes.object.isRequired
}
export default TestimonialCard