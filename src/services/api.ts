import axios, { AxiosInstance } from 'axios'

class Api {
  instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: 'https://gateway.marvel.com:443/v1/public/',
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        apikey: 'c878146bea73428d4be89614f2986109',
      },
    })

    this.instance.interceptors.response.use(
      (response) => response.data,
      (error) => error.response.data,
    )
  }
}

const api = new Api().instance

export default api
