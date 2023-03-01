import type { UserCredentials, TokenPair, TokenDecoded } from './types'

import { CoreBackendApiV1 } from '../core-backend-v1'

export type { UserCredentials, TokenPair, TokenDecoded }

class TokenApi extends CoreBackendApiV1 {
  constructor() {
    super('token/')
  }

  async obtain(credentials: UserCredentials) {
    try {
      const res = await this.client.post<TokenPair>('', credentials);
      
      return res.data
    } catch (err) {
      console.error('TokenApi.obtain:', err);
      throw err;
    }
  }

  async refresh(refreshToken: string) {
    try {
      const res = await this.client.post<TokenPair>('refresh/', { refresh: refreshToken })
      
      return res.data
    } catch (err) {
      console.error('TokenApi.refresh:', err);
      throw err;
    }
  }
}

export const tokenApi = new TokenApi() 
