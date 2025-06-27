import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Text } from '@/components/Text'
import { Link, Redirect } from 'expo-router'
import { KeyboardAvoidingView, View } from 'react-native'

const shouldCreateAccount = false

export default function VerifyAccountScreen() {
  if (shouldCreateAccount) {
    return <Redirect href='/create-account' />
  }

  return (
    <KeyboardAvoidingView className='flex-1 bg-white' behavior='padding'>
      <View className='flex-1 justify-center'>
        <View className=''>
          <Text bold size='hd' className='text-center'>
            Verify Your Account
          </Text>
          <Text className='text-center text-gray-600'>
            Enter the verification code sent to your email
          </Text>
        </View>

        <View className='bg-red-50 border border-red-200 rounded-lg p-3 mb-4'>
          <Text className='text-red-600 text-sm'>
            Invalid verification code
          </Text>
        </View>

        <Input
          label='Verification Code'
          placeholder='Enter 6-digit code'
          error='Please enter a valid 6-digit code'
          keyboardType='number-pad'
          maxLength={6}
        />

        <Button title='Verify Account' />

        <View className=''>
          <Text className='text-center text-gray-500 text-sm'>
            Didn&apos;t receive the code?{' '}
            <Text className='text-blue-600 font-medium'>Resend Code</Text>
          </Text>
        </View>

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
