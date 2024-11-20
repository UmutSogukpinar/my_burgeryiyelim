import React, { useContext } from 'react'
import Footer from '../footer/Footer'
import "./aboutUs.css"
import { LanguageContext } from '../../Contexts/LanguageContext'

const AboutUs = () => {

  const {brandName} = useContext(LanguageContext);

  return (
    <div id='about-us'>
      <main id='about-us-bg'>
        
        <section id='about-us-paraph'>
          <h1>{brandName}</h1>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default AboutUs