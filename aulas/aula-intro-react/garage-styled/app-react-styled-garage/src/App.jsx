import Garagem from "./components/garage/Garage";
import "./App.css";
import { GlobalStyle } from "./GlobalStyled";
import { Header } from "./components/header/Header";
import { Container } from "./components/container/styledContainer";
import { Footer } from "./components/footer/Footer";
import { car, Moto } from "./components/dados/Date";

export default function App() {
  const nome = "Flávia e Izabela";

  function apresentaGaragem(nameGarage) {
    swal({
      title: "Boas Vindas!",
      text: `Você está na garagem de ${nameGarage}!`,
      icon: "success",
    });
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Container>
          <Garagem
              car={car}
              mensagem={apresentaGaragem}            
              alert={nome}
            />
          <Garagem
              car={Moto}
              mensagem={apresentaGaragem}            
              alert={nome}
            />
      </Container>
      <Footer/>
    </div>
  );
}
