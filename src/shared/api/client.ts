import axios from 'axios'
import type { AxiosInstance } from 'axios'

import { useAuthStore } from '@/processes/auth'


interface ClientParams {
  baseURL: string
  timeout?: number
}

export function getClient({ baseURL, timeout }: ClientParams): AxiosInstance {
  const instance = axios.create({
    baseURL,
    timeout,
  })

  // const notRetriableUrls = ['token/refresh/', 'auth/users/']
  const notRetriableUrls = ['token/refresh/']

  function checkIsRetriableUrl(url: string | undefined): boolean {
    if (!url) {
      return false
    }

    return notRetriableUrls.every((item) => !url.includes(item))
  }

  instance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem('accessToken')

    if (!accessToken) {
      return config
    }

    config.headers.Authorization = `Bearer ${accessToken}`

    return config
  }, (error) => Promise.reject(error))

  instance.interceptors.response.use((response) => response, async (error) => {
    console.log('response.use')
    const originalConfig = error.config

    const isRetriableUrl = checkIsRetriableUrl(error.request?.responseURL)
    const isError401 = error.response?.status === 401

    console.log('isRetriableUrl', isRetriableUrl)

    if (isRetriableUrl && isError401 && !originalConfig._retry) {
      originalConfig._retry = true

      const authStore = useAuthStore()

      try {
        await authStore.checkAuthState()

        return instance(originalConfig)
      } catch (err) {
        return Promise.reject(err)
      }
    }

    Promise.reject(error)
  })

  return instance
}
