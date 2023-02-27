import { defineStore } from 'pinia'
import jwtDecode from 'jwt-decode'

import { tokenApi } from '@/shared/api/token'
import type { UserCredentials, TokenPair, AccessTokenDecoded } from '@/shared/api/token'

import { ACCESS_TOKEN_STORAGE_KEY, REFRESH_TOKEN_STORAGE_KEY } from '../constants'

function saveTokenPairToLocalStorage(tokenPair: TokenPair) {
  localStorage.setItem('accessToken', tokenPair.access)
  localStorage.setItem('refreshToken', tokenPair.refresh)
}

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      accessToken: localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY),
      refreshToken: localStorage.getItem(REFRESH_TOKEN_STORAGE_KEY),
    }
  },
  getters: {
    accessTokenDecoded(state) {
      return state.accessToken ? jwtDecode<AccessTokenDecoded>(state.accessToken) : null
    },
    isAuthorized(): boolean {
      return this.accessTokenDecoded ? Boolean(this.accessTokenDecoded.user_id) : false
    },
    accessTokenIsExpired(): boolean | undefined {
      return this.accessTokenDecoded ? Date.now() > this.accessTokenDecoded.exp * 1000 : undefined
    },
  },
  actions: {
    async signIn(credentials: UserCredentials) {
      try {
        const tokenPair = await tokenApi.obtain(credentials)
  
        saveTokenPairToLocalStorage(tokenPair)

        this.accessToken = tokenPair.access
        this.refreshToken = tokenPair.refresh
      } catch (err) {
        console.error('authStore.signIn:', err)
        throw err
      }
    },
  },
})
