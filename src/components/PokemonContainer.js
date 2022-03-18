import React, { useState, useEffect } from "react";
import { getPokemons } from "../components/ConsumiendoPokeApi";
import PokemonList from "./PokemonList";

function PokemonContainer() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons()
      .then((resultado) => resultado.json())
      .then((pokemons) => {
        console.log(pokemons.results);
        setPokemons(pokemons.results);
      });
  }, []);

  return (
    <div>
      <PokemonList pokemon={pokemons} />
    </div>
  );
}

export default PokemonContainer;
