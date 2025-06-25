import { Stack } from 'expo-router'
import '../globals.css'

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name='(app)' options={{ headerShown: false }} />
      <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      <Stack.Screen name='(onboarding)' options={{ headerShown: false }} />
    </Stack>
  )
}
