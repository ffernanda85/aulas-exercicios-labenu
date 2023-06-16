import styled from 'styled-components'

export const CardContainer = styled.div`
    background-color: var(--soft-white);
    padding: 10px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: var(--dark);
    max-width: 215px;
    height: 270px;

    img {
        max-width: 200px;
    }

    h2 {
        color: var(--deep-blue);
    }
`