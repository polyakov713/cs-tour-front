// import { emitter } from '@/processes/event-bus'
import { useAuthData } from './auth-data'

export function useAuthProcess() {
  const { checkAuthState } = useAuthData()

  checkAuthState()

  // emitter.on('error401', () => {
  //   console.warn('Error 401. Need to check auth state!')
  //   checkAuthState()
  // })
}
