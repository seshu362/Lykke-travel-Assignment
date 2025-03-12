import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Customize from "./components/Customize";
import Destination from "./components/Destination";
import Contact from "./components/Contact";
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/customize" element={<Customize />} />
        <Route path="/destination/:handle" element={<Destination />} />
        <Route path="/get-in-touch" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
