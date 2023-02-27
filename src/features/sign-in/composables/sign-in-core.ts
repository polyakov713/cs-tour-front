import { tokenApi } from '@/shared/api/token'
import type { TokenPair } from '@/shared/api/token'
import { useAuthData } from '@/processes/auth'

import type { SignInFormData } from '../types'

export function useSignInCore() {
  const { signIn } = useAuthData()

  async function submitFormHandler(formData: SignInFormData) {
    return signIn(formData)
  }

  return {
    submitFormHandler,
  }
}
