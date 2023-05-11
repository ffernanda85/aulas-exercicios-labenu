import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
    margin-top: 3vw;
    display: flex;
    flex-direction: column;
    align-items: center;    
`
export const StyledForm = styled.form`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border: 0.3vw solid #7bd84f;
    border-radius: 2vw;
    background-color: #9ad8e6;
`
export const StyledTitle = styled.p`
    text-transform: uppercase;
    font-size: 1.5vw;
    color: #44281d;
    font-family: Roboto;
    font-weight: 800;
    margin: 1.5vw 0;
`
export const StyledLabel = styled.label`
    text-transform: uppercase;
    font-size: 1.8vw;
    color: #44281d;
    font-weight: 600;
    font-family: Roboto;
`
export const StyledInput = styled.input`
    width: 70%;
    padding: 0.7vw 1vw;
    margin-top:1vw;
    margin-bottom:1vw;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    text-align: center;
    font-size: 1.2vw;
    background-color: white;
    color: #44281d;
    border: none;
    outline: none;
    border-radius: 6px;
    box-shadow: 3px 3px 10px rgba(0,0,0,1),
    -1px -1px 6px rgba(255, 255, 255, 0.4);
`
export const StyledLink = styled.a`
    text-transform: uppercase;
    font-size: 1.2vw;
    color: #44281d;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
`
export const StyledBtn = styled.button`
    padding: 17px 40px;
    border-radius: 50px;
    border: 0;
    background-color: white;
    box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: 1.3vw;
    transition: all .5s ease;
    margin: 1.4vw 0;
    :hover {
    letter-spacing: 3px;
    background-color: #7bd84f;
    color: hsl(0, 0%, 100%);
    box-shadow: #7bd84f 0px 7px 29px 0px;
    }
    :active {
    letter-spacing: 3px;
    background-color: #7bd84f;
    color: hsl(0, 0%, 100%);
    box-shadow:#7bd84f 0px 0px 0px 0px;
    transform: translateY(10px);
    transition: 100ms;
    }

`
