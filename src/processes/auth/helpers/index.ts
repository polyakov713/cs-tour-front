import jwtDecode from 'jwt-decode'

import type { TokenPair, TokenDecoded } from '@/shared/api/token'


export function saveTokenPairToLocalStorage(tokenPair: TokenPair) {
  localStorage.setItem('accessToken', tokenPair.access)
  localStorage.setItem('refreshToken', tokenPair.refresh)
}

export function removeTokenPairFromLocalStorage() {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
}

export function checkTokenIsExpired(token: string | null): boolean | undefined {
  if (!token) {
    return undefined
  }

  const tokenDecoded = jwtDecode<TokenDecoded>(token)

  return Date.now() > tokenDecoded.exp * 1000
}

export function checkTokenIsValid(token: string | null): boolean {
  if (!token) {
    return false
  }

  const tokenIsExpired = checkTokenIsExpired(token)

  return !tokenIsExpired
}
