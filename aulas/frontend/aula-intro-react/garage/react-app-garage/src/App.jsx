import React from "react";
import Garagem from "./components/garage/Garagem";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { CarArray, MotoArray } from "./components/data/Data";
import { Main } from "./components/main/styledMain";

export default function App() {
  const proprietary = "Flávia e Izabela"
  const typeGarage1 = "Moto"
  const typeGarage2 = "Carro"

  const messageButton = (proprietary, typeGarage) => {
    swal({
      title: `Bem vindo!`,
      text: `Você está na garagem de ${typeGarage} de ${proprietary}`,
      icon: "success",
    });
  }

  return (
    <div>
      <Header />
      <Main>
        <Garagem
          Car={CarArray}
          proprietary={proprietary}
          typeGarage={typeGarage2}
          messageButton={messageButton}
        />
        <Garagem
          Car={MotoArray}
          proprietary={proprietary}
          typeGarage={typeGarage1}
          messageButton={messageButton}
        />
      </Main>
      <Footer />
    </div>
  );
}
