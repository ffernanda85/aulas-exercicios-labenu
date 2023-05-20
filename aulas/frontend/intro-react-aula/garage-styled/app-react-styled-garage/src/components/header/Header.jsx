import React from "react";
import Logo from '../../img/image1.png'
import { Title } from "./styledHeader";

export function Header () {

    return (
        <Title>
            <img src={Logo} />
            <h1>Garagens Flávia e Izabela</h1>
        </Title>
    );
}