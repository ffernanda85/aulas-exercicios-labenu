import { useState } from "react";
import { Card } from "../../components/card/Card";
import { Header } from "../../components/header/Header";
import { HomePageContainer } from "./stylesHomePage";

export function HomePage(props) {
  const { characters } = props;
  const { image, name, specie } = props.states
  const {handleName, handleImage, handleSpecie} = props.handlers
  

  const renderCard = characters.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.image}
        name={item.name}
        species={item.species}
      />
    );
  });

  

  return (
    <HomePageContainer>
      <Header />
      <form>
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={handleImage}
        />

        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleName}
        />

        <label htmlFor="species">Espécie:</label>
        <input
          type="text"
          id="species"
          value={specie}
          onChange={handleSpecie}
        />
        
        <button>Criar</button>

      </form>

      <main>{renderCard}</main>
    </HomePageContainer>
  );
}
