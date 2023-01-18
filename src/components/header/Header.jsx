import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/學士帽_去背.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h2>Hello, I'm</h2>
        <h1>Jou-Chen<small>(Anna)</small> Liu</h1>
        <h3 className='text-light'>Frontend Developer/Application Developer/Software Programmer/<br/>Data Analyst/Backend Developer</h3>
        
        <CTA />
        <HeaderSocial />

        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header