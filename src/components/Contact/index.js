// src/components/Contact/index.js
import React from "react";
import ContactForm from "../ContactForm";
import "./index.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Get in Touch</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;