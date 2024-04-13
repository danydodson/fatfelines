import axios from 'axios'

const PROXY = 'https://thingproxy.freeboard.io/fetch/'
const URL = `${PROXY}https://www.shelterluv.com/api/v3/available-animals/11886?species=Cat`

export default function AxiosCreate() {
  axios.create({
    baseURL: URL,
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    }

  })
}