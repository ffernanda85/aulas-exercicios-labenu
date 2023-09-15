import { useNavigate } from "react-router-dom";

export default function Header() {
		// pra relembrar: o navigate é uma função de redirecionamento de rota
    const navigate = useNavigate();

    const logout = () => {
        window.localStorage.removeItem("nomeDoprojeto-token");
        navigate("/login");
    };

    return (
        <header>
            <nav>
                <span>Minha Logo</span>
                <button onClick={logout}>Deslogar</button>
            </nav>
        </header>
    );
}