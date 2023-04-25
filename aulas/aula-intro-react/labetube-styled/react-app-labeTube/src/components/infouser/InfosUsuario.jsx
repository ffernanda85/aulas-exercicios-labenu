import React from "react";
import { InfoUser } from "./styledUser";

export function InfosUsuario(props) {
    return (
        <InfoUser>
            <p>{props.nome}</p>
            {props.imagem2.imagemInfo}
        </InfoUser>
    )
}
