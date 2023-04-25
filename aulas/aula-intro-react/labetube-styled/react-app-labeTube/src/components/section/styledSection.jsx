import styled from "styled-components";

export const Content = styled.section`
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    row-gap: 10px;
    column-gap: 10px;
    margin: 10px;
`