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
            我是劉柔辰，畢業於國立中央大學資訊管理學系，目前就讀臺灣科技大學資訊管理系碩士班。
            我喜歡探索資訊技術與應用發展，勇於接受挑戰，樂於學習新事物、將服務社會的熱情付諸行動。<br />
            大學在學時，除了系上的專業課程，我還有修習『第二專長–資訊工程程式設計』，學習進階的知識及實作的能力，擅長的語言為JAVA, Python, C，有開發Android Application和資料分析的能力。<br />
            大學畢業專題是製作一款結合音樂與情緒分析的個人化情緒陪伴APP，在團隊中我主要負責歌詞情緒分析、設計統整心情變化的函數、前端介面設計與部分前後端連接，專題獲得獎項有『中央資管專題競賽-第二名』、『大專校院資訊應用服務創新競賽-佳作』。<br />
            碩士班實驗室是 High Speed Network Lab (高速網絡實驗室)，研究領域為 Quantum Network (量子網絡)，除了更深入地探討量子領域相關議題，目前也持續透過學校課程和自學的方式，學習機器學習、資料探勘、資安議題、軟體工程與管理、多媒體系統等專業知識和實作技能，以更全面地提升資訊能力和視野。
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About