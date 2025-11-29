import React, { useState } from 'react'
import './job.css'
import ADD from '../../assets/ADD2.png'
import MULTICAST from '../../assets/Multicast.png'
import NCUEMBA from '../../assets/NCUEMBA.jpg'
import { GiSandsOfTime } from "react-icons/gi"
import { MdLanguage } from "react-icons/md"

const chi = [
    <div>
        <ul>
            <li>開發「進銷貨系統」，使用Python，擷取Excel進貨檔案的部分資料，同時提供使用者輸入需客製化商品詳細資料的內容，再將所有資料加以處理和調整成需要的格式，最後匯出一份該公司內部所需的銷售商品Excel檔案，用於列印商品吊牌和日後進銷售所使用。</li>
            <li>開發「銷售資料Email寄送系統」，使用Python、SMTP、MIME等，分別傳輸當日或特定日期的銷售資料給對應的廠商，目前廠商數量有40間。當日銷售只需一個按鍵即可自動寄送銷售檔給每個廠商，特定日期或廠商可透過input個別寄送。此系統解決該公司原系統寄送郵件失敗和中斷之問題。</li>
        </ul>
    </div>
]
const eng = [
    <div>
        <p className="tab">Developed an "Inventory and Sales System" using Python, which extracts relevant data from Excel purchase files. It allows users to input customized details for specific products. The system processes and adjusts all data into the required format, and finally exports an Excel file containing sales information tailored for internal use. This file is utilized for printing product tags and future sales tracking.</p>
        <p className="tab">Developed a "Sales Data Email Sending System" using Python, SMTP, MIME, etc. It facilitates the transmission of daily or specific date sales data to corresponding vendors. Currently, there are 40 vendors. With a single button click, the system automatically sends sales files to each vendor for the current day's sales. For specific dates or vendors, individualized sending can be done through input. This system resolves the company's previous issues of failed and interrupted email transmissions from the original system.</p>
    </div>
]

const Job = () => {
    const [isEng, setIsEng] = useState(true);
    const [buttonText, setButtonText] = useState("繁體中文");

    // 中英文變換
    const click = () => {
        let tt = isEng === true ? "English" : "繁體中文";
        setButtonText(tt);
        setIsEng(!isEng);
    };

    return (
        <section id='job'>
            {/* <h5>What work experience I have</h5> */}
            <h2>My work experience</h2>

            <div className='container job_container'>
                <div className='job-image'>
                    <img src={ADD} alt='ADD' />
                    {/* <a href='??' target='_blank' rel="noreferrer">ADD url</a> */}
                </div>
                <div>
                    <article className='job_option'>
                        <h3><big><b>ADD 流行服飾</b></big></h3>
                        <h3>ADD Clothes</h3>
                        <h3>Information Assistant Intern</h3>
                        <button className='intro_ADD' onClick={click}><MdLanguage />{buttonText} </button>
                        <div>
                            {isEng && <div>{eng}</div>}
                            {!isEng && <div>{chi}</div>}
                        </div>
                        <h4><GiSandsOfTime size={20} /> Apr. 2023 – Now</h4>
                    </article>
                </div>
                <div className='job-image'>
                    <img src={MULTICAST} alt='MULTICAST Logo' />
                    {/* <a href='http://www.multicast.com.tw/' target='_blank' rel="noreferrer">Multicast url</a> */}
                </div>
                <div>
                    <article className='job_option'>
                        <h3><big><b>銓聯資訊有限公司</b></big></h3>
                        <h3>Multicast Information Co., Ltd.</h3>
                        <h3>Information Assistant Intern</h3>
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