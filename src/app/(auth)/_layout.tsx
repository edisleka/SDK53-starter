import { Stack } from 'expo-router'

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name='sign-in' options={{ headerShown: false }} />
      <Stack.Screen name='create-account' options={{ headerShown: false }} />
      <Stack.Screen name='verify-account' options={{ headerShown: false }} />
    </Stack>
  )
}
