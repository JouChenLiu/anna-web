import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { FaXTwitter } from "react-icons/fa6"
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Jou-Chen</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About_Me</a></li>
        <li><a href='#education'>Education</a></li>
        <li><a href='#job'>Work_Experience</a></li>
        <li><a href='#experience'>Skill</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='https://www.facebook.com/anna.liu.12935'><FaFacebookF /></a>
        <a href='https://www.instagram.com/jouchenanna/'><FiInstagram /></a>
        <a href='https://twitter.com/jouchenanna'><FaXTwitter /></a>
        <a href='https://www.linkedin.com/in/jouchenliu'><BsLinkedin /></a>
        <a href='https://github.com/JouChenLiu'><FaGithub /></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; 2022 Jou-Chen. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer