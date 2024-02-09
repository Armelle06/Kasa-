import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "../../assets/kasa-header.png";

const Header = () => {
  return (
    <header className="menu">
      <NavLink className="logo" to="/" /*activeClassName="active"*/>
        <img src={logo} alt="logo kasa" />
      </NavLink>
      <nav className="nav-ul">
        <NavLink to="/" /*activeClassName="active" */ exact>
          Accueil
        </NavLink>
        <NavLink to="/about" /*activeClassName="active"*/>À Propos</NavLink>
      </nav>
    </header>
  );
};

export default Header;
