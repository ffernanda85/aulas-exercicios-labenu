import React from "react";
import styled from "styled-components";

const ContainerData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  gap: 5px;
`;

const ConfirmationPage = ({ data }) => {
  const {nome, idade, email, dataNascimento, telefone, cidade} = data

  return (
    <div>
      <h1>Inscrição confirmada!</h1>
      <ContainerData>
        <h3>Dados enviados</h3>
        <p>Nome: {nome}</p>
        <p>Idade: {idade}</p>
        <p>E-mail: {email}</p>
        <p>Data de Nascimento: {dataNascimento}</p>
        <p>Telefone: {telefone}</p>
        <p>Cidade: {cidade}</p>
      </ContainerData>
    </div>
  );
};

export default ConfirmationPage;
