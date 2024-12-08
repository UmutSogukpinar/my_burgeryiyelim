import React, { useContext } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./contact.css";
import { LanguageContext } from "../../Contexts/LanguageContext";
import { FormContext } from "../../Contexts/FormContext";

const Contact = () => {
  const { brandName, currentLang, dialogues } = useContext(LanguageContext);
  const { handleChange, submitForm } = useContext(FormContext);

  return (
    <>
      <Navbar />
      <div id="contact" className="background">
        <div id="contact-form-box">
          <h2>{brandName}</h2>
          <div id="contact-form">
            <h2>{dialogues[currentLang].contact.writeUs}</h2>
            <div className="forms">
              <form action="" id="forms-label" onSubmit={submitForm}>
                <div className="each_input">
                  <label htmlFor="userName">
                    {dialogues[currentLang].contact.name_surname_header}
                  </label>
                  <input
                    type="text"
                    name="userName"
                    placeholder={dialogues[currentLang].contact.name_surname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="each_input">
                  <div className="each_input_child">
                    <label htmlFor="email">
                      {dialogues[currentLang].contact.email_header}
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder={dialogues[currentLang].contact.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="each_input_child each_input_child_phone">
                    <label htmlFor="tel">
                      {dialogues[currentLang].contact.phone_header}
                    </label>
                    <input
                      type="tel"
                      name="tel"
                      placeholder={dialogues[currentLang].contact.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="each_input">
                  <label htmlFor="subject">
                    {dialogues[currentLang].contact.subject_header}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder={dialogues[currentLang].contact.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="each_input">
                  <label htmlFor="message">
                    {dialogues[currentLang].contact.message_header}
                  </label>
                  <textarea
                    type="text"
                    name="message"
                    placeholder={dialogues[currentLang].contact.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact-button">
                  <button>{dialogues[currentLang].contact.submit}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
