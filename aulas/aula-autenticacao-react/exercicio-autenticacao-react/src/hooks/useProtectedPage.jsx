import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToLogin } from "../routes/coordinator"


export const useProtectedPage = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    useEffect(() => {
        if (!token) {
            goToLogin(navigate)
        }
    }, [navigate])
}