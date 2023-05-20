import styled from "styled-components";

export const GarageContainer = styled.div`
    background-color: gray;
    width: 100vw;
    height: 160vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`
export const Parking = styled.div`
    border: 2px solid black;
    border-radius: 15px;
    padding: 1rem 1.5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 2rem 1.5rem;
`