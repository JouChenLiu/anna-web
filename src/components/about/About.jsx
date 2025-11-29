import React, { useState } from 'react'
import './about.css'
import ME from '../../assets/畢業jump.jpg'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { FaAward } from 'react-icons/fa'
import { MdLanguage } from "react-icons/md"

const chi = [
  <div>
    我是劉柔辰，畢業於中央大學資訊管理學系，目前就讀臺灣科技大學資訊管理系及德國卡爾斯魯厄應用科技大學電腦科學與商業資訊系統的碩士雙聯學位。 我喜歡探索資訊技術與應用發展，勇於接受挑戰，樂於學習新事物、將服務社會的熱情付諸行動。
    <br />
    大學期間，除了本系課程，我還有修習『第二專長–資訊工程程式設計』系列課程，學習跨領域知識及實作的能力，擅長的語言為 Python, JAVA, C# 等，有 AI、機器學習、大型語言模型、軟體開發、前後端開發、Android Application 開發和資料分析的能力與實作​經驗。大學畢業專題是製作一款結合音樂與情緒分析的個人化情緒陪伴APP，在團隊中，我主要負責歌詞情緒分析、設計統整心情變化的函數、前端介面設計與部分前後端連接，專題競賽獲得『中央資管專題競賽-第二名』、『大專校院資訊應用服務創新競賽-佳作』。
    <br />
    在臺灣科技大學的研究領域為 Quantum Network (量子網路)，特別聚焦在量子網路的路由設計和最大化吞吐量等相關議題上。在研究中，以量子位元和量子閘為基礎，探索如何設計高效的量子網路拓樸結構，以降低通信延遲並提升網路性能，同時，關注如何最大化量子通信網路的整體吞吐量，考慮不同協議和通信場景下的最佳化問題。
    <br />
    在德國卡爾斯魯厄應用科技大學的研究領域為軟體測試，專注在利用語言模型提升測試案例的生成效率與品質。我的碩士論文研究提出了一個結合 CodeT5+ 語言模型與多目標強化學習 (MORL) 的方法 ，核心目標是從自然語言的需求描述和函數原型中，自動生成平衡語法正確性、可執行性和覆蓋多樣性等多目標的單元測試案例。修習課程包含人工智慧、資訊安全、以使用者為中心的設計、IT 專案管理等。此外，目前也持續學習大型語言模型、機器學習、資訊安全、軟體工程等專業知識和實作技能，以更全面地提升資訊能力和視野。
  </div>
]
const eng = [
  <div>
    My name is Jou Chen, Liu. I am passionate about exploring the development of information technology and applications, embracing challenges, and enthusiastic about learning new things. Also, I put my passion for serving society into action.
    <br />
    My undergraduate project is to create a personalized emotional companion APP that combines music and emotion analysis. In the team, I was mainly responsible for lyric emotion analysis, designing functions for integrating mood changes, some front-end and back-end. Also, the project won the "International ICT Innovative Services Awards 2022".
    <br />
    The research area for my master's double degree at NTUST in Taiwan is Quantum Networks, with a special focus on routing design and maximizing throughput in quantum networks. In my research, based on quantum bits (qubits) and quantum gates, I explore how to design efficient quantum network topologies to reduce communication latency and improve network performance. I also focus on maximizing the overall throughput of quantum communication networks, considering optimization issues under different protocols and communication scenarios.
    <br />
    The research area for my master's double degree at HKA in Germany is software testing, focusing on improving the efficiency and quality of test case generation using language models. My master's thesis proposed a method combining the CodeT5+ language model and Multi-Objective Reinforcement Learning (MORL). The core objective is to automatically generate unit test cases that balance syntactic correctness, executability, and coverage diversity from natural language requirement descriptions and function prototypes. Courses I took included artificial intelligence, information security, user centered design, IT project management, etc. In addition, I am continuously learning professional knowledge and practical skills such as large language model, machine learning, cybersecurity, software engineering, etc., to comprehensively enhance my information capabilities and broaden my perspective.
  </div>
]
// <div>
//   My name is Jou Chen, Liu. I graduated from the Department of Information Management at National Central University. Currently, and I am currently pursuing a master's degree in the Department of Information Management at Taiwan University of Science and Technology. I am passionate about exploring the development of information technology and applications, embracing challenges, and enthusiastic about learning new things. Also, I put my passion for serving society into action.
//   <br/>
//   During my undergraduate studies, in addition to the courses in my department, I also took a series of courses called "Miner Specialty - Programming Design in the Department of Computer Science Information Engineering" to learn interdisciplinary knowledge and practical skills. I am proficient in Python, JAVA, and C#, with experience in software development, front-end and back-end development, Android application development, and data analysis. The undergraduate project is to create a personalized emotional companion APP that combines music and emotion analysis. In the team, I was mainly responsible for lyric emotion analysis, designing functions for integrating mood changes, front-end interface design, and some front-end and back-end connections. Also, the project won the "International ICT Innovative Services Awards 2022".
//   <br/>
//   My research area for my master's degree is Quantum Networks, with a special focus on routing design and maximizing throughput in quantum networks and other related issues. In my research, based on quantum bits (qubits) and quantum gates, I explore how to design efficient quantum network topologies to reduce communication latency and improve network performance. I also focus on maximizing the overall throughput of quantum communication networks, considering optimization issues under different protocols and communication scenarios. In addition, I am continuously learning professional knowledge and practical skills such as machine learning, data mining, cybersecurity, software engineering, multimedia systems, etc., to comprehensively enhance my information capabilities and broaden my perspective.
// </div>

const About = () => {
  const [isEng, setIsEng] = useState(true);
  const [buttonText, setButtonText] = useState("繁體中文");

  // 中英文變換
  const click = () => {
    let tt = isEng === true ? "English" : "繁體中文";
    setButtonText(tt);
    setIsEng(!isEng);
  };

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

          <button className='b0' onClick={click}><MdLanguage />{buttonText} </button>
          <div className='intro'>
            {isEng && <div>{eng}</div>}
            {!isEng && <div>{chi}</div>}
          </div>

          <a href='#contact' className='b1 btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About