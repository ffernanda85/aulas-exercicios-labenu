import axios from "axios"
import { Children, useEffect, useState } from "react"
import { BASE_URL, Headers } from "../constants/BASE_URL"
import { GlobalContext } from "./GlobalContext"


export const GlobalState = ({children}) => {
    const [users, setUsers] = useState([])

    const getAllUsers = async () => {
        try {
            const res = await axios.get(BASE_URL, Headers)
            
            setUsers(res.data)

        } catch (error) {
            console.log(error.response)
        }
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    const context = {
        users,
        setUsers
    }

    return (
        <GlobalContext.Provider value={context}>
            {children}
        </GlobalContext.Provider>
    )
}