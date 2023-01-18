import React from 'react'
import Resume from '../../assets/中文履歷.pdf'
import Resume2 from '../../assets/English_Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'>下載中文履歷</a>
        <a href={Resume2} download className='btn'>Download English Resume</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk!</a>
    </div>
  )
}

export default CTA