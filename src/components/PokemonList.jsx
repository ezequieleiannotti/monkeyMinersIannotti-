import React from "react";
import Pokemon from "./Pokemon";

function PokemonList({ lista1, i }) {
  return (
    <div className="card">
      {lista1.map((pokemon, i) => (
        <Pokemon key={i} name={pokemon.name} />
      ))}
    </div>
  );
}

export default PokemonList;
