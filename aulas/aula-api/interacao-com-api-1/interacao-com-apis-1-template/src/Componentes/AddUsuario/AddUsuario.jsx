import axios from "axios";
import React, { useState } from "react";

function AddUsuario(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  /* console.log(props) */
  

  const createUser = (nome, email) => {
    const body = {
      name: nome,
      email
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, props.headers)
      .then(response => {
        /* console.log(response) */
        alert("Usuário Adicionado com Sucesso")
        props.getAllUsers()
        setNome("")
        setEmail("")
      })
    .catch(error => console.log(error.response))
  }

  return (
    <>
      <h3>Adicionar novo usuario</h3>
      <input
        placeholder={"nome"}
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder={"email"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button onClick={() => createUser(nome, email)}>Enviar</button>
    </>
  );
}

export default AddUsuario;
