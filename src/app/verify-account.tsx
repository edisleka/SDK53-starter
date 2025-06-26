import { Text } from '@/components/Text'
import { Redirect } from 'expo-router'
import { View } from 'react-native'

const shouldCreateAccount = false

export default function VerifyAccountScreen() {
  if (shouldCreateAccount) {
    return <Redirect href='/create-account' />
  }

  return (
    <View className='flex-1 justify-center p-4'>
      <Text center size='hd'>
        Verify Account Screen
      </Text>
    </View>
  )
}
