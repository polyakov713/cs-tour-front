import { defineStore } from 'pinia'
import jwtDecode from 'jwt-decode'
import { AxiosError } from 'axios'

import { tokenApi } from '@/shared/api/token'
import type { UserCredentials, TokenPair, TokenDecoded } from '@/shared/api/token'

import {
  saveTokenPairToLocalStorage,
  removeTokenPairFromLocalStorage,
  checkTokenIsExpired,
  checkTokenIsValid,
} from '../helpers'
import { ACCESS_TOKEN_STORAGE_KEY, REFRESH_TOKEN_STORAGE_KEY } from '../constants'


const NOT_VALID_TOKEN_ERROR_CODE = 'token_not_valid'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      accessToken: localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY),
      refreshToken: localStorage.getItem(REFRESH_TOKEN_STORAGE_KEY),
    }
  },
  getters: {
    accessTokenDecoded(state) {
      return state.accessToken ? jwtDecode<TokenDecoded>(state.accessToken) : null
    },
    isAuthorized(): boolean {
      return this.accessTokenDecoded ? Boolean(this.accessTokenDecoded.user_id) : false
    },
  },
  actions: {
    updateTokenPair(tokenPair: TokenPair) {
      saveTokenPairToLocalStorage(tokenPair)

      this.accessToken = tokenPair.access
      this.refreshToken = tokenPair.refresh
    },
    clearTokenPair() {
      removeTokenPairFromLocalStorage()

      this.accessToken = null
      this.refreshToken = null
    },
    async signIn(credentials: UserCredentials) {
      try {
        const tokenPair = await tokenApi.obtain(credentials)
  
        this.updateTokenPair(tokenPair)
      } catch (err) {
        console.error('authStore.signIn', err)
        throw err
      }
    },
    async refreshTokenPair() {
      try {
        // if (!checkTokenIsValid(this.refreshToken)) {
        //   throw new Error(NOT_VALID_TOKEN_ERROR_CODE)
        // }

        const tokenPair = await tokenApi.refresh(this.refreshToken as string)
  
        this.updateTokenPair(tokenPair)
      } catch (err) {
        console.error('authStore.refreshTokenPair', err)
        throw err
      }
    },
    async checkAuthState() {
      if (!checkTokenIsExpired(this.accessToken)) {
        return
      }

      try {
        await this.refreshTokenPair()
      } catch (err: unknown) {
        let tokenIsNotValid = false
        let isError401 = false

        if (err instanceof Error) {
          tokenIsNotValid = err.message === NOT_VALID_TOKEN_ERROR_CODE
        }

        if (err instanceof AxiosError) {
          isError401 = err.response?.status === 401
        }

        if (tokenIsNotValid || isError401) {
          this.clearTokenPair()
        }
      }
    },
  },
})
