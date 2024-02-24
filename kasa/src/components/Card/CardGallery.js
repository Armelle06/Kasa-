import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./cardGallery.css";

export default function CardGallery() {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/properties");
        const data = await response.json();
        setGalleryData(data);
      } catch (error) {
        console.error("Error fetching the gallery:", error);
      }
    };

    fetchGalleryData();
  }, []); // tableau depences vide = appelé qu'1 seule fois lors du premier rendu

  return (
    <div className="gallery-container">
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
