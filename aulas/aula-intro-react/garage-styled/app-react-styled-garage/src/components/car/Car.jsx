import { Vacancy, Features } from "./styledCar";

function Carro(props) {

  return (
    <Vacancy>
      <h2>{props.brand}</h2>
      {console.log(props)}
      <img src={props.image} />
      <Features>
        <section>
          <p>Cor: {props.cor}</p>
          <p>Ano: {props.ano}</p>
        </section>
        <section>
          <p>Flex: {props.flex}</p>
          <p>adicionadoPor: {props.adicionadoPor}</p>
        </section>
      </Features>
    </Vacancy>
  );
}

export default Carro;
