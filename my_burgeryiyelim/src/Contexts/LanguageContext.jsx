import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [spaceChar, setSpaceChar] = useState(" ");
  const [currentLang, setCurrentLang] = useState("tr");

  const [dialogues, setDialogues] = useState({
    tr: {
      footer: {
        aboutUsC: "HAKKIMIZDA",
        aboutUs: "Hakkımızda",
        contactC: "İLETİŞİM",
        contact: "İletişim",
        contactUsC: "İLETİŞİM",
        menuC: "ÜRÜNLER",
        menu: "Ürünler",
        orderC: "ONLINE SİPARİŞ",
        linksC: "KURUMSAL",
        locationsC: "ŞUBELERİMİZ",
        rights: `Burger Yiyelim markasının tek hak sahibi Keban Et’tir. Web sitemizde
            bulunan fiyatlar şubelere, paket servis ve gel-al servise göre
            farklılık gösterebilmektedir. Burger Yiyelim tüm promosyonlar ve
            kampanyaları değiştirme ve sonlandırma hakkını saklı tutar.`,
        kebanet: {
          beforeLink: `Burger Yiyelim bir`,
          link: "Keban Et",
          afterLink: "kuruluşudur.",
        },
      },
    },
    eng: {
      footer: {
        aboutUsC: "ABOUT US",
        aboutUs: "About us",
        contactC: "CONTACT",
        contact: "Contact",
        contactUsC: "CONTACT US",
        menuC: "MENU",
        menu: "Menu",
        orderC: "ORDER NOW",
        linksC: "LINKS",
        locationsC: "LOCATION",
        rights: `The sole proprietor of the Burger Yiyelim brand is Keban Et. 
                The prices available on our website may vary depending on the branch, delivery service, and take-out options. 
                Burger Yiyelim reserves the right to modify or terminate all promotions and campaigns at any time.`,
        kebanet: {
          beforeLink: `Burger Yiyelim is a subsidiary of`,
          link: "Keban Et",
          afterLink: ".",
        },
      },
    },
  });
  // Burger Yiyelim bir Keban Et kuruluşudur
  // Burger Yiyelim is a subsidiary of Keban Et.
  return (
    <div>
      <LanguageContext.Provider value={{ dialogues, currentLang, spaceChar}}>
        {children}
      </LanguageContext.Provider>
    </div>
  );
};

export default LanguageProvider;
