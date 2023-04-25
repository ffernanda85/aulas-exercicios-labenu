import axios from "axios"
import { useEffect, useState } from "react"
//import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../constants/BASE_URL"


export function useRequestData(initialState, path, headers) {
    const [data, setData] = useState(initialState)
  //  const navigate = useNavigate()

    const getAllRecipes = () => {
        axios.get(`${BASE_URL}${path}`, headers)
          .then((res) => {
              console.log(res.data)
              setData(res.data)
          })
          .catch((error) => {
              console.log(error)
        })
    }
    
    useEffect(() => {
        getAllRecipes()
    }, [path])
    
    return [data]
}