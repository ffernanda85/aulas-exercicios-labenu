import styled from "styled-components"

export const Container = styled.div`
    width: 250px;
    height: 200px;
    background-color: white;
    color:#ff6262;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    text-align: center;
    font-size: 1.5rem;
    padding: 1rem;

    :hover {
        border: 3px solid #ff6262;
    }
`
export const BtnToGoDetails = styled.button`
    width: 100px;
    height: 30px;
    background-color: orange;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    :hover {
        background-color: white;
        color: orange;
        border: 1px solid orange;
    }
`