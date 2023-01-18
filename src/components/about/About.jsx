import React from 'react'
import './about.css'
import ME from '../../assets/畢業jump.jpg'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { FaAward } from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Experience</h5>
              <small>1+ years working</small>
            </article>
            {/* 這邊改活動/領導/志工經歷? */}

            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>more than 3 completed</small>
            </article>
            {/* 專案或作品累積 */}

            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Awards</h5>
              <small>projects, sports, ...</small>
            </article>
            {/* 獎項 */}
          </div>

          {/* card看看要不要加工讀經歷? */}

          <p>
            我是劉柔辰，一個來自國立中央大學資訊管理學系，喜歡探索資訊技術與應用發展，勇於接受挑戰，樂於學習新事物，將服務社會的熱情付諸行動的樸實女孩。<br />
            在學時，除了系上的專業課程，我還有修習『第二專長–資訊工程程式設計』，學習進階的知識及實作的能力，擅長的語言為JAVA, Python, C，有開發Android Application和資料分析的能力，目前持續在自學網頁全端開發與機器學習。<br />
            畢業專題是製作一款結合音樂與情緒分析的個人化情緒陪伴APP，在團隊中我主要負責歌詞情緒分析、設計統整心情變化的函數、前端介面設計與部分前後端連接，專題獲得獎項有『中央資管專題競賽-第二名』、『大專校院資訊應用服務創新競賽-佳作』。
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About