import React, { useContext } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import "./contact.css"
import { LanguageContext } from '../../Contexts/LanguageContext'

const Contact = () => {

    const { brandName, currentLang, dialogues } = useContext(LanguageContext);

    return (
        <>
            <Navbar />
            <div id='contact'>
                <div id="contact-form-box">
                    <h2>{brandName}</h2>
                    <div id="contact-form">
                        <h2>{dialogues[currentLang].contact.writeUs}</h2>
                        <div className="forms">
                            <form action="" id='forms-label'>
                                <div className="each_input">
                                    <label htmlFor="name">{dialogues[currentLang].contact.name_surname_header}</label>
                                    <input type="text" name='name' />
                                </div>
                                <div className="each_input">
                                    <div className="each_input_child">
                                        <label htmlFor="name">{dialogues[currentLang].contact.email_header}</label>
                                        <input type="text" name='name' />
                                    </div>
                                    <div className="each_input_child each_input_child_phone">
                                        <label htmlFor="name">{dialogues[currentLang].contact.phone_header}</label>
                                        <input type="text" name='name' />
                                    </div>
                                </div>
                                <div className="each_input">
                                    <label htmlFor="name">{dialogues[currentLang].contact.subject_header}</label>
                                    <input type="text" name='name' />
                                </div>
                                <div className="each_input">
                                    <label htmlFor="name">{dialogues[currentLang].contact.message_header}</label>
                                    <input type="text" name='name' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Contact
