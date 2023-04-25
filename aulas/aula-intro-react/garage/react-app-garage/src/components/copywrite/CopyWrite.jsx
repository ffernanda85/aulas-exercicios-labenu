import React from "react";
import Imagem from '../../img/copywrite.jpg'
import { CopywriteContainer } from "./styledCopy";

export function CopyWrite () {
    
    return (
        <CopywriteContainer>
            <img src={ Imagem } alt=''/>
            <p>Site Feito por Flávia Fernanda</p>
        </CopywriteContainer>
    )
}