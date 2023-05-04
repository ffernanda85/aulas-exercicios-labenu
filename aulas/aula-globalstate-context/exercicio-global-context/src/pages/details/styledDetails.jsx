import styled from 'styled-components'

export const ContainerDetails = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`
export const BtnToGoHome = styled.button`
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
export const CardDetails = styled.div`
    width: 500px;
    height: 300px;
    background-color: #f1ca80;
    padding: 1.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 10px;

    h2 {
        font-size: 2rem;
    }
    p {
        font-size: 1.5rem;
    }
`