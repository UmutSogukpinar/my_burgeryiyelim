import React, { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../Contexts/LanguageContext.jsx";

const Navbar = () => {
  const { dialogues, currentLang} =
    useContext(LanguageContext);

  return (
    <div id="main-navbar">
      <div className="navbar-content">
        <div className="logo-box">
          <Link to="/">
            <img
              src="/images/burgeryiyelim-logo.png"
              alt=""
              className="logo-amblem"
            />
          </Link>
        </div>
        <ul id="navbar-list">
          <li><Link to="/branches">{dialogues[currentLang].navbar.locationsC}</Link></li>
          <li><Link to="/aboutUs">{dialogues[currentLang].navbar.aboutUsC}</Link></li>
          <li><Link to="/products">{dialogues[currentLang].navbar.productsC}</Link></li>
          <li><Link to="/contact">{dialogues[currentLang].navbar.contactC}</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
