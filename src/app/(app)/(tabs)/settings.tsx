import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { useAuthStore } from '@/store/authStore'
import { View } from 'react-native'

export default function SettingsScreen() {
  const { logOut } = useAuthStore()
  return (
    <View className='flex-1 items-center justify-center'>
      <Text>Settings Screen</Text>
      <Button title='Logout' onPress={logOut} />
    </View>
  )
}
