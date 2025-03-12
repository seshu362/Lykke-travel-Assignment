// src/components/Banner/index.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Banner = ({ banners }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through banners
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [banners.length]);

  // Handle next and previous buttons
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="banner">
      <div
        className="carousel"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div key={banner.alt} className="carousel-item">
            <img src={banner.img} alt={banner.alt} />
          </div>
        ))}
      </div>
      <button className="carousel-button prev" onClick={goToPrevious}>
        &lt;
      </button>
      <button className="carousel-button next" onClick={goToNext}>
        &gt;
      </button>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search your destination..."
          onClick={() => navigate("/customize")}
        />
      </div>
    </div>
  );
};

export default Banner;