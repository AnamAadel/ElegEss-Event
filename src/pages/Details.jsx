import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Card from '../components/Card';
import { useData } from '../components/context/EventContext';

function Details() {
    const [serviceData, setServiceData] = useState([]);
    const paramId = useParams();
    const {setDataToLocal} = useData();

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
    <div className="container mx-auto space-y-8 relative">
    <ToastContainer />
        <div className="card flex flex-row gap-6 rounded-none bg-base-100 overflow-hidden sm:col-span-2 lg:col-span-3">
            <figure className='relative flex-1'>
                <img src={findItem?.image} alt="image" className='h-96 w-full object-cover' />
            </figure>
            <div className="card-body relative flex-1">
                <h2 className="card-title font-bold text-4xl">{findItem?.name}</h2>
                <p className='font-bold flex-grow-0'>Price: {findItem?.price}</p>
                <p className='font-medium flex-grow-0'>{findItem?.description}</p>
                <div className="card-actions">
                <button className="btn text-white bg-dark font-bold border-0 my-4 justify-self-start" onClick={()=> setDataToLocal(parseInt(findItem.id))}>Pay for {findItem?.price}</button>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {serviceData.length > 0 && serviceData.filter(item => item.id !== paramId.id).map((item, idx)=> (
                    <Card item={item} key={idx} />
                ))}

        </div>
    </div>
    
    </>
  )
}

export default Details