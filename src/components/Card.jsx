import React from 'react'

function Card({item}) {
  return (
      <div className="card bg-base-100 shadow-xl">
          <figure><img src={item.image} alt="image" className='h-52 w-full object-cover' /></figure>
          <div className="card-body bg-bisque relative">
            <img src="/public/leaves.png" alt="" className='w-[300px] absolute bottom-20 -right-20 opacity-25 rotateY' />
              <h2 className="card-title">{item.name}</h2>
              <p>Price: {item.price}</p>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
                  <button className="btn text-primary bg-dark">Read More</button>
              </div>
          </div>
      </div>
  )
}

export default Card