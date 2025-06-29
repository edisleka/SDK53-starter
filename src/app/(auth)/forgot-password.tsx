import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Text } from '@/components/Text'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'expo-router'
import { useForm } from 'react-hook-form'
import { KeyboardAvoidingView, View } from 'react-native'
import { z } from 'zod'

const forgotPasswordSchema = z.object({
  email: z.string({ message: 'Email is required' }).email({
    message: 'Please enter a valid email address',
  }),
})

type ForgotPasswordFields = z.infer<typeof forgotPasswordSchema>

export default function ForgotPasswordScreen() {
  const { control, handleSubmit } = useForm<ForgotPasswordFields>({
    resolver: zodResolver(forgotPasswordSchema),
  })

  const onForgotPassword = (data: ForgotPasswordFields) => {
    console.log(data.email)
  }

  return (
    <KeyboardAvoidingView className='flex-1 bg-white' behavior='padding'>
      <View className='flex-1 justify-center'>
        <View className=''>
          <Text bold size='hd' className='text-center'>
            Forgot Password
          </Text>
          <Text className='text-center text-gray-600'>
            Enter your email address to receive a password reset link
          </Text>
        </View>

        <View className='bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4'>
          <Text className='text-blue-600 text-sm'>
            We&apos;ll send you a link to reset your password
          </Text>
        </View>

        <Input<ForgotPasswordFields>
          label='Email Address'
          placeholder='Enter your email'
          keyboardType='email-address'
          autoCapitalize='none'
          autoComplete='email'
          control={control}
          name='email'
        />

        <Button
          title='Send Reset Link'
          onPress={handleSubmit(onForgotPassword)}
        />

        <View className=''>
          <Text className='text-center text-gray-500 text-sm'>
            Remember your password?{' '}
            <Link href='/sign-in' className='text-blue-600 font-medium'>
              Sign In
            </Link>
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
