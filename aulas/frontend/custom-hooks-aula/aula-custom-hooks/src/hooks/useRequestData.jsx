import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestData = (url, initialState) => {
    const [data, setData] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsErrror] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios.get(url)
            .then(response => {
                setIsLoading(false)
                setData(response.data)
            })
            .catch(error => {
                setIsLoading(false)
                setIsErrror(true)
                console.log(error)
            })
    }, [url])

    return [data, isLoading, isError];
}