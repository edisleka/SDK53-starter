import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Text } from '@/components/Text'
import { Link } from 'expo-router'
import { KeyboardAvoidingView, View } from 'react-native'

export default function CreateAccountScreen() {
  return (
    <KeyboardAvoidingView className='flex-1 bg-white' behavior='padding'>
      <View className='flex-1 justify-center'>
        <View className=''>
          <Text bold size='hd' className='text-center'>
            Create Account
          </Text>
          <Text className='text-center text-gray-600'>
            Sign up to get started with your account
          </Text>
        </View>
        <View className='bg-red-50 border border-red-200 rounded-lg p-3 mb-4 opacity-1'>
          <Text className='text-red-600 text-sm'>
            Please fix the errors below to continue
          </Text>
        </View>
        <View className=''>
          <Input
            label='Username'
            placeholder='Enter your username'
            error='Username is required'
            // autoFocus
            autoCapitalize='none'
            autoComplete='username'
            className='border-red-300'
          />
          <Input
            label='Email'
            placeholder='Enter your email'
            error='Please enter a valid email address'
            autoCapitalize='none'
            keyboardType='email-address'
            autoComplete='email'
          />
          <Input
            label='Password'
            placeholder='Enter your password'
            secureTextEntry
            autoCapitalize='none'
            error='Password is required'
          />
          <Input
            label='Confirm Password'
            placeholder='Confirm your password'
            secureTextEntry
            autoCapitalize='none'
            error='Passwords do not match'
          />
        </View>
        <Button title='Create Account' />
        <View className='flex-row items-center'>
          <View className='flex-1 h-px bg-gray-300' />
          <Text className='mx-4 text-gray-500'>or continue with</Text>
          <View className='flex-1 h-px bg-gray-300' />
        </View>

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
