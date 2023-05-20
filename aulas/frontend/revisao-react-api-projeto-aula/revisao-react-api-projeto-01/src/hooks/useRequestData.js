import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/BASE_URL'

export function useRequestData(initialState,path,headers) {
  
  //variaveis de estado
  const [data, setData] = useState(initialState)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  
  const receiveData=()=>{
    setIsLoading(true);
    axios.get(`${BASE_URL}${path}`,{headers})
      .then(response => {
        setData(response.data)
        setIsLoading(false);
      })
      .catch((error) => {
        //console.log(error.response.data)
        setIsLoading(false);
        setError(error)
      })
  }
  useEffect(() => {
    receiveData();   
  },[])

  return {data,receiveData,isLoading,error}
}