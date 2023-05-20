import React from "react";
import "../../App.css"
import { InfosUsuario } from "../infouser/InfosUsuario";
import { Card } from "./styledCard";

export function CardVideo (props) {

    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
    }

    return (
        <Card className="box-pagina-principal" onClick={reproduzVideo}>
            <div>{props.video1.imagem}</div>
            <h4>{props.video1.titulo}</h4>
            <InfosUsuario nome={props.nome} imagem2={props.video1} />
        </Card>
    )
}