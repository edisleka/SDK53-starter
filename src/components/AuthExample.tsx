import { useAuthStore } from '@/store/authStore'
import { View } from 'react-native'
import { Button } from './Button'
import { Text } from './Text'

export function AuthExample() {
  const {
    user,
    profile,
    isAuthenticated,
    isLoading,
    error,
    logOut,
    clearError,
  } = useAuthStore()

  if (isLoading) {
    return (
      <View className='flex-1 items-center justify-center'>
        <Text>Loading...</Text>
      </View>
    )
  }

  if (!isAuthenticated) {
    return (
      <View className='flex-1 items-center justify-center p-4'>
        <Text size='lg' className='mb-4'>
          Not authenticated
        </Text>
        <Text className='text-gray-600 text-center'>
          Please sign in to access your account
        </Text>
      </View>
    )
  }

  return (
    <View className='flex-1 p-4'>
      <Text size='hd' bold className='mb-6'>
        Welcome!
      </Text>

      {error && (
        <View className='bg-red-50 border border-red-200 rounded-lg p-3 mb-4'>
          <Text className='text-red-600 text-sm'>{error}</Text>
          <Button title='Clear Error' onPress={clearError} />
        </View>
      )}

      <View className='bg-gray-50 rounded-lg p-4 mb-4'>
        <Text size='lg' bold className='mb-2'>
          User Information
        </Text>
        <Text>Email: {user?.email}</Text>
        <Text>ID: {user?.id}</Text>
        <Text>Created: {user?.created_at}</Text>
      </View>

      {profile && (
        <View className='bg-blue-50 rounded-lg p-4 mb-4'>
          <Text size='lg' bold className='mb-2'>
            Profile Information
          </Text>
          <Text>Name: {profile.full_name || 'Not set'}</Text>
          <Text>Avatar: {profile.avatar_url || 'Not set'}</Text>
          <Text>Updated: {profile.updated_at}</Text>
        </View>
      )}

      <Button title='Sign Out' onPress={logOut} />
    </View>
  )
}
