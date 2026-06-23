// import React from 'react'

import { Link } from "react-router-dom"
import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


import Course from "../../components/Course";

function CoursesSlider() {
  return (
      <>
      <div className="container">

      <Swiper 
        // navigation={true} 
        autoplay={true}
        modules={[Navigation, Autoplay]} 
        className="courses_swiper"
        loop={true}
        slidesPerView={4}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          640:{
            slidesPerView: 2,
            spaceBetween: 20
          },
          768:{
            slidesPerView: 3,
            spaceBetween: 25
          },
          1150:{
            slidesPerView: 4,
            spaceBetween: 35
          },
          1460:{
            slidesPerView: 5,
            spaceBetween: 50
          }
        }}
      >
        {
          [...Array(10)].map((_, index) => (
            <SwiperSlide>
                <Course key={index} />
            </SwiperSlide>
          ))
        }
      </Swiper>
      </div>
    </>
  )
}

export default CoursesSlider
