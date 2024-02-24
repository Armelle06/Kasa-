import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "../../assets/kasa-header.png";

const Header = () => {
  return (
    <header className="menu">
      <NavLink className="logo" to="/">
        <img src={logo} alt="logo kasa" />
      </NavLink>
      <nav className="nav-ul">
        <NavLink to="/" exact>
          Accueil
        </NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </nav>
    </header>
  );
};

export default Header;
