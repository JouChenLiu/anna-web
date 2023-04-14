import React from 'react'
import './portfolio.css'
import IMG0 from '../../assets/poster.jpg'
import IMG1 from '../../assets/系統分析與設計_可議價之二手書網站.png'
import IMG2 from '../../assets/資料科學_桃園市交通改善計畫.png'
import IMG3 from '../../assets/資料庫管理_餐廳外送平台.png'
import IMG4 from '../../assets/計算機網路Socket Project_多人聊天室.png'
import IMG5 from '../../assets/Java實作記事本.png'
import IMG6 from '../../assets/Java實作小畫家.png'

// Do not use the images in production!!!

const data = [
  // github & dribbble (or youtube)
  {
    id: 0,
    image: IMG0,
    title: ['畢業專題', 'CAN - 舒緩情緒最佳的夥伴'],
    github: 'https://github.com/JouChenLiu/APP-CAN_Music_Emotion_Recognition_Application',
    demo: 'https://youtu.be/AdOh6mfwlug',
    visibility: 'visible' // demo button 設定為顯示
  },
  {
    id: 1,
    image: IMG1,
    title: ['系統分析與設計 可議價之二手書網站'],
    github: 'https://github.com/JouChenLiu/Second-Hand_Bookstore_Platform_in_class_system_analysis_and_design',
    demo: '',
    visibility: 'hidden' // demo button 設定為隱藏
  },
  {
    id: 2,
    image: IMG2,
    title: ['資料科學 桃園市交通改善計畫'],
    github: 'https://github.com/JouChenLiu/DS_teamproject_team8',
    demo: '',
    visibility: 'hidden' // demo button 設定為隱藏
  },
  {
    id: 3,
    image: IMG3,
    title: ['資料庫管理 餐廳外送平台'],
    github: 'https://github.com/JouChenLiu/Food_Delivery_Platform_in_class_database_management',
    demo: '',
    visibility: 'hidden' // demo button 設定為隱藏
  },
  {
    id: 4,
    image: IMG4,
    title: ['TCP Socket 多人聊天室'],
    github: 'https://github.com/JouChenLiu/Socket-Project_Multiplayer-Chat-Room_in_class_computer_network',
    demo: '',
    visibility: 'hidden' // demo button 設定為隱藏
  },
  {
    id: 5,
    image: IMG5,
    title: ['Java 實作記事本'],
    github: 'https://github.com/JouChenLiu/Notepad_in_class_advanced_java',
    demo: '',
    visibility: 'hidden' // demo button 設定為隱藏
  },
  {
    id: 6,
    image: IMG6,
    title: ['Java 實作小畫家'],
    github: 'https://github.com/JouChenLiu/Paint_in_class_advanced_java',
    demo: '',
    visibility: 'hidden' // demo button 設定為隱藏
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {
          data.map(({id, image, title, github, demo, visibility}) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title[0]}<br/>{title[1]}</h3>
                <div className='portfolio_item-cta'>
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} style={visibility={visibility}} className='btn btn-primary' target='_blank' rel="noreferrer">Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio