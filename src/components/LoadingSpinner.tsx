// for testing purposes only
import { ActivityIndicator, View } from 'react-native'
import { Text } from './Text'

interface LoadingSpinnerProps {
  message?: string
}

export function LoadingSpinner({
  message = 'Loading...',
}: LoadingSpinnerProps) {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <ActivityIndicator size='large' color='#ef4444' />
      <Text className='mt-4 text-red-500'>{message}</Text>
    </View>
  )
}
