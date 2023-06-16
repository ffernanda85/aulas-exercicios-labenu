import { Card } from "../../components/card/Card";
import { Header } from "../../components/header/Header";
import { HomePageContainer } from "./stylesHomePage";

export function HomePage() {
  return (
    <HomePageContainer>
      <Header />
      <main>
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </HomePageContainer>
  );
}
