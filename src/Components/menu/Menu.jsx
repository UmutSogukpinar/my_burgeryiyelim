import React from "react";
import "./menu.css"
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import menuUrl from "/images/menu-box-img/menu.jpg"
import MenuBox from "./menu-box/MenuBox";

const Menu = () => {

  const menuList = [
    {id: 0, title: "süper avantajlı paket", url: menuUrl},
    {id: 1, title: "süper avantajlı paket", url: menuUrl},
    {id: 2, title: "süper avantajlı paket", url: menuUrl},
    {id: 3, title: "süper avantajlı paket", url: menuUrl},
    {id: 4, title: "süper avantajlı paket", url: menuUrl},
    {id: 5, title: "süper avantajlı paket", url: menuUrl},
    {id: 6, title: "süper avantajlı paket", url: menuUrl},
    {id: 7, title: "süper avantajlı paket", url: menuUrl},
  ]
  
  return (
    <>
      <Navbar />
      <main id="menus" className="background">
        <div id="menu-list-box">
          {menuList.map((menuList) => (
            <MenuBox key={menuList.id} imageSrc={menuList.url} title={menuList.title}/>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Menu;
