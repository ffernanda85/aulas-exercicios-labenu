import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL, TOKEN_NAME } from "../../constants/url";
import { goToHomePage, goToLoginPage } from "../../routes/coordinator";

export default function SignupPage() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  });

  const [showPassword, setShowPassword] = useState(false)

  const changeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const signup = async (event) => {
    event.preventDefault()

    if (form.password === form.passwordConfirmation) {
      try {
        setIsLoading(true);

        const body = {
          name: form.name,
          email: form.email,
          password: form.password
        };

        const response = await axios.post(BASE_URL + "/users/signup", body);
        window.localStorage.setItem(TOKEN_NAME, response.data.token);

        setIsLoading(false);
        goToHomePage(navigate);
      } catch (error) {
        setIsLoading(false);
        console.error(error?.response?.data);
        window.alert(error?.response?.data)
      }
    }
  };

  return (
    <main>
      <section>
        <h1>
          Faça o cadastro
        </h1>

        <article>
          <form onSubmit={signup} autoComplete="off">
            <section>
              <label>Nome</label>
              <input
                name={"name"}
                value={form.name}
                onChange={changeForm}
              />
            </section>

            <section>
              <label>Email</label>
              <input
                name={"email"}
                value={form.email}
                onChange={changeForm}
              />
            </section>

            <section>
              <label>Senha</label>
              <input
                type={showPassword ? "text" : "password"}
                name={"password"}
                value={form.password}
                onChange={changeForm}
              />

              <span>
                <input
                  type="checkbox"
                  value={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />
                Mostrar
              </span>
            </section>

            <section>
              <label>Confirme a senha</label>
              <input
                type={showPassword ? "text" : "password"}
                name={"passwordConfirmation"}
                value={form.passwordConfirmation}
                onChange={changeForm}
              />

              <span>
                <input
                  type="checkbox"
                  value={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />
                Mostrar
              </span>
            </section>

            <h3
              style={{ color: "red" }}
              hidden={form.password === form.passwordConfirmation}
            >
              Confirmação de senha incorreta
            </h3>

            <button disabled={isLoading}>Entrar</button>
          </form>

          <h2>
            Já tem conta? {" "}
            <button disabled={isLoading} onClick={() => goToLoginPage(navigate)}>
              Faça o login!
            </button>
          </h2>
        </article>
      </section>
    </main>
  );
}
