import React, { useState } from "react";
import { MainContainer, Form, Input } from "./styles";

function MainPage() {

  const [inputName, setInputName] = useState("")
  const [inputAge, setInputAge] = useState("")
  const [inputEmail, setInputEmail] = useState("")
  const [inputPass, setInputPass] = useState("")

  const handleInput = (event, setState) => {
    setState(event.target.value)
  }

  const btnSend = () => {
    console.log(inputName, inputAge, inputEmail, inputPass)
    setInputAge("")
    setInputName("")
    setInputEmail("")
    setInputPass("")
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input
            value={inputName}
            onChange={(event)=>handleInput(event, setInputName)}
          />
        </label>

        <label>
          Idade:
          <Input
            value={inputAge}
            onChange={(event)=>handleInput(event, setInputAge)}
          />
        </label>
        
        <label>
          E-mail:
          <Input
            value={inputEmail}
            onChange={(event)=>handleInput(event, setInputEmail)}
          />
        </label>

        <label>
          Senha:
          <Input
            value={inputPass}
            onChange={(event) => handleInput(event, setInputPass)}
            type='password'
          />
        </label>
        <button onClick={btnSend}>Enviar dados</button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;
