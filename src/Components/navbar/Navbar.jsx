import React, { useContext } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../../Contexts/LanguageContext.jsx";

const Navbar = () => {
  const { dialogues, currentLang } = useContext(LanguageContext);

  return (
    <div id="main-navbar">
      <div className="navbar-content">
        <div className="logo-box">
          <NavLink to="/">
            <img
              src="/images/burgeryiyelim-logo.png"
              alt=""
              className="logo-amblem"
            />
          </NavLink>
        </div>
        <ul id="navbar-list">
          <li>
            <NavLink to="/branches">
              <i class="fa-solid fa-signs-post"></i>
              {dialogues[currentLang].navbar.locationsC}
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutUs">
              <i class="fa-solid fa-info" style={{ fontSize: "2rem" }}></i>
              {dialogues[currentLang].navbar.aboutUsC}
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <i class="fa-solid fa-utensils"></i>
              {dialogues[currentLang].navbar.productsC}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <i class="fa-solid fa-location-dot"></i>
              {dialogues[currentLang].navbar.contactC}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
