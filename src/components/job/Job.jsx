import React from 'react'
import './job.css'
import MULTICAST from '../../assets/Multicast.png'
import NCUEMBA from '../../assets/NCUEMBA.jpg'
import { GiSandsOfTime } from "react-icons/gi"

const Job = () => {
    return (
        <section id='job'>
            {/* <h5>What work experience I have</h5> */}
            <h2>My work experience</h2>

            <div className='container job_container'>
                <div className='job-image'>
                    <img src={MULTICAST} alt='MULTICAST Logo' />
                    <a href='http://www.multicast.com.tw/' target='_blank' rel="noreferrer">Multicast url</a>
                </div>
                <div>
                    <article className='job_option'>
                        <h3><big><b>銓聯資訊有限公司</b></big></h3>
                        <h3>Multicast Information Co., Ltd.</h3>
                        <ul>
                            <li>全端網頁開發 (Full-Stack Web Development)</li>
                            <li>安卓系統 App 開發 (Android Studio App Development)</li>
                            <li>資料處理 (Data Processing)</li>
                            <li>系統文件撰寫 (System Document Writing)</li>
                        </ul>
                        <h4><GiSandsOfTime size={20} /> Apr. 2023 – Aug. 2023</h4>
                    </article>
                </div>
                <div className='job-image'>
                    <img src={NCUEMBA} alt='NCU EMBA Logo' />
                    <a href='https://emba.ncu.edu.tw/' target='_blank' rel="noreferrer">NCU EMBA url</a>
                </div>
                <div>
                    <article className='job_option'>
                        <h3><big><b>國立中央大學 EMBA系辦 工讀生</b></big></h3>
                        <h3>Part-time work in EMBA office at NCU</h3>
                        <ul>
                            <li>協助行政業務 (含文書處理、公文收送、整理資料等)
                            </li>
                        </ul>
                        <p className="tab">Assist with administrative tasks (including document processing, sending and receiving official documents, organizing files, etc.)</p>
                        <h4><GiSandsOfTime size={20} /> Mar. 2021 - June 2022</h4>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Job