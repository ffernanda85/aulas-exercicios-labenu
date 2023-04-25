import Carro from "../car/Car";
import { Button, GarageContainer, Parking } from "../garage/styled";
import { useId } from "react";


function Garagem(props) {
  console.log(props,"Garagem")
  return (
    <GarageContainer>
      <h1>Garagem de {props.alert}</h1>
      <Button onClick={()=>props.mensagem(props.alert)}>Mensagem</Button> 

      <Parking>
        {
          props.car.map((car) =>
            <Carro key={useId()}
              brand={car.name}
              image={car.image}
              adicionadoPor={car.name}
              cor={car.color}
              ano={car.year}
              flex={car.flex? "Sim" : "Não"}
          />
          )
        }
      </Parking>

    </GarageContainer>
  );
}

export default Garagem;
