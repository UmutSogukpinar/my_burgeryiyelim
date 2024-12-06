import React, { useContext } from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { LanguageContext } from "../../Contexts/LanguageContext.jsx";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const { dialogues, currentLang, spaceChar, adress, byEmail, changeLang } =
    useContext(LanguageContext);

  return (
    <div id="footer">
      <div class="foot-info foot-element">
        <div className="fo-sub-info"  id="rights">
          <h3>Burger Yiyelim</h3>
          <p>{dialogues[currentLang].footer.rights}</p>
          <div id="lang-select">
            <div id="lang-box">
              {dialogues[currentLang].symbol}
            </div>
            <select value={currentLang} onChange={changeLang}>
              <option value="tr">Türkçe</option>
              <option value="eng">English</option>
            </select>
          </div>
        </div>
        <div className="fo-sub-info fl-parent">
          <h3>{dialogues[currentLang].footer.linksC}</h3>
          <NavLink className="footer-links" to="/aboutUs">
            {dialogues[currentLang].footer.aboutUs}
          </NavLink>
          <NavLink className="footer-links" to="">
            {dialogues[currentLang].footer.clarification}
          </NavLink>
          <NavLink className="footer-links" to="">
            {dialogues[currentLang].footer.franchiseApp}
          </NavLink>
          <NavLink className="footer-links" to="">
            {dialogues[currentLang].footer.contact}
          </NavLink>
          <NavLink className="footer-links" to="">
            {dialogues[currentLang].footer.hr}
          </NavLink>
          <NavLink className="footer-links" to="">
            {dialogues[currentLang].footer.mLove}
          </NavLink>
        </div>
        <div className="fo-sub-info">
          <h3>{dialogues[currentLang].footer.menuC}</h3>
          <NavLink className="footer-links" to="/menu">
            {dialogues[currentLang].footer.menu}
          </NavLink>
        </div>
        <div className="fo-sub-info">
          <h3>{dialogues[currentLang].footer.contactUsC}</h3>
          <ul id="fo-sub-contact" style={{ padding: "0 0 1rem 0" }}>
            <li id="adress">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="sub-contact-icon"
              />
              {adress}
            </li>
            <li id="support">
              <FontAwesomeIcon icon={faEnvelope} className="sub-contact-icon" />
              {byEmail}
            </li>
          </ul>
          <ul id="fo-sub-social">
            <li>
              <a href="https://www.facebook.com/burgeryiyelim" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/burgeryiyelimm/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@burgeryiyelim/" target="_blank">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
            </li>
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
            style={{ height: "3.5rem" }}
          />
          <img
            src="/images/footer-img/helalsertifika.png"
            alt=""
            className="local-img"
            style={{ height: "4rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
