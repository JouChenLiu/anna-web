import React from 'react'
import './education.css'
import NCU from '../../assets/NCU.png'
import NTUST from '../../assets/NTUST2.png'
import { PiStudentBold } from "react-icons/pi"
import { PiCertificateLight } from "react-icons/pi"
import { GiSandsOfTime } from "react-icons/gi"

const Education = () => {
    return (
        <section id='education'>
            {/* <h5>What education I have</h5> */}
            <h2>My Education</h2>

            <div className='container education_container'>
                <div className='education-image'>
                    <img src={NTUST} alt='NTUST Logo' />
                    <a href='https://www.ntust.edu.tw/' target='_blank' rel="noreferrer">NTUST url</a>
                </div>
                <div>
                    <article className='education_option'>
                        <h3><big><b>國立臺灣科技大學 資訊管理系 碩士班</b></big></h3>
                        <h3>National Taiwan University of Science and Technology</h3>
                        <h3><PiStudentBold size={20} /> Master of Business Administration (MBA),</h3>
                        <h3 className="tab">Department of Information Management (IM)</h3>
                        <h4><GiSandsOfTime size={20} /> Sep. 2023 – June 2025 (Expected)</h4>
                    </article>
                </div>
                <div className='education-image'>
                    <img src={NCU} alt='NCU Logo' />
                    <a href='https://www.ncu.edu.tw/tw/' target='_blank' rel="noreferrer">NCU url</a>
                </div>
                <div>
                    <article className='education_option'>
                        <h3><big><b>國立中央大學 資訊管理學系 學士班</b></big></h3>
                        <h3>National Central University</h3>
                        <h3 ><PiStudentBold size={20} /> Bachelor of Business Administration (BBA),</h3>
                        <h3 className="tab">Department of Information Management (IM)</h3>
                        <h4><PiCertificateLight size={20} /> Minor Specialty: Programming Design in the Department of Computer Science Information Engineering (CSIE)</h4>
                        <h4><GiSandsOfTime size={20} /> Sep. 2019 – June 2023</h4>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Education