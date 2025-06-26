import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { Link } from 'expo-router'
import { KeyboardAvoidingView, TextInput, View } from 'react-native'

export default function CreateAccountScreen() {
  return (
    <KeyboardAvoidingView className='flex-1 bg-white' behavior='height'>
      {/* Header Section */}
      <View className='flex-1 justify-center'>
        <View className=''>
          <Text bold size='hd' className='text-center'>
            Create Account
          </Text>
          <Text className='text-center text-gray-600'>
            Sign up to get started with your account
          </Text>
        </View>

        {/* General Error Message */}
        <View className='bg-red-50 border border-red-200 rounded-lg p-3 mb-4 opacity-1'>
          <Text className='text-red-600 text-sm'>
            Please fix the errors below to continue
          </Text>
        </View>

        {/* Form Section */}
        <View className=''>
          <View>
            <Text className='text-sm font-medium text-gray-700'>Username</Text>
            <TextInput
              placeholder='Enter your username'
              className='border border-red-300 rounded-lg bg-gray-50'
              placeholderTextColor='#9CA3AF'
              // autoFocus
              autoCapitalize='none'
              autoComplete='username'
            />
            {/* Username Error */}
            <Text className='text-red-500 text-xs mt-1'>
              Username is required
            </Text>
          </View>

          <View>
            <Text className='text-sm font-medium text-gray-700'>Email</Text>
            <TextInput
              placeholder='Enter your email'
              className='border border-red-300 rounded-lg bg-gray-50'
              placeholderTextColor='#9CA3AF'
              autoCapitalize='none'
              keyboardType='email-address'
              autoComplete='email'
            />
            {/* Email Error */}
            <Text className='text-red-500 text-xs mt-1'>
              Please enter a valid email address
            </Text>
          </View>

          <View>
            <Text className='text-sm font-medium text-gray-700'>Password</Text>
            <TextInput
              placeholder='Enter your password'
              secureTextEntry
              className='border border-red-300 rounded-lg bg-gray-50'
              placeholderTextColor='#9CA3AF'
              autoCapitalize='none'
            />
            {/* Password Error */}
            <Text className='text-red-500 text-xs mt-1'>
              Password must be at least 8 characters
            </Text>
          </View>

          <View>
            <Text className='text-sm font-medium text-gray-700'>
              Confirm Password
            </Text>
            <TextInput
              placeholder='Confirm your password'
              secureTextEntry
              className='border border-red-300 rounded-lg bg-gray-50'
              placeholderTextColor='#9CA3AF'
              autoCapitalize='none'
            />
            {/* Confirm Password Error */}
            <Text className='text-red-500 text-xs mt-1'>
              Passwords do not match
            </Text>
          </View>
        </View>

        {/* Create Account Button */}
        <Button title='Create Account' />

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
            Already have an account?{' '}
            <Link href='/sign-in' className='text-blue-600 font-medium'>
              Sign in
            </Link>
          </Text>
        </View>
        <View className=''>
          <Text className='text-right text-gray-500 text-sm'>
            Verify Your Account{' '}
            <Link href='/verify-account' className='text-blue-600 font-medium'>
              Verify
            </Link>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
