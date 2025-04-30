// components/TypeFilter.jsx
import React from "react";

const types = [
  "All", "normal", "fire", "water", "grass", "electric",
  "ice", "fighting", "poison", "ground", "flying",
  "psychic", "bug", "rock", "ghost", "dragon",
  "dark", "steel", "fairy"
];

const TypeFilter = ({ onFilter }) => (
  <div className="filter">
    <select onChange={(e) => onFilter(e.target.value)}>
      {types.map((type) => (
        <option key={type} value={type}>{type.toUpperCase()}</option>
      ))}
    </select>
  </div>
);

export default TypeFilter;
