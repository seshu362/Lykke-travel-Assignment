// src/components/Customize/index.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Customize = () => {
  const [step, setStep] = useState(1);
  const [days, setDays] = useState("");
  const [travelers, setTravelers] = useState("");
  const [roomOptions, setRoomOptions] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    alert("Trip customized successfully!");
    // Reset the form
    setStep(1);
    setDays("");
    setTravelers("");
    setRoomOptions("");
    // Redirect to the home page
    navigate("/");
  };

  return (
    <div className="customize">
      <h1>Customize Your Trip</h1>
      <div className="itinerary-steps">
        {step === 1 && (
          <div>
            <h2>Step 1: Select Number of Days</h2>
            <input
              type="number"
              placeholder="Number of Days"
              value={days}
              onChange={(e) => setDays(e.target.value)}
            />
          </div>
        )}
        {step === 2 && (
          <div>
            <h2>Step 2: Who is Traveling?</h2>
            <select value={travelers} onChange={(e) => setTravelers(e.target.value)}>
              <option value="">Select</option>
              <option value="solo">Solo</option>
              <option value="couple">Couple</option>
              <option value="family">Family</option>
            </select>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2>Step 3: Configure Room Options</h2>
            <select value={roomOptions} onChange={(e) => setRoomOptions(e.target.value)}>
              <option value="">Select</option>
              <option value="single">Single Room</option>
              <option value="double">Double Room</option>
              <option value="suite">Suite</option>
            </select>
          </div>
        )}
        {step === 4 && (
          <div>
            <h2>Step 4: Confirmation</h2>
            <p>Number of Days: {days}</p>
            <p>Travelers: {travelers}</p>
            <p>Room Options: {roomOptions}</p>
            <p>Congratulations! Your trip is customized.</p>
          </div>
        )}
        <div className="navigation-buttons">
          {step > 1 && (
            <button onClick={handlePrevious}>Previous</button>
          )}
          {step < 4 ? (
            <button onClick={handleNext}>Next</button>
          ) : (
            <button onClick={handleSubmit}>Submit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Customize;