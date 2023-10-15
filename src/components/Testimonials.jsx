import { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
    const [comments, setComments] = useState([])
    useEffect(()=> {
        async function fetchData(){
         try {
             const res = await fetch("comments.json");
             const data = await res.json();
             console.log(data.testimonials)
             setComments(data.testimonials);
         } catch (error) {
             console.log(error)
         }
        }
        fetchData()
     },[])
  return (
    <>
        <div className="container mx-auto py-24">
        <h2 className="text-3xl font-bold text-center py-10 relative mb-6">Testimonials<img src="/underline.png" alt="underline" className='absolute w-[300px] bottom-2 left-1/2 -translate-x-1/2' /></h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                clickable: true,
                }}
                autoplay={{
                delay: 2500,
                disableOnInteraction: true,
                }}
                loop={true}
                breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper"
            >
            {comments.length > 0 && comments.map((item)=> (
                <SwiperSlide  key={item.id}><TestimonialCard item={item} /></SwiperSlide>

            ))}
            </Swiper>
        </div>
    </>
  );
}
