import { Text } from '@/components/Text'
import { useAuthStore } from '@/store/authStore'
import { View } from 'react-native'

export default function Index() {
  const { user, session } = useAuthStore()

  // console.log('User', JSON.stringify(user, null, 2))
  // console.log('Session', JSON.stringify(session, null, 2))
  return (
    <View className='flex-1 justify-center items-start p-4 bg-light-background dark:bg-dark-background'>
      <Text center size='hd'>
        User: {user?.email}
      </Text>
      <Text center size='md'>
        Session: {session?.user.id}
      </Text>
    </View>
  )
}
