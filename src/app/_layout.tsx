import { LoadingSpinner } from '@/components/LoadingSpinner'
import { useAuthInitializer, useAuthStore } from '@/store/authStore'
import { Stack } from 'expo-router'
import '../globals.css'

export default function RootLayout() {
  // Initialize auth state and listen for changes in auth store
  useAuthInitializer()

  // Get auth state from store
  const { isAuthenticated, hasCompletedOnboarding, isLoading } = useAuthStore()

  // Show loading screen while initializing auth
  if (isLoading) {
    return <LoadingSpinner message='Loading in RootLayout...' />
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={!isAuthenticated && !hasCompletedOnboarding}>
        <Stack.Screen name='(onboarding)' />
      </Stack.Protected>

      <Stack.Protected guard={!isAuthenticated && hasCompletedOnboarding}>
        <Stack.Screen name='(auth)' />
      </Stack.Protected>

      <Stack.Protected guard={isAuthenticated}>
        <Stack.Screen name='(app)' />
      </Stack.Protected>
    </Stack>
  )
}
