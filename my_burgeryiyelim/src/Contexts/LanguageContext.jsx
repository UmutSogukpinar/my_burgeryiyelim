import React, { createContext, useState } from "react";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState("tr");

  const [dialogues, setDialogues] = useState({
    tr: {
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
    },
    eng: {
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
    },
  });

  return (
    <div>
      <LanguageContext.Provider value={{ dialogues, currentLang }}>
        {children}
      </LanguageContext.Provider>
    </div>
  );
};

export default {LanguageProvider};
