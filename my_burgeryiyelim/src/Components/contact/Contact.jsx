import React, { useContext } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import "./contact.css"
import { LanguageContext } from '../../Contexts/LanguageContext'

const Contact = () => {
    
    const {brandName, currentLang, dialogues} = useContext(LanguageContext);

    return (
        <>
            <Navbar/>
            <div id='contact'>
                <div id="form-box">
                    <h2>{brandName}</h2>
                    <div id="contact-form">
                        <h2>{dialogues[currentLang].contact.writeUs}</h2>
                    </div>
                </div>
            </div>
            <Footer/>
        </>

    )
}

export default Contact