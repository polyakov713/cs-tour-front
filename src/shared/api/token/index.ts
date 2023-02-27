import type { UserCredentials, TokenPair, AccessTokenDecoded } from './types'

import { CoreBackendApiV1 } from '../core-backend-v1'

export type { UserCredentials, TokenPair, AccessTokenDecoded }

class TokenApi extends CoreBackendApiV1 {
  constructor() {
    super('token/')
  }

  async obtain(creadentials: UserCredentials) {
    try {
      const res = await this.client.post<TokenPair>('', creadentials);
      
      return res.data
    } catch (err) {
      console.error('TokenApi.obtain:', err);
      throw err;
    }
  }
}

export const tokenApi = new TokenApi() 
