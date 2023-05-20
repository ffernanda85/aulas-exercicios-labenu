import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding-top: 1.5rem;
`
export const InputsContainer = styled.div`
    display: flex;
    gap: 1rem;

    button {
        padding: .2rem .3rem;
    }
`
export const Task = styled.li`
    text-decoration-line: ${({ complete }) => complete ? 'line-through' : 'none' };
`