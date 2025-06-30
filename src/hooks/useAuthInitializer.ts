import { supabase } from '@/lib/supabase'
import { useAuthStore } from '@/store/authStore'
import { useEffect } from 'react'

// Hook to initialize auth state and listen for changes
export const useAuthInitializer = () => {
  const { initializeAuth } = useAuthStore()

  useEffect(() => {
    initializeAuth()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        useAuthStore.setState({
          user: session.user,
          session,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        })
      } else {
        useAuthStore.setState({
          user: null,
          session: null,
          isAuthenticated: false,
          isLoading: false,
        })
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [initializeAuth])
}
