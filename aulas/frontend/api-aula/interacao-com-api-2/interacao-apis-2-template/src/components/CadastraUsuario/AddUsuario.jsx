import axios from "axios";
import React, { useState } from "react";
import { AUTH_TOKEN } from "../../constantes/AUTH_TOKEN";
import { BASE_URL } from "../../constantes/BASE_URL";
import { InputCadastro, ContainerCadastro } from './style'

function AddUsuario(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const postNovoUsuario = () => {
    const body = {
      name: nome,
      email
    };

    try {
      axios
        .post(
          BASE_URL,
          body,
          {
            headers: {
              Authorization: AUTH_TOKEN
            }
          }
      )
      alert("usuario criado!");
      props.getUsuarios();
      setEmail("");
      setNome("");

    } catch (error) {
      console.log(error.response)
    }
  };

  return (
    <ContainerCadastro>
      <h3>Cadastrar novo usuario</h3>
      <InputCadastro
        placeholder={"Nome"}
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
      <InputCadastro
        type="email"
        placeholder={"E-mail"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button onClick={postNovoUsuario}>Enviar</button>
    </ContainerCadastro>
  );
}

export default AddUsuario;