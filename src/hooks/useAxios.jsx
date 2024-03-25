import React, { useState, useEffect } from 'react'
import axios from 'axios'

// const proxy = 'https://cors-through.herokuapp.com/'
const proxy = 'https://cors-through-c6963a907c2c.herokuapp.com/'
// const proxy = 'https://cors-anywhere.herokuapp.com/'
const url = 'https://www.shelterluv.com/api/v3/available-animals/11886?species=Cat'

axios.defaults.baseURL = proxy + url
axios.defaults.headers = {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
}

const useAxios = axiosParams => {
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

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
    }, [])

    return { response, loading, error }
}

export default useAxios