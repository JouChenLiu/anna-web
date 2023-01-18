import React from 'react'
import './testimonials.css'
import CERT1 from '../../assets/2022第27屆大專校院資訊應用服務創新競賽.jpg'
import CERT2 from '../../assets/111學年度中央資管專題競賽.jpg'
import CERT3 from '../../assets/TOEIC_760.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    cert: CERT1,
    name: '2022第27屆大專校院資訊應用服務創新競賽',
    review: '資訊應用組 決賽佳作',
    // 可以多寫一些??
  },
  {
    cert: CERT2,
    name: '111學年度中央資管專題競賽',
    review: '校內專題競賽 第二名',
    // 可以多寫一些??
  },
  {
    cert: CERT3,
    name: '新制多益760分',
    review: '聽力380 閱讀380'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From University</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials_container'
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({ cert, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='contest_cert'>
                  <img src={cert} />
                </div>
                <h5 className='contest_name'>{name}</h5>
                <small className='contest_review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials