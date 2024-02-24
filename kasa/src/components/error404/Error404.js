import React from "react";
import { NavLink } from "react-router-dom";
import "./error404.css";
//import image404 from "../../assets/404.png";

export default function Error404() {
  return (
    <div className="error404">
      <h2>404</h2>
      <div className="flex-p">
        <p className="error-p"> Oups! La page que </p>
        <p className="error-p"> vous demandez n'existe pas.</p>
      </div>
      <NavLink to="/" className="error_link">
        <p> Retourner sur la page d’accueil </p>
      </NavLink>
    </div>
  );
}
