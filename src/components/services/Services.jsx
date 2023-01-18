import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
      {/* 這邊還可以寫資料分析,機器學習,自然語言處理... */}
        <article className='service'>
          <div className='service_head'>
            <h3>Frontend Design</h3>
          </div>

          <ul className='service_list'>
            {/* 這邊在寫長一點多列點/或是用一句一句話說明 */}
            <li>
              <BiCheck className='service_list-icon' />
              <p>Android Application</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Web Design</p>
            </li>
          </ul>
        </article>
        {/* End of Frontend Design */}
        
        <article className='service'>
          <div className='service_head'>
            <h3>Database Design</h3>
          </div>

          <ul className='service_list'>
            {/* 這邊在寫長一點多列點/或是用一句一句話說明 */}
            <li>
              <BiCheck className='service_list-icon' />
              <p>ER-model</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>SQL Script</p>
            </li>
          </ul>
        </article>
        {/* End of Database Design */}
        
        <article className='service'>
          <div className='service_head'>
            <h3>Data Science</h3>
          </div>

          <ul className='service_list'>
            {/* 這邊在寫長一點多列點/或是用一句一句話說明 */}
            <li>
              <BiCheck className='service_list-icon' />
              <p>Python</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Exploratory Data Analysis</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>In-depth Analysis<br/>(hypothesis testing, bootstrap, etc)</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Visualization/Statistics</p>
            </li>
          </ul>
        </article>
        {/* End of Data Science */}
      </div>
    </section>
  )
}

export default Services