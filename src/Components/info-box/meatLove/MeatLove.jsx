import React from "react";
import "../info-box.css";
import "./meat-love.css"
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

const MeatLove = ({ currentLang, dialogues }) => {
  return (
    <>
      <Navbar />
      <main id="meat-love-bg" className="background sub-info-box">
        <div className="paraph-box">
          <img src="/images/info-box-img/meat-love-top.jpg" alt="" />
          <h1>{dialogues[currentLang].meatLove.meatLove}</h1>
          <p>{dialogues[currentLang].meatLove.parap1}</p>
          <p>{dialogues[currentLang].meatLove.parap2}</p>
          <h3>{dialogues[currentLang].meatLove.title1}</h3>
          <p>{dialogues[currentLang].meatLove.parap3}</p>
          <h3>{dialogues[currentLang].meatLove.title2}</h3>
          <p>{dialogues[currentLang].meatLove.parap4}</p>
          <img src="/images/info-box-img/meat-love-bottom.jpg" alt="" id="meat-love-bottom-img"/>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MeatLove;
