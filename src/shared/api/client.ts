import axios from 'axios'
import type { AxiosInstance } from 'axios'

interface ClientParams {
  baseURL: string
  timeout?: number
}

export class Client {
  instance: AxiosInstance

  constructor({ baseURL, timeout }: ClientParams) {
    this.instance = axios.create({
      baseURL,
      timeout,
    })

    this.instance.interceptors.request.use((config) => {
      const accessToken = localStorage.getItem('accessToken');
  
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
  
      return config;
    }, (error) => Promise.reject(error));
  }
}
