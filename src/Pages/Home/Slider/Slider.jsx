import React, { useRef, useState } from 'react';

import {Swiper, SwiperSlide} from "swiper/react";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../Slider/slider.css' 

import { EffectCoverflow, Pagination } from 'swiper/modules';




const Slider = () => {
  
    
    return (
        <div>
       <Swiper 
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 10,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper swiper-3d"
      >
        <SwiperSlide className='w-[300px] h-[300px] bg-center bg-cover'>
          <img className="block w-[80%] h-96 object-cover" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide className='w-[300px] h-[300px] bg-center bg-cover'>
          <img className="block w-[80%] h-96 object-cover" src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide className='w-[300px] h-[300px] bg-center bg-cover'>
          <img className="block w-[80%] h-96 object-cover" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide className='w-[300px] h-[300px] bg-center bg-cover'>
          <img className="block w-[80%] h-96 object-cover" src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide className='w-[300px] h-[300px] bg-center bg-cover'>
          <img className="block w-[80%] h-96 object-cover" src="https://images.unsplash.com/photo-1590073844006-33379778ae09?auto=format&fit=crop&q=80&w=1674&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide className='w-[300px] h-[300px] bg-center bg-cover'>
          <img className="block w-[80%] h-96 object-cover" src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=1632&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide className='w-[300px] h-[300px] bg-center bg-cover'>
          <img className="block w-[80%] h-96 object-cover" src="https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg" />
        </SwiperSlide>
        <SwiperSlide className='w-[300px] h-[300px] bg-center bg-cover'>
          <img className="block w-[80%] h-96 object-cover" src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=1748&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide className='w-[300px] h-[300px] bg-center bg-cover'>
          <img className="block w-[80%] h-96 object-cover" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Slider;