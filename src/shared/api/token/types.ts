export interface UserCredentials {
  username: string
  password: string
}

export interface TokenPair {
  access: string
  refresh: string
}

export interface AccessTokenDecoded {
  exp: number
  iat: number
  jti: string
  token_type: 'access' | 'refresh'
  user_id: number
}
