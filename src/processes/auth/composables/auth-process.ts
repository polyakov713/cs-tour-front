import { watch } from 'vue'

import { useAuthData } from './auth-data'

export function useAuthProcess() {
  const { isAuthorized, getMe } = useAuthData()

  watch(isAuthorized, async (value) => {
    if (value) {
      try {
        await getMe()
      } catch (err) {
        console.error('Getting user info', err)
      }
    }
  }, { immediate: true })
}
