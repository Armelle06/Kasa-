import React, { useState } from "react";
import arrowOpen from "../../assets/arrow-open.png";
import "./collapse.css";

export default function Collapse({ title, content, isList }) {
  const [isOpen, setIsOpen] = useState(false);
  const [iconRotation, setIconRotation] = useState("");

  // switchCollapse gere l'état du collapse et l'état de la fleche
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
            {/* display the list elements fetched from the API properties */}
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}{" "}
        {/* If content is not a list, display changes accordingly */}
      </div>
    </div>
  );
}
