import { BaseApi } from './base'
import type { AdditionalClientParams } from './base'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
const API_V1_SUFFIX = import.meta.env.VITE_API_V1_SUFFIX

export class CoreBackendApiV1 extends BaseApi {
  constructor(path: string, clientParams?: AdditionalClientParams) {
    super({
      backendURL: BACKEND_URL,
      apiVersion: API_V1_SUFFIX,
      path,
    }, clientParams)
  }
}
