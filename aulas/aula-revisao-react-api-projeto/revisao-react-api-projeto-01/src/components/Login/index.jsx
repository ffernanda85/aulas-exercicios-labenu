import * as s from './styledLogin'
import { useForm } from '../../hooks/useForm'
import axios from 'axios'
import { BASE_URL } from '../../constants/BASE_URL'

export const Login = () => {
    const [form, onChange] = useForm({ email: "", password: "" })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}user/login`, form)
            .then((res) => {
            console.log(res.data)
        })
        .catch(error => console.log(error.response))
    }

    return (
        <s.Container>
            <s.StyledForm onSubmit={handleSubmit} >
                <s.StyledTitle>Identifique-se para entrar no planeta rick</s.StyledTitle>
                <s.StyledLabel htmlFor='email' >E-mail</s.StyledLabel>
                <s.StyledInput
                    id='email'
                    name='email'
                    onChange={onChange}
                    value={form.email}
                    type='email'
                    required
                />
                <s.StyledLabel htmlFor='password'>Password</s.StyledLabel>
                <s.StyledInput
                    id='password'
                    name='password'
                    onChange={onChange}
                    value={form.password}
                    type='password'
                    required
                />
                <s.StyledLink>Fazer Cadastro</s.StyledLink>
                <s.StyledBtn>Login</s.StyledBtn>
            </s.StyledForm>
   
        </s.Container>
    )
}