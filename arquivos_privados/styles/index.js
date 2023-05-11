import styled from 'styled-components';
import theme from '../constants/THEME'

export const PageContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    background: url(${({image})=>image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    align-items: center;
    justify-content: space-around;
    
`

export const TextContainer = styled.div`
    width: 40vw;
    background:${theme.colors.blue100};
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem;
    border-radius:5px;
    opacity: 0.87;
    letter-spacing: 1.5px;
    font-size:1.19rem;

    span{
        font-weight:bolder;
    }
`

export const SButton = styled.button`
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
    background-color: ${theme.colors.green};
    color: hsl(0, 0%, 100%);
    box-shadow: ${theme.colors.green} 0px 7px 29px 0px;
    }

    :active {
    letter-spacing: 3px;
    background-color: ${theme.colors.green};
    color: hsl(0, 0%, 100%);
    box-shadow:${theme.colors.green} 0px 0px 0px 0px;
    transform: translateY(10px);
    transition: 100ms;
    }
`;

export const ContainerCard = styled.div`
    margin-top:12vh;
    display: grid;
	grid-template-columns: repeat(3, 1fr);
    align-self: center;
    align-items: center;
    justify-content: space-evenly;
    justify-items:center;
    row-gap: 16vh;
    grid-auto-flow: row;
`;

export const SForm = styled.form`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border:solid 0.3vw ${theme.colors.green} ;
    border-radius: 2vw;
    background-color: ${theme.colors.blue100};
`;

export const STitle = styled.p`
    text-transform: uppercase;
    font-size: 1.5vw;
    color: ${theme.colors.brown};
    font-family: 'Kanit', sans-serif;
    font-weight: 800;
    margin: 1.5vw 0vw;
    /* font-family: 'Montserrat', sans-serif; */
    `;

export const SLabel = styled.label`
    text-transform: uppercase;
    font-size: 1.8vw;
    color: ${theme.colors.brown};
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    `;
export const SInput = styled.input`
    width: 70%;
    padding: 0.7vw 1vw;
    margin-top:1vw;
    margin-bottom:1vw;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    text-align: center;
    font-size: 1.2vw;
    background-color: ${theme.colors.white};
    color: ${theme.colors.brown};
    border: none;
    outline: none;
    border-radius: 6px;
     box-shadow: 3px 3px 10px rgba(0,0,0,1),
    -1px -1px 6px rgba(255, 255, 255, 0.4);
`;

export const Container = styled.div`
    width: 100vw;
    margin-top: 3vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InputSelectStyle = styled.select`
    width: 70%;
    padding: 0.7vw 1vw;
    margin-top:1vw;
    margin-bottom:1vw;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    text-align: center;
    font-size: 1.2vw;
    
    border-radius:50px;
    border: 1px solid ${theme.colors.green};
    color: ${theme.colors.blue800};
    text-align: center;
`


