import React from "react";
import Pokemon from "./Pokemon";

function PokemonList({ pokemon }) {
  return (
    <div className="card">
      {pokemon.map((pokemon, i) => (
        <Pokemon key={i} name={pokemon.name} />
      ))}
    </div>
  );
}

export default PokemonList;
