import React, { useContext } from "react";
import "./footer.css";
import { LanguageContext } from "../../Contexts/LanguageContext.jsx";
import {NavLink} from "react-router-dom"

const Footer = () => {
  const { dialogues, currentLang, spaceChar, adress, byEmail} = useContext(LanguageContext);

  return (
    <div id="footer">
      <div class="foot-info foot-element">
        <div id="rights" className="fo-sub-info" style={{ flex: 2 }}>
          <h3>Burger Yiyelim</h3>
          <p>{dialogues[currentLang].footer.rights}</p>
        </div>
        <div className="fo-sub-info fl-parent">
          <h3>{dialogues[currentLang].footer.linksC}</h3>
          <NavLink className="footer-links" to="/aboutUs">{dialogues[currentLang].footer.aboutUs}</NavLink>
          <NavLink className="footer-links" to="">{dialogues[currentLang].footer.clarification}</NavLink>
          <NavLink className="footer-links" to="">{dialogues[currentLang].footer.franchiseApp}</NavLink>
          <NavLink className="footer-links" to="">{dialogues[currentLang].footer.contact}</NavLink>
          <NavLink className="footer-links" to="">{dialogues[currentLang].footer.hr}</NavLink>
          <NavLink className="footer-links" to="">{dialogues[currentLang].footer.mLove}</NavLink>
        </div>
        <div className="fo-sub-info">
          <h3>{dialogues[currentLang].footer.menuC}</h3>
          <NavLink className="footer-links" to="/aboutUs">{dialogues[currentLang].footer.menu}</NavLink>
        </div>
        <div className="fo-sub-info" style={{ flex: 1.5 }}>
          <h3>{dialogues[currentLang].footer.contactUsC}</h3>
          <ul id="fo-sub-contact">
            <li id="adress">{adress}</li>
            <li id="support">{byEmail}</li>
          </ul>
        </div>
      </div>
      <div class="foot-keban foot-element">
        <div id="logos">
          <a href="https://www.kebanet.com/" className="fo-img" target="_blank">
            <img src="/images/footer-img/kebanet.png" alt="Keban Et" />
          </a>
          <a
            href="https://www.etyiyelim.com.tr/"
            className="fo-img"
            target="_blank"
          >
            <img src="/images/footer-img/etyiyelim.png" alt="Et Yiyelim" />
          </a>
          <a
            href="https://www.instagram.com/kebankasap1976/"
            className="fo-img"
            target="_blank"
          >
            <img
              src="/images/footer-img/kebankasap.png"
              alt="Keban Kasap"
              style={{ height: "4rem" }}
            />
          </a>
          <a
            href="https://www.etustasi.com/"
            className="fo-img"
            target="_blank"
          >
            <img src="/images/footer-img/etustasi.png" alt="Et Ustası" />
          </a>
          <a
            href="https://pideyiyelim.com.tr/"
            className="fo-img"
            target="_blank"
          >
            <img
              src="/images/footer-img/pideyiyelim.png"
              alt="Pide Yiyelim"
              style={{ height: "4rem" }}
            />
          </a>
        </div>
        <p style={{ color: "white" }}>
          {dialogues[currentLang].footer.kebanet.beforeLink}
          {spaceChar}
          <a
            href="https://www.kebanet.com/"
            style={{ color: "#f80808" }}
            target="_blank"
          >
            {dialogues[currentLang].footer.kebanet.link}
          </a>
          {spaceChar}
          {dialogues[currentLang].footer.kebanet.afterLink}
        </p>
        <a
          href="https://www.eticaret.gov.tr/siteprofil/7752482556714274/wwwburgeryiyelimcom"
          class="etbis"
          target="_blank"
        >
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
            style={{height: "3.5rem"}}
          />
          <img
            src="/images/footer-img/helalsertifika.png"
            alt=""
            className="local-img"
            style={{height:"4rem"}}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
