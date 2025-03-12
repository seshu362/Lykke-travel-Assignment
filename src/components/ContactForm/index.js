// src/components/ContactForm/index.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !contactNumber || !email || !budget) {
      alert("Please fill out all fields.");
      return;
    }

    // Log form data to the console (for testing)
    console.log("Form Data:", { name, contactNumber, email, budget });

    // Display success message
    setSubmitted(true);

    // Reset the form
    setName("");
    setContactNumber("");
    setEmail("");
    setBudget("");

    // Redirect to home page after 2 seconds
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Contact Number"
        value={contactNumber}
        onChange={(e) => setContactNumber(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <select value={budget} onChange={(e) => setBudget(e.target.value)}>
        <option value="">Select Budget</option>
        <option value="50,000 - 1 Lakh">50,000 - 1 Lakh</option>
        <option value="1 Lakh - 2 Lakhs">1 Lakh - 2 Lakhs</option>
        <option value="2 Lakhs - 3 Lakhs">2 Lakhs - 3 Lakhs</option>
        <option value="3 Lakhs+">3 Lakhs+</option>
      </select>
      <button type="submit">Submit</button>
      {submitted && <p>Thank you for contacting us! Redirecting to the home page...</p>}
    </form>
  );
};

export default ContactForm;