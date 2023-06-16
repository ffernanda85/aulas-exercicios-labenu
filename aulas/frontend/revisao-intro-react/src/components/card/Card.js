import { CardContainer } from "./stylesCard";

export function Card(props) {
  const { name, img, species } = props
  
  return (
    <CardContainer>
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>{species}</p>
    </CardContainer>
  );
}
