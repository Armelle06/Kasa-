import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SlideShow from "../Slideshow/Slideshow";
import Tags from "../Tags/Tags";
import Host from "../Host/Host";
import Rating from "../Rating/Rating";
import Collapse from "../Collapse/Collapse";
import "./accommodation_content_builder.css";

export default function AccomodationContentBuilder() {
  const [cardData, setCardData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(cardData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data...");
        const response = await fetch(
          `http://localhost:8080/api/properties/${id}`
        );
        console.log("Response status:", response.status);

        if (response.status === 404) {
          console.log("Page not found. Redirecting to Page404");
          navigate("../../pages/Page404");
        } else {
          const data = await response.json();
          setCardData(data);
          console.log(setCardData);
        }
      } catch (error) {
        console.error("Error fetching card data:", error);
        navigate("../../pages/Page404");
      }
    };
    fetchData();
  }, [id, navigate]);
  if (cardData === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="content">
      <div className="Slideshow">
        <SlideShow images={cardData.pictures} />
      </div>
      <div className="detail-location">
        <div className="div_flex">
          <div className="div_column">
            <h2>{cardData.title}</h2>
            <p>{cardData.location}</p>
            <Tags cardData={cardData.tags} />
          </div>
          <div className="host_rating">
            <Host hostData={cardData.host} />
            <Rating ratingData={cardData.rating} />
          </div>
        </div>
        <div className="collapse_flex">
          <Collapse title="Descrition" content={cardData.description} />
          <Collapse
            title="Equipements"
            content={cardData.equipments}
            isList={true}
          />
        </div>
      </div>
    </div>
  );
}
