import React, { useEffect, useState } from 'react';
import Card from './Card';

function Services() {
    const [serviceData, setServiceData] = useState([]);

    useEffect(()=> {
       async function fetchData(){
        try {
            const res = await fetch("service.json");
            const data = await res.json();
            console.log(data.events)
            setServiceData(data.events);
        } catch (error) {
            console.log(error)
        }
       }
       fetchData()
    },[])
  return (
    <div className='container mx-auto relative' >
    <img src="/public/symble.png" alt="" className='w-[300px] md:w-[500px] absolute -top-0 -left-32 opacity-25' />
    <img src="/public/symble.png" alt="" className='w-[300px] md:w-[500px] absolute bottom-0 -right-52 opacity-25 rotateY' />
        <h2 className="text-3xl font-bold text-center py-10 relative mb-6">Our Services <img src="/underline.png" alt="underline" className='absolute w-[300px] bottom-2 left-1/2 -translate-x-1/2' /></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {serviceData.length > 0 && serviceData.map((item, idx)=> (
                <Card item={item} key={idx} />
            ))}
        </div>
    </div>
  )
}

export default Services