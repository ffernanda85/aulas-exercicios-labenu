import { useState } from "react";
import { Carro } from "../Carro";
import { Botao, Estacionamento, GaragemContainer } from "./styles";

export function Garagem({ nome, setNome }) {

  const [automovel, setAutomovel] = useState({
    cor: "preto",
    ano: 2023,
    flex: true,
    adicionadoPor: 'Ozemela',
    modelo: 'Toro'
  })

  const carro1 = {
    cor: "azul",
    ano: 2022,
    flex: false,
    adicionadoPor: 'carla',
    modelo: 'Strada'
  }

  const carro2 = {
    cor: "azul",
    ano: 2022,
    flex: true,
    adicionadoPor: 'carla',
    modelo: 'Onix'
  }

  const carro3 = {
    cor: "vermelho",
    ano: 2021,
    flex: false,
    adicionadoPor: 'laura',
    modelo: 'fiat uno'
  }

  function mudarCarro() {
    const newCar = prompt('Insira \n1- carro 1 \n2- Carro 2 \n3- Carro 3')
    
    switch (newCar) {
      case '1':
        setAutomovel(carro1);
        break;

      case '2':
        setAutomovel(carro2);
        break;

      case '3':
        setAutomovel(carro3);
        break;

      default:
        alert('insira um valor válido!')
    }
  }
  
  function mudarNomegaragem() {
    const newName = prompt('Qual nome da garagem?')
    setNome(newName)
  }

  return (
    <GaragemContainer>
      <h1>Garagem {nome}</h1>
      <Botao onClick={mudarNomegaragem} >Muda nome</Botao>
      <Botao onClick={mudarCarro} >Muda Carro</Botao>

      <Estacionamento>
        <Carro
          modelo={automovel.modelo}
          cor={automovel.cor}
          ano={automovel.ano}
          adicionadoPor={automovel.adicionadoPor}
          flex={automovel.flex}
        />
      </Estacionamento>
    </GaragemContainer>
  );
}
