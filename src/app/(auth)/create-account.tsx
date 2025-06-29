import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Text } from '@/components/Text'
import { supabase } from '@/lib/supabase'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'expo-router'
import { useForm } from 'react-hook-form'
import { Alert, KeyboardAvoidingView, View } from 'react-native'
import { z } from 'zod'

const signUpSchema = z.object({
  email: z.string({ message: 'Email is required' }).email({
    message: 'Invalid email address',
  }),
  password: z.string({ message: 'Password is required' }).min(8, {
    message: 'Password must be at least 8 characters',
  }),
  // confirmPassword: z
  //   .string({ message: 'Confirm password is required' })
  //   .min(8, {
  //     message: 'Confirm password must be at least 8 characters',
  //   }),
})
// .refine((data) => data.password === data.confirmPassword, {
//   message: 'Passwords do not match',
//   // path: ['confirmPassword'],
// })

type SignUpFields = z.infer<typeof signUpSchema>

export default function CreateAccountScreen() {
  const { control, handleSubmit } = useForm<SignUpFields>({
    resolver: zodResolver(signUpSchema),
  })

  const onSignUp = async (data: SignUpFields) => {
    try {
      const { email, password } = data
      const { error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) {
        Alert.alert('Sign Up Error', error.message)
        return
      }
    } catch (error) {
      Alert.alert(
        error instanceof Error ? error.message : 'An unknown error occurred'
      )
    }
  }

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
          <Input<SignUpFields>
            label='Email'
            placeholder='Enter your email'
            autoCapitalize='none'
            keyboardType='email-address'
            autoComplete='email'
            control={control}
            name='email'
            // autoFocus
          />
          <Input<SignUpFields>
            label='Password'
            placeholder='Enter your password'
            secureTextEntry
            autoCapitalize='none'
            control={control}
            name='password'
          />
          {/* <Input<SignUpFields>
            label='Confirm Password'
            placeholder='Confirm your password'
            secureTextEntry
            autoCapitalize='none'
            control={control}
            name='confirmPassword'
          /> */}
        </View>

        <Button title='Create Account' onPress={handleSubmit(onSignUp)} />

        {/* <View className='flex-row items-center'>
          <View className='flex-1 h-px bg-gray-300' />
          <Text className='mx-4 text-gray-500'>or continue with</Text>
          <View className='flex-1 h-px bg-gray-300' />
        </View> */}

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
