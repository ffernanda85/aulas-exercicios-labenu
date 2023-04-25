import React, { useState } from "react";
import styled from "styled-components";
import PokemonCard from "./Components/PokemonCard/PokemonCard";
//import { pokemon0 } from "./Components/PokemonCard/data/Data";

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function App() {
     
  const [pokemon, setPokemon] = useState({
        name: "Pichu",
        type: "Electric",
        evolved: false,
        weight: 2,
        color: "yellow",
        image:`https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png`,
        id: 0
  });

  const [pokemon2, setPokemon2] = useState({
    name: "Squirtle",
    type: "Água",
    evolved: false,
    weight: 5,
    color: "blue",
    image:`https://www.pngfind.com/pngs/m/679-6798265_pokemon-png-transparent-png.png`,
    id: 0
});

  // Para fazer seus próximos pokemons, crie novos estados!

  return (
    <>
      <FlexContainer>
        {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
        <PokemonCard
          pokemon={pokemon}
          setPokemon = {setPokemon}
        />
        <PokemonCard
          pokemon={pokemon2}
          setPokemon = {setPokemon2}
        />
        {/* Crie aqui seus próximos pokemons! */}
      </FlexContainer>
    </>
  );
}

export default App;       