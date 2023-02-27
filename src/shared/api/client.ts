import axios from 'axios'
import type { AxiosInstance } from 'axios'

interface ClientParams {
  baseURL: string
  timeout?: number
}

export function getClient({ baseURL, timeout }: ClientParams): AxiosInstance {
  const instance = axios.create({
    baseURL,
    timeout,
  })

  instance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  }, (error) => Promise.reject(error))

  return instance
}
