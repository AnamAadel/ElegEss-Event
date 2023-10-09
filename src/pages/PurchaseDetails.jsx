import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card';
import useGetData from '../components/hook/useLocalStorage';

function PurchaseDetails() {
  const [serviceData, setServiceData] = useState([]);
    const getLocalData = useGetData()
    const loadData = useLoaderData();
    const userDonation = serviceData.filter(item => getLocalData.includes(parseInt(item.id)))
    console.log(loadData.events)
    console.log(userDonation)
    const [cardLength, setCardLength] = useState(4);

    function handleCardLength(){
      setCardLength(getLocalData.length)
      
    }


    useEffect(()=> {
       async function fetchData(){
        try {
            const res = await fetch("service/service.json");
            const data = await res.json();
            setServiceData(data.events);
        } catch (error) {
            console.log(error)
        }
       }
       fetchData()
    },[])
    
  return (
    <>
    <h2 className="text-3xl font-bold text-center py-10 relative mb-6">Events you've bought <img src="/underline.png" alt="underline" className='absolute w-[300px] bottom-2 left-1/2 -translate-x-1/2' /></h2>
    <div className='container mx-auto grid grid-cols-1 mt-16 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
      {getLocalData.length > 0 && userDonation.slice(0,cardLength).map(item => (
        <Card key={item.id} item={item} />
      ))}
    </div>
      {getLocalData.length > 4 && cardLength <= 4 && <button className='btn btn-primary text-white mx-auto block mt-4' onClick={handleCardLength} >Show All</button> }

      {getLocalData.length === 0 && <h2 className='font-bold text-3xl text-center col-span-full'>No Donation here!</h2>}
    </>
  )
}

export default PurchaseDetails