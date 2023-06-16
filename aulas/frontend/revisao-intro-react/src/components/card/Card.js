import { CardContainer } from "./stylesCard";

export function Card() {
  return (
    <CardContainer>
      <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="" />
      <h2>Nome</h2>
      <p>Descrição</p>
    </CardContainer>
  );
}
