import { Text } from '@/components/Text'
import { Redirect } from 'expo-router'
import { View } from 'react-native'

const shouldCreateAccount = false

export default function CreateAccountScreen() {
  if (!shouldCreateAccount) {
    return <Redirect href='/sign-in' />
  }

  return (
    <View className='flex-1 justify-center p-4'>
      <Text center size='hd'>
        Create Account Screen
      </Text>
    </View>
  )
}
