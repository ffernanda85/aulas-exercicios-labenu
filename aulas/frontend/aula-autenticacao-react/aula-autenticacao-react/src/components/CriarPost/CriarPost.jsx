import axios from 'axios'
import React from 'react'
import { BASE_URL } from '../../constants/BASE_URL'
import useForms from '../../hooks/useForms'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { FormPost, Input, TextArea } from './styled'

export default function CriarPost() {
  useProtectedPage()

  const token = localStorage.getItem('token')
  const headers = {
    headers: {
      Authorization: token
    }
  }

  const { form, onChange, limparCampos } = useForms({ title: '', body: '' })

  const enviarPost = (e) => {
    e.preventDefault()
    console.log("entrou")
    console.log(form)

    axios.post(`${BASE_URL}/posts`, form, headers)
      .then((res) => {
        console.log(res.data)
        limparCampos()
        //recarrega a page assim que criar um post
        window.location.reload()
      })
      .catch((error) => {
      console.log(error)
    })
  }
  
  return (
    <FormPost onSubmit={enviarPost}>
      <label htmlFor='tituloPost'>Título:</label>
      <Input
        placeholder='digite um título para o seu post'
        name='title'
        value={form.title}
        onChange={onChange}
      />
      <label htmlFor='textoPost'>Texto:</label>
      <TextArea
        placeholder='crie um post!'
        name='body'
        value={form.body}
        onChange={onChange}
      />
      <button>Enviar</button>
    </FormPost>
  )
}
