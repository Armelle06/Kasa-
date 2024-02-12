import React from "react";
import { NavLink } from "react-router-dom";
import "./error404.css";
import image404 from "../../assets/404.png";

export default function Error404() {
  return (
    <div className="error404">
      <img src={image404} alt=" image 404 " />
      <p className="error-p"> Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/" className="error_link">
        <p> sur la page d’accueil </p>
      </NavLink>
    </div>
  );
}
