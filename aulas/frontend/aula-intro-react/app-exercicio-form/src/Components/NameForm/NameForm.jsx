import React from 'react'
import { Form, Input} from '../MainPage/styles'

const NameForm = (props) => {
  const {nome, idade, email, onChangeNome, onChangeIdade, onChangeEmail, sendData} = props

  return (
    <Form>
        <label>
          Nome:
          <Input  placeholder="Nome" value={nome} onChange={onChangeNome}/>
        </label>
        <label>
          Idade:
          <Input  placeholder="Idade" value={idade} onChange={onChangeIdade}/>
        </label>
        <label>
          E-mail:
          <Input  placeholder="usuario@usuario.com" value={email} onChange={onChangeEmail}/>
        </label>
        <label>
          Confirmação de e-mail:
          <Input  placeholder="usuario@usuario.com" value={email} onChange={onChangeEmail}/>
        </label>
      <button onClick={sendData}>Enviar dados</button>
      </Form>
  )
}

export default NameForm