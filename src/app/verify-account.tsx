import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { Link, Redirect } from 'expo-router'
import { KeyboardAvoidingView, TextInput, View } from 'react-native'

const shouldCreateAccount = false

export default function VerifyAccountScreen() {
  if (shouldCreateAccount) {
    return <Redirect href='/create-account' />
  }

  return (
    <KeyboardAvoidingView className='flex-1 bg-white' behavior='padding'>
      {/* Header Section */}
      <View className='flex-1 justify-center'>
        <View className=''>
          <Text bold size='hd' className='text-center'>
            Verify Your Account
          </Text>
          <Text className='text-center text-gray-600'>
            Enter the verification code sent to your email
          </Text>
        </View>

        {/* General Error Message */}
        <View className='bg-red-50 border border-red-200 rounded-lg p-3 mb-4'>
          <Text className='text-red-600 text-sm'>
            Invalid verification code
          </Text>
        </View>

        {/* Form Section */}
        <View className=''>
          <View>
            <Text className='text-sm font-medium text-gray-700'>
              Verification Code
            </Text>
            <TextInput
              placeholder='Enter 6-digit code'
              className='border border-red-300 rounded-lg bg-gray-50'
              placeholderTextColor='#9CA3AF'
              // autoFocus
              autoCapitalize='none'
              keyboardType='number-pad'
              maxLength={6}
            />
            {/* Code Error */}
            <Text className='text-red-500 text-xs mt-1'>
              Please enter a valid 6-digit code
            </Text>
          </View>
        </View>

        {/* Verify Button */}
        <Button title='Verify Account' />

        {/* Resend Code Section */}
        <View className=''>
          <Text className='text-center text-gray-500 text-sm'>
            Didn&apos;t receive the code?{' '}
            <Text className='text-blue-600 font-medium'>Resend Code</Text>
          </Text>
        </View>

        {/* Footer */}
        <View className=''>
          <Text className='text-center text-gray-500 text-sm'>
            Need help?{' '}
            <Link href='/sign-in' className='text-blue-600 font-medium'>
              Contact Support
            </Link>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
