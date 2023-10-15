import { useEffect, useState } from 'react';
import Card from '../components/Card';
import useGetData from '../components/hook/useLocalStorage';

function Purchases() {
  const [serviceData, setServiceData] = useState([]);
    const getLocalData = useGetData()
    const userPurchases = serviceData.filter(item => getLocalData.includes(parseInt(item.id)))
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
    <div className='container mx-auto grid grid-cols-1 mt-16 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
    <h2 className="text-3xl font-bold text-center py-10 col-span-full relative">Services you have bought <img src="/underline.png" alt="underline" className='absolute w-[300px] bottom-2 left-1/2 -translate-x-1/2' /></h2>
      {getLocalData.length > 0 && userPurchases.slice(0,cardLength).map(item => (
        <Card key={item.id} item={item} />
      ))}
      {getLocalData.length > 4 && cardLength <= 4 && <button className='btn btn-primary text-white mx-auto block mt-4' onClick={handleCardLength} >Show All</button> }

      {getLocalData.length === 0 && <div className='col-span-full'>
        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/empty-box-5342761-4468833.png" alt="" className='w-96 mx-auto ' />
        <h2 className='font-bold text-3xl text-center col-span-full my-8'>no service you have purchased</h2>
      </div> 
      }
    </div>
    </>
  )
}

export default Purchases