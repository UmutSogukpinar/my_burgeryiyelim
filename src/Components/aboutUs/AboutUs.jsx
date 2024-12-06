import React, { useContext } from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import "./aboutUs.css"
import { LanguageContext } from '../../Contexts/LanguageContext'

const AboutUs = () => {

  const {brandName, currentLang, dialogues} = useContext(LanguageContext);

  return (
    <>
    <Navbar/>
      <main id='about-us-bg'>
        <div id='about-us-paraph'>
          <img src="/images/aboutUs-img/aboutUs-upper-img.png" alt="" />
          <h1>{brandName}</h1>
          <p>{dialogues[currentLang].aboutUs.parap1}</p>
          <p>{dialogues[currentLang].aboutUs.parap2}</p>
          <p>{dialogues[currentLang].aboutUs.parap3}</p>
          <p>{dialogues[currentLang].aboutUs.parap4}</p>
          <p>{dialogues[currentLang].aboutUs.parap5}</p>
          <h3>{dialogues[currentLang].aboutUs.title1}</h3>
          <p>{dialogues[currentLang].aboutUs.parap6}</p>
          <h3>{dialogues[currentLang].aboutUs.title2}</h3>
          <p>{dialogues[currentLang].aboutUs.parap7}</p>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default AboutUs