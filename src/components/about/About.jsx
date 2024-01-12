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
            我是劉柔辰，畢業於國立中央大學資訊管理學系，目前就讀臺灣科技大學資訊管理系碩士班。 我喜歡探索資訊技術與應用發展，勇於接受挑戰，樂於學習新事物、將服務社會的熱情付諸行動。
            <br />
            大學期間，除了本系課程，我還有修習『第二專長–資訊工程程式設計』系列課程，學習跨領域知識及實作的能力，擅長的語言為 Python, JAVA, C#，有軟體開發、前後端開發、Android Application 開發和資料分析的能力與實作​經驗。大學畢業專題是製作一款結合音樂與情緒分析的個人化情緒陪伴APP，在團隊中，我主要負責歌詞情緒分析、設計統整心情變化的函數、前端介面設計與部分前後端連接，專題競賽獲得『中央資管專題競賽-第二名』、『大專校院資訊應用服務創新競賽-佳作』。
            <br />
            我的碩士研究領域為 Quantum Network (量子網路)，特別聚焦在量子網路的路由設計和最大化吞吐量等相關議題上。在研究中，以量子位元和量子閘為基礎，探索如何設計高效的量子網路拓樸結構，以降低通信延遲並提升網路性能，同時，關注如何最大化量子通信網路的整體吞吐量，考慮不同協議和通信場景下的最佳化問題。此外，目前也持續學習機器學習、資料探勘、資安議題、軟體工程、多媒體系統等專業知識和實作技能，以更全面地提升資訊能力和視野。
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About