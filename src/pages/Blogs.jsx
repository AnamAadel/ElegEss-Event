import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogCard from '../components/BlogCard';

function Blogs() {
    const [blogData, setBlogData] = useState([]);
    // const blogData = useLoaderData();
    const paramId = useParams();
    console.log(blogData)

    const findItem = blogData.find(item=> item.id == paramId.id);
    console.log(findItem)

    useEffect(()=> {
       async function fetchData(){
        try {
            const res = await fetch("blogData.json");
            const data = await res.json();
            setBlogData(data.blogs);
            console.log(data.blogs)
        } catch (error) {
            console.log(error)
        }
       }
       fetchData()
    },[])
  return (
    <>
        <div className="container mx-auto space-y-8">
            <div className="card md:flex-row md:items-start gap-6 rounded-none bg-base-100 overflow-hidden">
                <figure className='relative flex-1 mt-12'>
                    <img src={findItem?.image} alt="image" className='h-96 w-full object-cover' />
                </figure>
                <div className="card-body relative flex-1">
                      <h2 className="card-title font-bold text-2xl">{findItem?.title}</h2>
                      <p className='font-bold text-xl'>Author: {findItem?.author}</p>
                      <p className='font-bold'>Author: {findItem?.date}</p>
                      <p className='font-medium'>{findItem?.content}</p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {blogData.length > 0 && blogData.filter(item => item.id != paramId.id).map((item)=> (
                        <BlogCard item={item} key={item.id} />
                ))}

            </div>
        </div>

    </>
  )
}

export default Blogs