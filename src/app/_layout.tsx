import { LoadingSpinner } from '@/components/LoadingSpinner'
import { useAuthInitializer } from '@/hooks/useAuthInitializer'
import { useFonts } from '@/hooks/useFonts'
import { useAuthStore } from '@/store/authStore'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import '../globals.css'

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync()

// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
})

export default function RootLayout() {
  const fontsLoaded = useFonts()

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  // Initialize auth state and listen for changes
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
