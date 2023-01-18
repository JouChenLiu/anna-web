import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Jou-Chen</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='https://www.facebook.com/anna.liu.12935'><FaFacebookF/></a>
        <a href='https://www.instagram.com/jouchenanna/'><FiInstagram/></a>
        <a href='https://twitter.com/jouchenanna'><IoLogoTwitter/></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; 2022 Jou-Chen. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer