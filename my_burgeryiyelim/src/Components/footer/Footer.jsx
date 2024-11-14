import React, { useContext } from "react";
import "./footer.css";
import { LanguageContext } from "../../Contexts/LanguageContext.jsx";

const Footer = () => {
  const { dialogues, currentLang } = useContext(LanguageContext);

  return (
    <div id="footer">
      <div id="foot-info">
        <div id="rights">
          <h3>Burger Yiyelim</h3>
          <p>{dialogues[currentLang].rights}</p>
        </div>
        <div>
          <h3>{dialogues[currentLang].linksC}</h3>
        </div>
        <div>
          <h3>{dialogues[currentLang].menuC}</h3>
        </div>
        <div>
          <h3>{dialogues[currentLang].contactUsC}</h3>
        </div>
      </div>
      <div id="foot-keban">
        <div id="logos">
          <a href="https://www.kebanet.com/" className="fo-img">
            <img src="/images/footer-img/kebanet.png" alt="Keban Et" />
          </a>
          <a href="" className="fo-img">
            <img src="/images/footer-img/etyiyelim.png" alt="Et Yiyelim" />
          </a>
          <a href="" className="fo-img">
            <img src="/images/footer-img/kebankasap.png" alt="Keban Kasap" />
          </a>
          <a href="" className="fo-img">
            <img src="/images/footer-img/etustasi.png" alt="Et Ustası" />
          </a>
          <a href="" className="fo-img">
            <img src="/images/footer-img/pideyiyelim.png" alt="Pide Yiyelim" />
          </a>
        </div>
        <p>Burger Yiyelim bir Keban Et kuruluşudur.</p>
        <a href="" class="etbis">
          <img src="/images/footer-img/etbis.jpeg" alt="" />
        </a>
      </div>
      <div id="foot-certif">
        <p>
          Powered by <a href="">RestApp</a>
        </p>
        <div id="local-certif">
          <img src="/images/footer-img/yerliuretim.png" alt="" className="local-img" />
          <img src="/images/footer-img/helalsertifika.png" alt="" className="local-img" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
