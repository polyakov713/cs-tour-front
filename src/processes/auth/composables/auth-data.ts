import { computed } from 'vue'
import { useAuthStore } from '../store'

export function useAuthData() {
  const authStore = useAuthStore()

  const isAuthorized = computed(() => authStore.isAuthorized)
  const accessTokenIsExpired = computed(() => authStore.accessTokenIsExpired)

  const { signIn } = authStore

  return {
    isAuthorized,
    accessTokenIsExpired,
    signIn,
  }
}
