import React from 'react'
import { Card, PokemonName, PokemonType, EvolveButton } from './styles'

const PokemonCard = ({ pokemon, setPokemon }) => {
  
  const { name, type, image, weight, color } = pokemon

  const evolution = {
    ...pokemon,
    name: "Picachu",
    evolved: true,
    weight: 30,
    image: `https://www.pngfind.com/pngs/m/495-4950739_pokemon-cartoon-png-pokemon-pikachu-png-transparent-png.png`,
    id: 1
  }

  const evolution2 = {
    ...pokemon,
    name: "Characters",
    evolved: true,
    weight: 80,
    image: `https://www.pngfind.com/pngs/m/53-533939_pokemon-go-characters-png-make-your-own-pokemon.png`,
    id: 1
  }

  const evoluirPokemon = () => {
    if (name === 'Pichu') {
      setPokemon(evolution)
    }
    if (name === 'Squirtle') {
      setPokemon(evolution2)
    }
  }

  return (
    <Card color={color}>
      <img src={image} alt={`Pokemon`} />
      <PokemonName>{name}</PokemonName>
      <PokemonType>{type}</PokemonType>
      <p>{weight}kg</p>

      <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard