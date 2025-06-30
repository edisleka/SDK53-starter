import { useAuthStore } from '@/store/authStore'
import { Stack } from 'expo-router'

export default function AuthLayout() {
  const { isAuthenticated, hasCompletedOnboarding, shouldCreateAccount } =
    useAuthStore()

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={!isAuthenticated && hasCompletedOnboarding}>
        <Stack.Screen name='sign-in' options={{ headerShown: false }} />
        <Stack.Screen name='forgot-password' options={{ headerShown: false }} />
        <Stack.Screen name='create-account' />
      </Stack.Protected>
      <Stack.Protected guard={!shouldCreateAccount}>
        <Stack.Screen name='verify-account' />
      </Stack.Protected>
    </Stack>
  )
}
