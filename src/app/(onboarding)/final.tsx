import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { useAuthStore } from '@/store/authStore'
import { View } from 'react-native'

export default function OnboardingFinalScreen() {
  const { completeOnboarding } = useAuthStore()
  return (
    <View className='flex-1  justify-center p-4'>
      <Text center size='hd'>
        Onboarding Screen 2
      </Text>
      <Button title='Complete Onboarding' onPress={completeOnboarding} />
    </View>
  )
}
