import { computed } from 'vue'
import { useAuthStore } from '../store'

export function useAuthData() {
  const authStore = useAuthStore()

  const isAuthorized = computed(() => authStore.isAuthorized)

  const { signIn, checkAuthState } = authStore

  return {
    isAuthorized,
    signIn,
    checkAuthState,
  }
}
