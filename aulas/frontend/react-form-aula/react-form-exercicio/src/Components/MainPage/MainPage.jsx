import React from "react";
import { MainContainer, Form, Input } from "./styles";
import { useForm } from '../../hooks/useForm'

function MainPage() {

  const [form, onChange] = useForm({ name:'', module:'', technologies:'', manager:'' })

  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={() => window.confirm("Curso Cadastrado!")}>
        <label htmlFor="nome">Nome do Curso:</label>
        <Input
          pattern="^[A-ZÁ-Úa-zà-ùá-ú]{5,}$"
          id="nome"
          name='name'
          value={form.name}
          onChange={onChange}
          required
        />

        <label htmlFor="modulos">Número de Módulos: </label>
        <Input
          id="modulos"
          name='module'
          value={form.module}
          onChange={onChange}
          required
          type='number'
          min='2'
        />

        <label htmlFor="tecnologias">Tecnologias abordadas: </label>
        <Input
          id="tecnologias"
          name='technologies'
          value={form.technologies}
          onChange={onChange}
          required
        />

        <label htmlFor="responsavel">Responsável: </label>
        <Input
          id="responsavel"
          name='manager'
          value={form.manager}
          onChange={onChange}
          pattern="^[a-zA-Z]{5,}$"
          required
        />

        <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;
