import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import Footer from "../components/Footer";
import Navbar from './shared/Navbar';

function Details() {
    const [serviceData, setServiceData] = useState([]);
    const paramId = useParams();

    const findItem = serviceData.find(item=> item.id === paramId.id);
    console.log(findItem)

    useEffect(()=> {
       async function fetchData(){
        try {
            const res = await fetch("service.json");
            const data = await res.json();
            console.log(data)
            setServiceData(data.events);
        } catch (error) {
            console.log(error)
        }
       }
       fetchData()
    },[])
  return (
    <>
    <Navbar />
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-start">
        <div className="card rounded-none bg-base-100 overflow-hidden sm:col-span-2 lg:col-span-3">
            <figure className='relative'>
                <img src={findItem?.image} alt="image" className='w-full object-cover' />
                <div className="hero absolute left-0 bottom-0" >
          <div className="hero-overlay bg-black bg-opacity-60 h-full"></div>
          <button className="btn text-dark bg-primary font-bold border-0 ml-6 my-4 justify-self-start">Pay for {findItem?.price}</button>
        </div>
            </figure>
            <div className="card-body relative">
                <h2 className="card-title font-bold text-xl">{findItem?.name}</h2>
                <p className='font-bold'>Price: {findItem?.price}</p>
                <p className='font-medium'>{findItem?.description}</p>
                {/* <div className="card-actions">
                    <button className="btn text-dark bg-primary">Read More</button>
                </div> */}
            </div>
        </div>

        <div className='sm:col-span-1 lg:col-span-2 space-y-6'>
            {serviceData.length > 0 && serviceData.filter(item => item.id !== paramId.id).map((item, idx)=> (
                    <Card item={item} key={idx} />
                ))}

        </div>
    </div>
    <Footer />
    </>
  )
}

export default Details