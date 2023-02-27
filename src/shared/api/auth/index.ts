import type { NewUserData } from './types'

import { CoreBackendApiV1 } from '../core-backend-v1'

class AuthApi extends CoreBackendApiV1 {
  constructor() {
    super('auth/')
  }

  async createUser(userData: NewUserData) {
    try {
      const res = await this.client.post('users/', userData);
      console.log(res)
    } catch (err) {
      console.error('AuthApi.signUp:', err);
      throw err;
    }
  }
}

export const authApi = new AuthApi() 
