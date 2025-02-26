import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Education from './components/education/Education'
import Job from './components/job/Job'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Certificate from './components/certificate/Certificate'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Education />
      <Job />
      <Experience />
      <Services />
      <Portfolio />
      <Certificate />
      <Contact />
      <Footer />
    </>
  )
}

export default App