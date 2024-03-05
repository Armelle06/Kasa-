import React, { useState } from "react";
import arrowOpen from "../../assets/arrow-open.png";
import "./collapse.css";

export default function Collapse({ title, content, isList }) {
  const [isOpen, setIsOpen] = useState(false);
  const [iconRotation, setIconRotation] = useState("");

  // switchCollapse est appelé onClick = gere l'état du collapse et l'état de la fleche
  const switchCollapse = () => {
    setIsOpen(!isOpen);
    setIconRotation(isOpen ? "reverse" : "rotate");
  };

  const collapseContentClass = `collapse_content ${
    isList ? "facilities" : ""
  } ${isOpen ? "open" : "close"}`;
  return (
    <div className="collapse">
      <div className="collapse_title">
        <h2>{title}</h2>
        <button
          className={`collapse_icon ${iconRotation}`}
          onClick={switchCollapse}
        >
          <img src={arrowOpen} alt="Icône flèche dans collapse" />
        </button>
      </div>
      <div className={collapseContentClass}>
        {/* class differente pour un effet de list */}
        {isList ? (
          <ul>
            {/* Afficher les éléments de la liste récupérés à partir des propriétés de l'API*/}
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}{" "}
        {/* "Si le contenu n'est pas une liste, les changements d'affichage sont effectués en conséquence*/}
      </div>
    </div>
  );
}
