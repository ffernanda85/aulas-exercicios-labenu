import { useNavigate } from "react-router-dom"
import { goToHome, goToProducts, goToProfile } from "../router/coordinator"

export function Header () {
    const navigate = useNavigate()

    return (
        <header>
            <button onClick={() => goToHome(navigate) } >Página Inicial</button>
            <button onClick={() => goToProfile(navigate)} >Página de Perfil</button>
            <button onClick={() => goToProducts(navigate, "01")} >Página Produto 01</button>
            <button onClick={() => goToProducts(navigate, "02") } >Página Produto 02</button>
        </header>
    )
}