import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Text } from '@/components/Text'
import { Link } from 'expo-router'
import { useForm } from 'react-hook-form'
import { KeyboardAvoidingView, View } from 'react-native'

export default function SignInScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({})

  console.log(errors)

  const onSignIn = (data: any) => {
    console.log(data)
  }

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
            label='Email'
            placeholder='Enter your email'
            control={control}
            name='email'
            // autoFocus
            autoCapitalize='none'
            keyboardType='email-address'
            autoComplete='email'
          />
          <Input
            label='Password'
            placeholder='Enter your password'
            secureTextEntry
            autoCapitalize='none'
            control={control}
            name='password'
          />
        </View>
        <Button title='Sign In' onPress={handleSubmit(onSignIn)} />
        <View className='flex-row items-center'>
          <View className='flex-1 h-px bg-gray-300' />
          <Text className='mx-4 text-gray-500'>or continue with</Text>
          <View className='flex-1 h-px bg-gray-300' />
        </View>
        <View className=''>
          <Button
            title='Google'
            onPress={() => {
              console.log('sign in')
            }}
          />
          <Button
            title='Facebook'
            onPress={() => {
              console.log('sign in with facebook')
            }}
          />
          <Button
            title='Apple'
            onPress={() => {
              console.log('sign in with apple')
            }}
          />
        </View>
        <View className=''>
          <Text className='text-right' color='secondary' size='sm'>
            Don&apos;t have an account?{' '}
            <Link href='/create-account' className='text-blue-600 font-medium'>
              Sign up
            </Link>
          </Text>
        </View>
        <View className=''>
          <Text className='text-right' color='secondary' size='sm'>
            Forgot password?{' '}
            <Link href='/forgot-password' className='text-blue-600 font-medium'>
              Reset password
            </Link>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
