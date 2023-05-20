import styled from "styled-components";

export const Vacancy = styled.div`
    width: 13.4vw;
    height: 24.5vh;
    background: #FF9937;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
    img {
        width: 8.5vw;
        height: 12vh;
    }
    
    p {
        font-weight: 400;
        font-size: .625rem;
        line-height: .75rem;
    }

    h2 {
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        color: #000000;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`
export const Features = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    
`