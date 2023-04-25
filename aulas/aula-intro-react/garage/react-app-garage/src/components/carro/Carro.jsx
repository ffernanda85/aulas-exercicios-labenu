import React from "react";
import { Car } from "./styledCar";

export function Carro (props) {
    return (
        <Car>
            <h4>{props.brand}</h4>
            <img src={props.image} />

            <ul>
                <li>Cor: {props.color} </li>
                <li>Ano: {props.year} </li>
                <li>Flex: {props.flex? "Sim" : "Não"} </li>
            </ul>
        </Car>
    );
}

export function CarroFamilia () {
    return (
        <Car>
            <h1>Jeep</h1>
            <ul>
                <li>Cor: Vermelho</li>
                <li>Ano: 2023</li>
                <li>Flex: Sim</li>
            </ul>
        </Car>
    );
}
