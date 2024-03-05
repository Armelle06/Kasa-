import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./cardGallery.css";

export default function CardGallery() {
  /*declaration du tableau galleryData et son 'setter' */
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/properties");
        const data = await response.json();
        /*mise à jour de l'état galleryData avec setGalleryData */
        setGalleryData(data);
      } catch (error) {
        console.error("Error fetching the gallery:", error);
      }
    };
    fetchGalleryData();
  }, []); // tableau de dépendances vide = appelé qu'1 seule fois lors du premier rendu

  return (
    <div className="gallery-container">
      {/*itère chaque element du tableau galleryData avec la methode map qui prend 1 parametre (item) */}
      {galleryData.map((item) => (
        <Link
          className="gallery-item"
          key={item.id}
          to={`./accommodation/${item.id}`}
        >
          <img src={item.cover} alt={item.title} />
          <p>{item.title}</p>
        </Link>
      ))}
    </div>
  );
}
