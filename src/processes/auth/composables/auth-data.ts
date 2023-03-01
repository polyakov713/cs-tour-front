import { computed } from 'vue'
import { useAuthStore } from '../store'

export function useAuthData() {
  const authStore = useAuthStore()

  const isAuthorized = computed(() => authStore.isAuthorized)
  const username = computed(() => authStore.username)

  const { signIn, getMe, checkAuthState } = authStore

  return {
    isAuthorized,
    username,
    signIn,
    getMe,
    checkAuthState,
  }
}
