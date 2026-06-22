// import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

import { FaCode } from "react-icons/fa";

function HeroSlider() {
  return (


    <>
      <Swiper 
      // navigation={true} 
      autoplay={true}
      modules={[Navigation, Autoplay]} 
      className="categories_swiper"
      loop={true}
      slidesPerView={6}
      >
            {
                [...Array(10)].map((_, i) => (
                    <SwiperSlide>
                        <Link key={i} to='/' className='hero_slider_card' >
                            <span className="icon"><FaCode /></span>
                            <p>Programming</p>
                            <span>320 course</span>
                        </Link>
                    </SwiperSlide>
                )) 
            }
      </Swiper>
    </>
  );
}


export default HeroSlider
