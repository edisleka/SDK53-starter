import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { Link } from 'expo-router'
import { View } from 'react-native'

export default function OnboardingScreen() {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text>Onboarding Screen 1</Text>
      <Link href='/onboarding/final'>
        <Button title='Go to Screen 2' />
      </Link>
    </View>
  )
}
