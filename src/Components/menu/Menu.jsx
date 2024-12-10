import React from "react";
import "./menu.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import menuUrl from "/images/menu-box-img/menu.jpg";
import menuUrl2 from "/images/menu-box-img/menu2.jpg";
import menuUrl3 from "/images/menu-box-img/menu3.jpg";
import menuUrl4 from "/images/menu-box-img/menu4.jpg";
import menuUrl5 from "/images/menu-box-img/menu5.jpg";
import menuUrl6 from "/images/menu-box-img/menu6.jpg";
import menuUrl7 from "/images/menu-box-img/menu7.jpg";
import menuUrl8 from "/images/menu-box-img/menu8.jpg";
import menuUrl9 from "/images/menu-box-img/menu9.jpg";
import MenuBox from "./menu-box/MenuBox";

const Menu = () => {
  const imgList = [
    menuUrl,
    menuUrl2,
    menuUrl3,
    menuUrl4,
    menuUrl5,
    menuUrl6,
    menuUrl7,
    menuUrl8,
    menuUrl9,
  ];

  const menuList = [
    { id: 0, title: "Süper Avantajlı Menüler"},
    { id: 1, title: "Avantajlı paket"},
    { id: 2, title: "Kutu Kova Tavuk Menüleri"},
    { id: 3, title: "Kemikli Kemiksiz Tavuk Menüleri"},
    { id: 4, title: "Burgerler"},
    { id: 5, title: "Bomba Lezzetler"},
    { id: 6, title: "Atıştırmalıklar"},
    { id: 7, title: "Tatlılar"},
    { id: 8, title: "İçecekler"},
  ];

  return (
    <>
      <Navbar />
      <main id="menus" className="background">
        <div id="menu-list-box">
          {menuList.map((menuItem) => (
            <MenuBox
              key={menuItem.id}
              imageSrc={imgList[menuItem.id]}
              title={menuItem.title}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Menu;
