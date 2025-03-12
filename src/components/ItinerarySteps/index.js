// src/components/ItinerarySteps/index.js
import React, { useState } from "react";
import "./index.css";

const ItinerarySteps = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  return (
    <div className="itinerary-steps">
      {step === 1 && (
        <div>
          <h2>Step 1: Select Number of Days</h2>
          <input type="number" placeholder="Number of Days" />
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Step 2: Who is Traveling?</h2>
          <select>
            <option value="solo">Solo</option>
            <option value="couple">Couple</option>
            <option value="family">Family</option>
          </select>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Step 3: Configure Room Options</h2>
          <input type="text" placeholder="Room Preferences" />
        </div>
      )}
      {step === 4 && (
        <div>
          <h2>Congratulations! Your trip is customized.</h2>
        </div>
      )}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default ItinerarySteps;