import { cn } from '@/utils/cn'
import { Text, TextInput, TextInputProps, View } from 'react-native'

interface InputProps extends TextInputProps {
  label?: string
  className?: string
  error?: string
}

export function Input({ label, className, error, ...rest }: InputProps) {
  return (
    <View>
      {label && (
        <Text className='text-sm font-medium text-gray-700'>{label}</Text>
      )}
      <TextInput
        className={cn(
          'border rounded-lg bg-gray-50',
          error ? 'border-red-300' : 'border-gray-300',
          className
        )}
        placeholderTextColor='#9CA3AF'
        {...rest}
      />
      {error && <Text className='text-red-500 text-xs mt-1'>{error}</Text>}
    </View>
  )
}
