import Card from "../../components/Card/Card";
import { Container } from "./HomePage.styled";
import Header from "../../components/Header/Header";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

function HomePage() {
  const context = useContext(GlobalContext)
  const { pokelist, addToPokedex, pokedex } = context;

  // não mostrar pokemons que estão na pokedex
  const filteredPokelist = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );

  return (
    <Container>
      <Header />
      <section>
        {filteredPokelist().map((pokemon) => (
          <Card
            key={pokemon.url}
            pokemonUrl={pokemon.url}
            addToPokedex={addToPokedex}
          />
        ))}
      </section>
    </Container>
  );
}

export default HomePage;
