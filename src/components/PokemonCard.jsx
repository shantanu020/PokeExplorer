import React from "react";

const PokemonCard = ({ pokemon }) => (
  <div className="card">
    <img
      src={pokemon.sprites.front_default}
      alt={pokemon.name}
    />
    <h3>#{pokemon.id} {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
    <div className="types">
      {pokemon.types.map((t) => (
        <span key={t.type.name} className={`type ${t.type.name}`}>
          {t.type.name.toUpperCase()}
        </span>
      ))}
    </div>
  </div>
);

export default PokemonCard;