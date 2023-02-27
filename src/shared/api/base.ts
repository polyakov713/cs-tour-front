import type { AxiosInstance } from 'axios'
import { getClient } from './client'

interface LocationParams {
  backendURL: string
  apiVersion: string
  path: string
}

export interface AdditionalClientParams {
  timeout: number
}

export class BaseApi {
  client: AxiosInstance

  constructor({ backendURL, apiVersion, path }: LocationParams, clientParams?: AdditionalClientParams) {
    this.client = getClient({
      baseURL: `${backendURL}${apiVersion}/${path}`,
      timeout: clientParams?.timeout,
    })
  }
}
