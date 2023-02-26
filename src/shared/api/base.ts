import { Client } from './client'

interface LocationParams {
  backendURL: string
  apiVersion: string
  path: string
}

interface AdditionalClientParams {
  timeout: number
}

export class BaseApi {
  client: Client

  constructor({ backendURL, apiVersion, path }: LocationParams, clientParams?: AdditionalClientParams) {
    this.client = new Client({
      baseURL: `${backendURL}${apiVersion}/${path}`,
      timeout: clientParams?.timeout,
    })
  }
}
