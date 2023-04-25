import React from "react";
import { RedesSociais } from "../network/RedesSociais";
import { CopyWrite } from "../copywrite/CopyWrite";
import { FooterContainer } from "./styledFooter";

export function Footer() {
    
    return (
        <FooterContainer>
            <RedesSociais />
            <CopyWrite />
        </FooterContainer>
    )
}