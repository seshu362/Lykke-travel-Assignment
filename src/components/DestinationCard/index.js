// src/components/DestinationCard/index.js
import React from "react";
import "./index.css";

const DestinationCard = ({ destination, onClick }) => {
  return (
    <div className="destination-card" onClick={onClick}>
      <img src={destination.img} alt={destination.title} />
      <h3>{destination.title}</h3>
      <button>Explore</button>
    </div>
  );
};

export default DestinationCard;