import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Text } from '@/components/Text'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'expo-router'
import { useForm } from 'react-hook-form'
import { KeyboardAvoidingView, View } from 'react-native'
import { z } from 'zod'

const verifyAccountSchema = z.object({
  code: z.string({ message: 'Code is required' }).min(6, {
    message: 'Code must be 6 digits',
  }),
})

type VerifyAccountFields = z.infer<typeof verifyAccountSchema>

export default function VerifyAccountScreen() {
  const { control, handleSubmit } = useForm<VerifyAccountFields>({
    resolver: zodResolver(verifyAccountSchema),
  })

  const onVerifyAccount = (data: VerifyAccountFields) => {
    console.log(data.code)
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

        <Input<VerifyAccountFields>
          label='Verification Code'
          placeholder='Enter 6-digit code'
          keyboardType='number-pad'
          maxLength={6}
          control={control}
          name='code'
        />

        <Button
          title='Verify Account'
          onPress={handleSubmit(onVerifyAccount)}
        />

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
