import type { NewUserData, UserData } from './types'

import { CoreBackendApiV1 } from '../core-backend-v1'

export type { UserData }

class AuthApi extends CoreBackendApiV1 {
  constructor() {
    super('auth/')
  }

  async createUser(userData: NewUserData) {
    try {
      const res = await this.client.post('users/', userData)
      console.log(res)
    } catch (err) {
      console.error('AuthApi.createUser:', err)
      throw err;
    }
  }

  async getMe() {
    try {
      const res = await this.client.get<UserData>('users/me/')
      
      return res.data
    } catch (err) {
      console.error('AuthApi.getMe:', err)
      throw err;
    }
  }
}

export const authApi = new AuthApi() 
