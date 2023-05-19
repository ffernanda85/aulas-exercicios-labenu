import { useNavigate } from "react-router-dom";
import { FormContainer, InputContainer } from "./styled.jsx";
import { goToFeed, goToSignUp } from "../../routes/coordinator";
import { useForm } from "../../hooks/useForm.jsx";
import axios from "axios";
import { BASE_URL } from '../../constants/BASE_URL'

function LoginPage() {
  const navigate = useNavigate();
  const { form, onChange, cleanData } = useForm({ email: '', password: '' })
  
  const login = (e) => {
    e.preventDefault()

    axios.post(`${BASE_URL}/user/login`, form)
      .then((res) => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token)
        goToFeed(navigate)
      })
      .catch((error) => {
        console.log(error.response.data.message)
    })
  }


  return (
    <main>
      <h1>Login</h1>
      <FormContainer onSubmit={login}>
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
          <label htmlFor="senha">Senha:</label>
          <input
            id="senha"
            name="password"
            value={form.password}
            onChange={onChange}
            required
          />
        </InputContainer>
        <button>Entrar</button>
        <button onClick={() => goToSignUp(navigate)}>Não tenho cadastro</button>
      </FormContainer>
    </main>
  );
}

export default LoginPage;
