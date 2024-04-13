import { useState, useEffect } from 'react'
import axios from 'axios'

const useAxios = axiosParams => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  const proxy = 'https://thingproxy.freeboard.io/fetch/'
  const url = 'https://www.shelterluv.com/api/v3/available-animals/11886?species=Cat'

  axios.defaults.baseURL = proxy + url
  axios.defaults.headers = {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }

  const fetchData = async (params) => {
    try {
      const response = await axios.request(params)
      setResponse(response.data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData(axiosParams)
    // eslint-disable-next-line
  }, [])

  return { response, error, loading }
}

export default useAxios
