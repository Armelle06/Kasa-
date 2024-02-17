import React from "react";
import "./tags.css";

const Tags = ({ cardData }) => {
  return (
    <div className="tags-container">
      {cardData.map((tag, index) => (
        <button key={index} className="tag-button">
          {tag}
        </button>
      ))}
    </div>
  );
};

export default Tags;
