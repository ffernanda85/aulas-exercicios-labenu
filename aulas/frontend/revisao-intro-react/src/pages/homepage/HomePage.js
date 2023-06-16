import { Card } from "../../components/card/Card";
import { Header } from "../../components/header/Header";
import { HomePageContainer } from "./stylesHomePage";

export function HomePage(props) {
  const { characters } = props;

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
      <main>{renderCard}</main>
    </HomePageContainer>
  );
}
