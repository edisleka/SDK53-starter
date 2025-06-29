import { Stack } from 'expo-router'
import '../globals.css'

const isLoggedIn = false
// const shouldCreateAccount = false
const hasCompletedOnboarding = true
// const shouldVerifyAccount = false

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name='(app)' options={{ headerShown: false }} />
      </Stack.Protected>

      <Stack.Protected guard={!isLoggedIn && hasCompletedOnboarding}>
        <Stack.Screen name='(auth)' />
      </Stack.Protected>

      <Stack.Protected guard={!hasCompletedOnboarding}>
        <Stack.Screen name='onboarding' options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  )
}
