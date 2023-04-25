import { useNavigate } from "react-router-dom";
import { FormContainer, InputContainer } from "./styled";
import { goToFeed, goToLogin } from "../../routes/coordinator";
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from '../../constants/BASE_URL'


function SignUpPage() {
  const navigate = useNavigate();
  const { form, onChange, cleanData } = useForm({ name: '', email: '', password: '' })

  const signup = (e) => {
    e.preventDefault()

    axios.post(`${BASE_URL}/user/signup`, form)
      .then((res) => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token)
        goToFeed(navigate)
        cleanData()
      })
      .catch((error) => {
        console.log(error)
    })
  }

  return (
    <main>
      <h1>Cadastro</h1>
      <FormContainer onSubmit={signup}>
        <InputContainer>
          <label htmlFor="username">Nome:</label>
          <input
            id="username"
            name='name'
            value={form.name}
            onChange={onChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            name="email"
            value={form.email}
            onChange={onChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            name="password"
            value={form.password}
            onChange={onChange}
            required
          />
        </InputContainer>

        <button >Cadastrar</button>
        <button onClick={() => goToLogin(navigate)}>Já sou cadastrado</button>
      </FormContainer>
    </main>
  );
}

export default SignUpPage;
