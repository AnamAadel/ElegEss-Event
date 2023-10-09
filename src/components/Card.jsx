import React from 'react';
import { Link } from 'react-router-dom';
import { scroll } from "react-scroll";

function Card({item}) {
  const scrollToTop = () => {
        scroll.scrollToTop();
      };
  return (
      <div className="card bg-base-100 shadow-xl overflow-hidden" data-aos="fade-up">
          <figure><img src={item.image} alt="image" className='h-52 w-full object-cover' /></figure>
          <div className="card-body relative">
            <img src="/public/leaves.png" alt="" className='w-[300px] absolute bottom-20 -right-20 opacity-25 rotateY' />
              <h2 className="card-title font-bold text-xl">{item.name}</h2>
              <p className='font-bold'>Price: {item.price}</p>
              <p className='font-medium'>{item.description.slice(0, 60)}...</p>
              <div className="card-actions justify-end">
                  <Link to={`/service/${item.id}`} className="btn text-primary bg-dark" onClick={scrollToTop}>Read More</Link>
              </div>
          </div>
      </div>
  )
}

export default Card