import React, { useState } from "react";
import { getPokemons } from "../components/ConsumiendoPokeApi";
import PokemonList from "./PokemonList";

function PokemonContainer() {
  const [pokemons, setPokemons] = useState([]);

  const obtenerPokemons = () => {
    getPokemons()
      .then((resultado) => resultado.json())
      .then((pokemons) => {
        console.log(pokemons.result);
        setPokemons(pokemons.result);
      });
  };
  return (
    <div>
      <button onClick={obtenerPokemons}>Ver pokemons</button>
      <PokemonList lista1={pokemons} />
    </div>
  );
}

export default PokemonContainer;
