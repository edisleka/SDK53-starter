import { supabase } from '@/lib/supabase'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Session, User } from '@supabase/supabase-js'
import { useEffect } from 'react'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type UserState = {
  // Authentication state
  user: User | null
  session: Session | null
  isAuthenticated: boolean
  isLoading: boolean

  // App state
  shouldCreateAccount: boolean
  hasCompletedOnboarding: boolean
  isVip: boolean
  isVerified: boolean
  error: string | null

  // Actions
  logIn: (email: string, password: string) => Promise<void>
  logInAsVip: () => void
  logOut: () => Promise<void>
  completeOnboarding: () => void
  resetOnboarding: () => void
  verifyAccount: () => void
  clearError: () => void
  initializeAuth: () => Promise<void>
}

export const useAuthStore = create(
  persist<UserState>(
    (set) => ({
      // Initial state
      user: null,
      session: null,
      isAuthenticated: false,
      isLoading: true,
      shouldCreateAccount: true,
      hasCompletedOnboarding: false,
      isVip: false,
      isVerified: false,
      error: null,

      // Initialize authentication state
      initializeAuth: async () => {
        try {
          // Get initial session
          const {
            data: { session },
          } = await supabase.auth.getSession()

          if (session) {
            set({
              user: session.user,
              session,
              isAuthenticated: true,
              isLoading: false,
              shouldCreateAccount: false,
            })
          } else {
            set({
              user: null,
              session: null,
              isAuthenticated: false,
              isLoading: false,
            })
          }
        } catch (error) {
          set({
            error:
              error instanceof Error
                ? error.message
                : 'Failed to initialize auth',
            isLoading: false,
          })
        }
      },

      // Login with email and password
      logIn: async (email: string, password: string) => {
        set({ isLoading: true, error: null })

        try {
          const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
          })

          if (error) {
            set({
              error: error.message,
              isLoading: false,
            })
            return
          }

          if (data.user && data.session) {
            set({
              user: data.user,
              session: data.session,
              isAuthenticated: true,
              isLoading: false,
              error: null,
              hasCompletedOnboarding: true,
              shouldCreateAccount: false,
            })
          }
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'Login failed',
            isLoading: false,
          })
        }
      },

      // VIP login (for testing)
      logInAsVip: () => {
        set({
          isVip: true,
          isAuthenticated: true,
          isLoading: false,
          shouldCreateAccount: false,
        })
      },

      // Logout
      logOut: async () => {
        set({ isLoading: true })

        try {
          const { error } = await supabase.auth.signOut()

          if (error) {
            set({
              error: error.message,
              isLoading: false,
            })
            return
          }

          set({
            user: null,
            session: null,
            isAuthenticated: false,
            isVip: false,
            isLoading: false,
            error: null,
            hasCompletedOnboarding: true,
          })
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'Logout failed',
            isLoading: false,
          })
        }
      },

      // Onboarding actions
      completeOnboarding: () => {
        set({ hasCompletedOnboarding: true, shouldCreateAccount: true })
      },

      resetOnboarding: () => {
        set({ hasCompletedOnboarding: false })
      },

      // Verification actions
      verifyAccount: () => {
        set({ isVerified: true, shouldCreateAccount: true })
      },

      // Error handling
      clearError: () => {
        set({ error: null })
      },
    }),
    {
      name: 'auth-store',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)

// Hook to initialize auth state and listen for changes
export const useAuthInitializer = () => {
  const { initializeAuth } = useAuthStore()

  useEffect(() => {
    // Initialize auth state
    initializeAuth()

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
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
