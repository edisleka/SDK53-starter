import { Stack } from 'expo-router'
import '../globals.css'

const isLoggedIn = false
const shouldCreateAccount = true
const hasCompletedOnboarding = true
const shouldVerifyAccount = true

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={isLoggedIn && !shouldVerifyAccount}>
        <Stack.Screen name='(app)' options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={!isLoggedIn && hasCompletedOnboarding}>
        <Stack.Screen name='sign-in' />
        <Stack.Protected guard={shouldCreateAccount}>
          <Stack.Screen name='create-account' />
          <Stack.Protected guard={shouldVerifyAccount}>
            <Stack.Screen name='verify-account' />
          </Stack.Protected>
        </Stack.Protected>
      </Stack.Protected>
      <Stack.Protected guard={!hasCompletedOnboarding}>
        <Stack.Screen name='onboarding' options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  )
}
