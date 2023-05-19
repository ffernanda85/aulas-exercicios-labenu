import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const User = styled.div`
  border: black 1px solid;
  margin-top: 8px;
  width: 350px;
  padding: 8px;
`
function Usuario(props) {
  const [usuario, setUsuario] = useState(props.usuario);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [editar, setEditar] = useState(false);

  useEffect(() => {
    getUserById(usuario.id)
  }, [usuario])

  const getUserById = (id) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, props.headers)
      .then(response => {
        setEmail(response.data.email)
        setNome(response.data.name)
      })
      .catch(error => console.log(error.response))
  }
  
  const editUser = (id) => {
    const body = {
      name: nome,
      email: email
    }
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, body, props.headers)
      .then(() => {
        setNome(nome)
        setEmail(email)
        setEditar(!editar)
        alert("Usuário Alterado!")
      })
      .catch(error => console.log(error.response))
  }

  const deleteUser = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, props.headers)
      .then(() => {
        alert(`Usuário ${usuario.name} excluido com sucesso`)
        props.getAllUsers()
      })
    .catch(error => console.log(error.response))
  }

  return (
    <User>
      {editar ? (
        <div>
          <p>Nome: {nome}</p>
          <p>E-mail: {email}</p>
          <input value={nome} onChange={(e) => setNome(e.target.value)} />
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <button onClick={() => editUser(usuario.id)} >Enviar alterações</button>
        </div>
      ) : (
        <>
          <p><strong>Nome:</strong> {nome}</p>
          <p><strong>E-mail:</strong> {email}</p>
        </>
      )}
      <button onClick={() => setEditar(!editar)}>Editar</button>
      <button onClick={() => deleteUser(usuario.id)} >Excluir</button>
    </User>
  );
}

export default Usuario;
