import React from "react";
import { Carro } from "../carro/Carro";
import { GarageContainer, Parking } from "./styledGarage";

function Garagem(props) {
    return (

        <GarageContainer>
            <h2>Garagem de {props.typeGarage}</h2>
            <button onClick={()=>props.messageButton(props.proprietary, props.typeGarage)}>Mensagem</button>
            <Parking>
                {
                    props.Car.filter((car) =>
                        car.color === "vermelho" || "preto").map((car) =>
                        <Carro
                            brand={car.brand}
                            color={car.color}
                            year={car.year}
                            flex={car.flex}
                            image={car.image}
                        />
                    )
                }
            </Parking>
        </GarageContainer>
    );
}

export default Garagem