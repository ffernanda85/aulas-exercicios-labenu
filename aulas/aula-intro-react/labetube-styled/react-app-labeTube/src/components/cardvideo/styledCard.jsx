import styled from "styled-components";

export const Card = styled.div`
    display: grid;
    grid-template-rows: 3fr 1fr;
    grid-template-columns: 1fr;
    border-style: solid;
    border-width: thin;
    align-items: start;
    justify-items: stretch;

    div {
     
        img {
            width: 100%;
            height: 200px;
        }
    }
    
`