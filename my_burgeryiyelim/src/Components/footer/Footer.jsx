import React, { useContext } from "react";
import "./footer.css";
import { LanguageContext } from "../../Contexts/LanguageContext.jsx";

const Footer = () => {
  const { dialogues, currentLang, spaceChar } = useContext(LanguageContext);

  return (
    <div id="footer">
      <div class="foot-info foot-element">
        <div id="rights" className="fo-sub-info" style={{ flex: 2 }}>
          <h3>Burger Yiyelim</h3>
          <p>{dialogues[currentLang].footer.rights}</p>
        </div>
        <div className="fo-sub-info">
          <h3>{dialogues[currentLang].footer.linksC}</h3>
          <a href="">{dialogues[currentLang].footer.aboutUs}</a>
          <a href=""></a>
          <a href="">{dialogues[currentLang].footer.contact}</a>
          <a href=""></a>
          <a href=""></a>
        </div>
        <div className="fo-sub-info">
          <h3>{dialogues[currentLang].footer.menuC}</h3>
        </div>
        <div className="fo-sub-info" style={{ flex: 1.5 }}>
          <h3>{dialogues[currentLang].footer.contactUsC}</h3>
        </div>
      </div>
      <div class="foot-keban foot-element">
        <div id="logos">
          <a href="https://www.kebanet.com/" className="fo-img">
            <img src="/images/footer-img/kebanet.png" alt="Keban Et" />
          </a>
          <a href="" className="fo-img">
            <img src="/images/footer-img/etyiyelim.png" alt="Et Yiyelim" />
          </a>
          <a href="" className="fo-img">
            <img
              src="/images/footer-img/kebankasap.png"
              alt="Keban Kasap"
              style={{ height: "4rem" }}
            />
          </a>
          <a href="" className="fo-img">
            <img src="/images/footer-img/etustasi.png" alt="Et Ustası" />
          </a>
          <a href="" className="fo-img">
            <img src="/images/footer-img/pideyiyelim.png" alt="Pide Yiyelim" />
          </a>
        </div>
        <p style={{ color: "white" }}>
          {dialogues[currentLang].footer.kebanet.beforeLink}
          {spaceChar}
          <a href="" style={{ color: "#f80808" }}>
            {dialogues[currentLang].footer.kebanet.link}
          </a>
          {spaceChar}
          {dialogues[currentLang].footer.kebanet.afterLink}
        </p>
        <a href="" class="etbis">
          <img src="/images/footer-img/etbis.jpeg" alt="" />
        </a>
      </div>
      <div class="foot-certif foot-element">
        <p>
          Powered by <a href="">RestApp</a>
        </p>
        <div id="local-certif">
          <img
            src="/images/footer-img/yerliuretim.png"
            alt=""
            className="local-img"
          />
          <img
            src="/images/footer-img/helalsertifika.png"
            alt=""
            className="local-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
