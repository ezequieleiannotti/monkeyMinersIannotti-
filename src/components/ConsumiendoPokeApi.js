const APIURL = "https://pokeapi.co/api/v2/pokemon";
function getPokemonC(id) {
  fetch(`${APIURL}/${id}`)
    .then((resultado) => resultado.json())
    .then((pokemon) => {
      console.log(pokemon);
    });
}

getPokemonC(1);

export function getPokemons() {
  return fetch(`${APIURL}`);
}
