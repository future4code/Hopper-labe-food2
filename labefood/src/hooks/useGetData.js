import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/base_URL";
import axios from "axios";

const useGetData = (param) => {
  
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false) 

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])

  const getData = () => {
    setIsLoading(true)
    const headers = {
      headers: {
        auth: localStorage.getItem('token')
      }
    }
    axios.get(`${BASE_URL + param}`, headers)
    .then((res) => {
      setData(res.data)
    }).catch((err) => {
      alert(err.response.data.message)
    }).finally(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    })
  }

  return { data, isLoading }

}

export default useGetData;
