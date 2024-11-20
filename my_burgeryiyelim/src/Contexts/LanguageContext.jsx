import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const adress = `Yenibosna Merkez Mahallesi Ladin Sokak No:36 Town Ofis Kat:9
                  Bahçelievler / İstanbul`;
  const byEmail = `destek@kebanet.com`;
  const spaceChar = " ";

  const [currentLang, setCurrentLang] = useState("tr");

  const changeLang = (event) => {
    setCurrentLang(event.target.value);
  };

  const [dialogues, setDialogues] = useState({
    tr: {
      symbol: "TR",
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
        clarification: "Aydınlatma Metni",
        franchiseApp: "Bayilik Başvurusu",
        hr: "İnsan Kaynakları",
        mLove: "Et Aşkı",
      },
    },
    eng: {
      symbol: "ENG",
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
        clarification: "Clarification Text",
        franchiseApp: "Franchise Application",
        hr: "Human Resources",
        mLove: "Meat Love",
      },
    },
  });

  return (
    <div>
      <LanguageContext.Provider
        value={{
          dialogues,
          currentLang,
          spaceChar,
          adress,
          byEmail,
          changeLang,
        }}
      >
        {children}
      </LanguageContext.Provider>
    </div>
  );
};

export default LanguageProvider;
