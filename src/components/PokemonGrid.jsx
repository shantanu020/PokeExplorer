import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonGrid = ({ pokemonList }) => (
  <div className="grid">
    {pokemonList.map((pokemon) => (
      <PokemonCard key={pokemon.id} pokemon={pokemon} />
    ))}
  </div>
);

export default PokemonGrid;