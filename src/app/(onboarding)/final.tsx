import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { View } from 'react-native'

export default function OnboardingFinalScreen() {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text>Onboarding Final Screen</Text>
      <Button title='Complete Onboarding' />
    </View>
  )
}
