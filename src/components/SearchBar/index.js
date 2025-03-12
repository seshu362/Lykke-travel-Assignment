// src/components/SearchBar/index.js
import React from "react";
import "./index.css";

const SearchBar = ({ placeholder, onClick }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholder}
        onClick={onClick}
      />
    </div>
  );
};

export default SearchBar;