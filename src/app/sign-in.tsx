import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Text } from '@/components/Text'
import { Link } from 'expo-router'
import { KeyboardAvoidingView, View } from 'react-native'

export default function SignInScreen() {
  return (
    <KeyboardAvoidingView className='flex-1 bg-white' behavior='padding'>
      <View className='flex-1 justify-center'>
        <View className=''>
          <Text bold size='hd' className='text-center'>
            Welcome Back
          </Text>
          <Text className='text-center text-gray-600'>
            Sign in to your account to continue
          </Text>
        </View>

        <View className='bg-red-50 border border-red-200 rounded-lg p-3 mb-4 opacity-1'>
          <Text className='text-red-600 text-sm'>
            Invalid username or password
          </Text>
        </View>
        <View className=''>
          <Input
            label='Username'
            placeholder='Enter your username'
            error='Username is required'
            placeholderTextColor='#9CA3AF'
            // autoFocus
            autoCapitalize='none'
            keyboardType='email-address'
            autoComplete='email'
            className='border-red-300'
          />
          <Input
            label='Password'
            placeholder='Enter your password'
            secureTextEntry
            placeholderTextColor='#9CA3AF'
            autoCapitalize='none'
          />
        </View>
        <Button title='Sign In' />
        <View className='flex-row items-center'>
          <View className='flex-1 h-px bg-gray-300' />
          <Text className='mx-4 text-gray-500'>or continue with</Text>
          <View className='flex-1 h-px bg-gray-300' />
        </View>
        <View className='gap-2'>
          <Button title='Google' />
          <Button title='Facebook' />
        </View>
        <View className=''>
          <Text className='text-right text-gray-500 text-sm'>
            Don&apos;t have an account?{' '}
            <Link href='/create-account' className='text-blue-600 font-medium'>
              Sign up
            </Link>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
