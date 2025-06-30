import { supabase } from '@/lib/supabase'
import { deleteItemAsync, getItem, setItem } from 'expo-secure-store'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type UserState = {
  isLoggedIn: boolean
  shouldCreateAccount: boolean
  hasCompletedOnboarding: boolean
  isVip: boolean
  isVerified: boolean
  error: string | null
  logIn: (email: string, password: string) => Promise<void>
  logInAsVip: () => void
  logOut: () => void
  completeOnboarding: () => void
  resetOnboarding: () => void
  verifyAccount: () => void
}

export const useAuthStore = create(
  persist<UserState>(
    (set) => ({
      isLoggedIn: false,
      shouldCreateAccount: false,
      hasCompletedOnboarding: false,
      isVip: false,
      isVerified: false,
      error: null,
      logIn: async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (error) {
          set((state) => {
            return {
              ...state,
              error: error.message,
            }
          })
          return
        }

        if (data.user && data.session) {
          set((state) => {
            return {
              ...state,
              isLoggedIn: true,
            }
          })
        }
      },
      logInAsVip: () => {
        set((state) => {
          return {
            ...state,
            isVip: true,
            isLoggedIn: true,
          }
        })
      },
      logOut: () => {
        set((state) => {
          return {
            ...state,
            isVip: false,
            isLoggedIn: false,
          }
        })
      },
      completeOnboarding: () => {
        set((state) => {
          return {
            ...state,
            hasCompletedOnboarding: true,
          }
        })
      },
      resetOnboarding: () => {
        set((state) => {
          return {
            ...state,
            hasCompletedOnboarding: false,
          }
        })
      },
      verifyAccount: () => {
        set((state) => {
          return {
            ...state,
            isVerified: true,
          }
        })
      },
    }),
    {
      name: 'auth-store',
      storage: createJSONStorage(() => ({
        setItem,
        getItem,
        removeItem: deleteItemAsync,
      })),
    }
  )
)
