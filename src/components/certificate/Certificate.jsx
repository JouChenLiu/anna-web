import React from 'react'
import './certificate.css'
import CERT1 from '../../assets/2022第27屆大專校院資訊應用服務創新競賽.jpg'
import CERT2 from '../../assets/111學年度中央資管專題競賽.jpg'
import CERT3 from '../../assets/TOEIC_760.jpg'
import CERT4 from '../../assets/Get Started with API Gateway.png'
import CERT5 from '../../assets/Google Cloud Essentials.png'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    cert: CERT4,
    name: 'Get Started with API Gateway',
    review: 'Issued in May 2024 by Google,\r\n\
            License No. 9194789',
    cert_link: 'https://www.cloudskillsboost.google/public_profiles/83a3728d-4cac-4ecc-8564-82a1a1f39a72/badges/9194789?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    // 可以多寫一些??
  },
  {
    cert: CERT5,
    name: 'Google Cloud Essentials',
    review: 'Issued in April 2024 by Google,\r\n\
            License No. 8643415',
    cert_link: 'https://www.cloudskillsboost.google/public_profiles/83a3728d-4cac-4ecc-8564-82a1a1f39a72/badges/8643415?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    // 可以多寫一些??
  },
  {
    cert: CERT1,
    name: 'International ICT Innovative Services Awards 2022 (Innoserve Awards)',
    review: 'Winner of the Best Innovation Award of IP (Intellectual Property) in Taiwan',
    // name: '2022第27屆大專校院資訊應用服務創新競賽',
    // review: '資訊應用組 決賽佳作',
    cert_link: 'https://drive.google.com/file/d/10Sgt49666GjZbVzgMlEwp6nuPLWuMz-6/view?usp=sharing',
    // 可以多寫一些??
  },
  {
    cert: CERT2,
    name: 'International ICT Innovative Services Awards 2022 - Preliminary',
    review: 'Winning the second award of preliminary in ICT (Informations and Communications) contest in NCU',
    // name: '111學年度中央資管專題競賽',
    // review: '校內專題競賽 第二名',
    cert_link: 'https://drive.google.com/file/d/1JihqkmG18vqVXpakB6vxgi5clRfgB6Qd/view?usp=sharing',
    // 可以多寫一些??
  },
  {
    cert: CERT3,
    name: 'TOEIC 760',  // 新制多益 760分
    review: 'Listening 380, Reading 380',  // 聽力380 閱讀380
    cert_link: 'https://drive.google.com/file/d/1FWT26LVLZwGsOxQufvr3ZWx9cc6nCv4h/view?usp=sharing',
  }
]

const certificate = () => {
  return (
    <section id='certificate'>
      <h5>Certificates and Competition Awards</h5>
      <h2>Certificate</h2>

      <Swiper className='container certificate_container'
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({ cert, name, review, cert_link }, index) => {
            return (
              <SwiperSlide key={index} className='certificate'>
                <a href={cert_link}>
                  <div className='contest_cert'>
                    <img src={cert} />
                  </div>
                  <h5 className='contest_name'>{name}</h5>
                  <small className='contest_review'>{review}</small>
                </a>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default certificate