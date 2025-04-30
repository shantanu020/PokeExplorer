import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TypeFilter from "./components/TypeFilter";
import PokemonGrid from "./components/PokemonGrid";
import "./App.css";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
        const data = await res.json();

        const details = await Promise.all(
          data.results.map(async (poke) => {
            const res = await fetch(poke.url);
            return res.json();
          })
        );

        setPokemonList(details);
        setFilteredList(details);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch Pokémon.");
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  const handleSearch = (query) => {
    const value = query.toLowerCase();
    const filtered = pokemonList.filter((p) =>
      p.name.toLowerCase().includes(value)
    );
    setFilteredList(filtered);
  };

  const handleTypeFilter = (type) => {
    if (type === "All") {
      setFilteredList(pokemonList);
    } else {
      const filtered = pokemonList.filter((p) =>
        p.types.some((t) => t.type.name === type)
      );
      setFilteredList(filtered);
    }
  };

  return (
    <div className="app">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <TypeFilter onFilter={handleTypeFilter} />
      {loading ? (
        <p className="info">Loading Pokémon...</p>
      ) : error ? (
        <p className="info error">{error}</p>
      ) : filteredList.length === 0 ? (
        <p className="info">No Pokémon found.</p>
      ) : (
        <PokemonGrid pokemonList={filteredList} />
      )}
    </div>
  );
};

export default App;