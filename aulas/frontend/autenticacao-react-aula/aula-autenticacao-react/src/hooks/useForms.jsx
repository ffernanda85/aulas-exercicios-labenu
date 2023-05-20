import { useState } from 'react'

export default function useForms(estadoInicial) {
    const [form, setForm] = useState(estadoInicial)

    const onChange = (e) =>{
        console.log(e.target)
        const {value, name} = e.target
        setForm({...form, [name]: value})
    }

    const limparCampos = () =>{
      setForm(estadoInicial)
    }
  return {form, onChange, limparCampos}
}
