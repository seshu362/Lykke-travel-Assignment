// src/components/Home/index.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../Banner";
import DestinationCard from "../DestinationCard";
import "./index.css";

const Home = () => {
  const [banners, setBanners] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch banners
    fetch("https://json-data-1wm2.onrender.com/banners")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch banners");
        }
        return response.json();
      })
      .then((data) => {
        // Extract the nested "banners" array
        if (data.banners && Array.isArray(data.banners)) {
          setBanners(data.banners);
        } else {
          throw new Error("Banners data is not in the expected format");
        }
      })
      .catch((error) => {
        console.error("Error fetching banners:", error);
        setError(error.message);
      });

    // Fetch destinations
    fetch("https://json-data-1wm2.onrender.com/featured-destination")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch destinations");
        }
        return response.json();
      })
      .then((data) => {
        // Extract the nested "destination" array
        if (data.destination && Array.isArray(data.destination)) {
          setDestinations(data.destination);
        } else {
          throw new Error("Destinations data is not in the expected format");
        }
      })
      .catch((error) => {
        console.error("Error fetching destinations:", error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="home">
      <Banner banners={banners} />
      <div className="destination-list">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.handle} // Use handle as the unique key
            destination={destination}
            onClick={() => navigate(`/destination/${destination.handle}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;