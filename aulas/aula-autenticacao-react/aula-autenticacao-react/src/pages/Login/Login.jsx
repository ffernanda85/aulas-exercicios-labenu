import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../constants/BASE_URL'
import useForms from '../../hooks/useForms'
import { irParaCadastro, irParaFeed } from '../../Routes/coordinator'
import { ContainerForm, ContainerLogin, Input } from './styled'

export default function Login() {
  const navigate = useNavigate()

  const { form, onChange, limparCampos } = useForms({ email: "", password: "" })
 
  const enviaLogin = (e) => {
    e.preventDefault()
    console.log(form)

    axios.post(`${BASE_URL}/users/login`, form)
      .then((res) => {
        console.log('resposta do login:', res.data.token)
        localStorage.setItem('token', res.data.token)
        irParaFeed(navigate)
        limparCampos()
      })
      .catch((error) => {
        console.log('resposta error:', error.data)
    })
  }

  return (
    <ContainerLogin>
      <ContainerForm onSubmit={enviaLogin}>
        <label htmlFor='email'>Email:</label>
        <Input id='email'
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          placeholder="nome@email.com"
          required
        />
        <label htmlFor='senha'>Senha:</label>
        <Input id='senha'
          name="password"
          minLength={8}
          value={form.password}
          onChange={onChange}
          placeholder="Digite sua senha"
          required
        />
        <button>Fazer Login</button>
      </ContainerForm>
      <button onClick={() => irParaCadastro(navigate)}>Ainda não tenho uma conta</button>
    </ContainerLogin>
  )
}
