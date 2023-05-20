import styled from "styled-components";

export const Button = styled.button`
    background-color: orange;
    border: none;
    padding: 10px;
    :hover{
        background-color: yellowgreen;
    }
`
export const GarageContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    height: 100%;
    
    h1 {
        font-size: 2.5rem;
        line-height: 3rem;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`

export const Parking = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1.375rem 4.875rem;
    padding: 2rem 3rem;
    background: #7A717D;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 38.8vw;
    height: 62.7vh;
`