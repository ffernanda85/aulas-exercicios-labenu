import React from "react";
import CopyWrite from '../../img/copywrite.jpg'
import { BaseBoard } from "./styledFooter";

export function Footer() {
    
    return (
        <BaseBoard>
            <img src= {CopyWrite} />
            <p>Site Feito Por Flávia Fernanda</p>
        </BaseBoard>
    )
}