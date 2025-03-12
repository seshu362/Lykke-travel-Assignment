// src/components/Destination/index.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TripCard from "../TripCard";
import "./index.css";

const Destination = () => {
  const { handle } = useParams();
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://json-data-1wm2.onrender.com/destination/${handle}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch trips");
        }
        return response.json();
      })
      .then((data) => {
        // Extract the nested "trips" array
        if (data.trips && Array.isArray(data.trips)) {
          setTrips(data.trips);
        } else {
          throw new Error("Trips data is not in the expected format");
        }
      })
      .catch((error) => {
        console.error("Error fetching trips:", error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [handle]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="destination">
      <h1>Trips in {handle}</h1>
      <div className="trip-list">
        {trips.map((trip, index) => (
          <TripCard key={index} trip={trip} />
        ))}
      </div>
      <button className="expert-button" onClick={() => navigate("/get-in-touch")}>
        Talk to an Expert
      </button>
    </div>
  );
};

export default Destination;