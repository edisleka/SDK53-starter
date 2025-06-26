import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { KeyboardAvoidingView, TextInput, View } from 'react-native'

export default function SignInScreen() {
  return (
    <KeyboardAvoidingView className='flex-1 bg-white' behavior='padding'>
      {/* Header Section */}
      <View className='flex-1 justify-center'>
        <View className=''>
          <Text bold size='hd' className='text-center'>
            Welcome Back
          </Text>
          <Text className='text-center text-gray-600'>
            Sign in to your account to continue
          </Text>
        </View>

        {/* General Error Message */}
        <View className='bg-red-50 border border-red-200 rounded-lg p-3 mb-4 opacity-1'>
          <Text className='text-red-600 text-sm'>
            Invalid username or password
          </Text>
        </View>

        {/* Form Section */}
        <View className=''>
          <View>
            <Text className='text-sm font-medium text-gray-700'>Username</Text>
            <TextInput
              placeholder='Enter your username'
              className='border border-gray-300 rounded-lg bg-gray-50'
              placeholderTextColor='#9CA3AF'
            />
            {/* Username Error */}
            <Text className='text-red-500 text-xs mt-1'>
              Username is required
            </Text>
          </View>

          <View>
            <Text className='text-sm font-medium text-gray-700'>Password</Text>
            <TextInput
              placeholder='Enter your password'
              secureTextEntry
              className='border border-red-300 rounded-lg bg-gray-50'
              placeholderTextColor='#9CA3AF'
            />
            {/* Password Error */}
            <Text className='text-red-500 text-xs mt-1'>
              Password must be at least 6 characters
            </Text>
          </View>
        </View>

        {/* Sign In Button */}
        <Button title='Sign In' />

        {/* Divider */}
        <View className='flex-row items-center'>
          <View className='flex-1 h-px bg-gray-300' />
          <Text className='mx-4 text-gray-500'>or continue with</Text>
          <View className='flex-1 h-px bg-gray-300' />
        </View>

        {/* Social Login Buttons */}
        <View className='gap-2'>
          <Button title='Google' />
          <Button title='Facebook' />
        </View>

        {/* Footer */}
        <View className=''>
          <Text className='text-right text-gray-500 text-sm'>
            Don&apos;t have an account?{' '}
            <Text className='text-blue-600 font-medium'>Sign up</Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
