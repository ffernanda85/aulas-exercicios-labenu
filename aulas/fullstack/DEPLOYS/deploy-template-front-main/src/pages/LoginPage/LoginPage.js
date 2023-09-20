import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL, TOKEN_NAME } from "../../constants/url";
import { goToHomePage, goToSignupPage } from "../../routes/coordinator";

export default function LoginPage() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false)

  const changeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const login = async (event) => {
    event.preventDefault()

    try {
      setIsLoading(true);

      const body = {
        email: form.email,
        password: form.password
      };

      const response = await axios.post(BASE_URL + "/users/login", body);
      window.localStorage.setItem(TOKEN_NAME, response.data.token);

      setIsLoading(false);
      goToHomePage(navigate);
    } catch (error) {
      setIsLoading(false);
      console.error(error?.response?.data);
      window.alert(error?.response?.data)
    }
  };

  return (
    <main>
      <section>
        <h1>
          Faça o login
        </h1>

        <article>
          <form onSubmit={login} autoComplete="off">
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
                Mostrar Senha
              </span>
            </section>

            <button disabled={isLoading}>Entrar</button>
          </form>

          <h2>
            Ainda não tem conta? {" "}
            <button disabled={isLoading} onClick={() => goToSignupPage(navigate)}>
              Cadastre-se!
            </button>
          </h2>

          <hr />

          <h3>Conta de teste</h3>
          <p>astrodev@email.com</p>
          <p>astrodev99</p>
          <button
            onClick={() => {
              setForm({
                email: "astrodev@email.com",
                password: "astrodev99"
              })
            }}
          >
            Autopreencher
          </button>
        </article>
      </section>
    </main>
  );
}
