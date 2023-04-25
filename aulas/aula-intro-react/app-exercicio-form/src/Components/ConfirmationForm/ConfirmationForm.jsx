import React from "react";
import { Form } from "../MainPage/styles";

const ConfirmationForm = (props) => {
  const {sendForm, onChangeCidade, onChangeTelefone, onChangeDataNascimento, dataNascimento, telefone, cidade} = props

  return (
    <Form>
      <input
        placeholder="Data de nascimento"
        value={dataNascimento}
        onChange = {(event)=>onChangeDataNascimento(event) }
      />
      <input
        placeholder="Telefone"
        value={telefone}
        onChange = {(event)=>onChangeTelefone(event) }
      />
      <input
        placeholder="Cidade"
        value={cidade}
        onChange = {(event)=>onChangeCidade(event) }
      />
      <button onClick={sendForm}>Enviar dados</button>
    </Form>
  );
};

export default ConfirmationForm;