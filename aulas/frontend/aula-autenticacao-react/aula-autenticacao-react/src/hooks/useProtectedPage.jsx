import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { irParaLogin } from "../Routes/coordinator"


export function useProtectedPage() {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    useEffect(() => {
        if (!token) {
          irParaLogin(navigate)
        } 
      },[navigate])
}