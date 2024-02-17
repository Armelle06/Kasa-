//import React from "react";
import "./rating.css";

// Fonction pour générer les étoiles
export default function Rating({ ratingData }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= ratingData) {
      stars.push(<i key={`star-${i}`} className="fas fa-star filled-star"></i>);
    } else {
      stars.push(<i key={`star-${i}`} className="far fa-star empty-star"></i>);
    }
  }

  return <div className="rating">{stars}</div>;
}
