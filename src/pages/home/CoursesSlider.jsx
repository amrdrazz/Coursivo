// import React from 'react'

import { Link } from "react-router-dom"
import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


import { FaStar } from "react-icons/fa";

function CoursesSlider() {
  return (
      <>
      <div className="container">

      <Swiper 
    //   navigation={true} 
      autoplay={true}
      modules={[Navigation, Autoplay]} 
      className="courses_swiper"
      loop={true}
      slidesPerView={4}
      >
        {
            [...Array(10)].map((_, i) => (
                <SwiperSlide>
                    <Link key={i} to='/'>
                        <div className="course_card">
                            <div className="img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQm9wNFRBoQXgVwVbMPAaGk95Q9lqXvZzvfw&s" alt="" />
                            </div>
                            <div className="content">

                                <p className="title">Complete React Course</p>
                                <p className="teacher">Amr Mohamed</p>
                                <div className="stars">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <p className="price"></p>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
            ))
        }
      </Swiper>
      </div>
    </>
  )
}

export default CoursesSlider
