import React, { useContext } from "react";
import "./footer.css"
import {LanguageContext} from "../../Contexts/LanguageContext.jsx"


const Footer = () => {
  const {dialogues, currentLang} = useContext(LanguageContext);

  return (
    <div id="footer">
      <div id="foot-info">
        <div id="rights">
          <h3>Burger Yiyelim</h3>
          <p>
            Burger Yiyelim markasının tek hak sahibi Keban Et’tir. Web sitemizde
            bulunan fiyatlar şubelere, paket servis ve gel-al servise göre
            farklılık gösterebilmektedir. Burger Yiyelim tüm promosyonlar ve
            kampanyaları değiştirme ve sonlandırma hakkını saklı tutar.
          </p>
        </div>
        <div>
          <h3>{dialogues[currentLang].linksC}</h3>
        </div>
        <div>
          <h3>{dialogues[currentLang].menu}</h3>
        </div>
        <div>{dialogues[currentLang].contactUsC}</div>
      </div>
      <div id="foot-logos">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div id="foot-certif">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
