// src/components/TripCard/index.js
import React from "react";
import "./index.css";

const TripCard = ({ trip }) => {
  return (
    <div className="trip-card">
      <h3>{trip["trip-name"]}</h3>
      <p>Price: ${trip.price}</p>
      <p>Duration: {trip.duration}</p>
      <p>Amenities: {trip.amenities.join(", ")}</p>
    </div>
  );
};

export default TripCard;