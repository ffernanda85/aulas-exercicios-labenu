import React from "react";
import Logo from '../../img/logo.png'
import { HeaderContainer } from "./styledHeader";

export function Header () {

    return (
        <HeaderContainer>
            <img className="img" src={Logo} />
            <h1>Garagens da Flávia e Izabela</h1>
        </HeaderContainer>
    )
}