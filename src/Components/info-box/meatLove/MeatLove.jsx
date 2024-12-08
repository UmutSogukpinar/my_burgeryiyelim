import React from "react";
import "../info-box.css";

const MeatLove = ({ currentLang, dialogues }) => {
  const { brandName } = useContext(LanguageContext);
  return (
    <>
      <Navbar />
      <main id="meat-love-bg" className="background sub-info-box">
        <div className="paraph-box">
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
      <Footer />
    </>
  );
};

export default MeatLove;
