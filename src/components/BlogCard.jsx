import React from 'react';
import { Link } from 'react-router-dom';
import { scroll } from "react-scroll";

function BlogCard({item}) {

    const scrollToTop = () => {
        scroll.scrollToTop();
      };
  return (
      <div className="card bg-base-100 shadow-xl overflow-hidden">
          <figure><img src={item.image} alt="image" className='h-52 w-full object-cover' /></figure>
          <div className="card-body relative">
              <img src="/public/tree.png" alt="" className='w-[90px] absolute bottom-20 rotateY right-8 opacity-25' />
              <h2 className="card-title font-bold text-2xl">{item.title}</h2>
              <p className='font-bold text-xl'>Author: {item.author}</p>
              <p className='font-bold'>Author: {item.date}</p>
              <p className='font-medium'>{item.content.slice(0,100)}</p>
              <div className="card-actions justify-end">
                  <Link to={`/blogs/${item.id}`} onClick={scrollToTop} className="btn text-primary bg-dark">Read More</Link>
              </div>
          </div>
      </div>
  )
}

export default BlogCard