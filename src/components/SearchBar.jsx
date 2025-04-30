import React from "react";

const SearchBar = ({ onSearch }) => (
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search by name..."
      onChange={(e) => onSearch(e.target.value)}
    />
  </div>
);
export default SearchBar