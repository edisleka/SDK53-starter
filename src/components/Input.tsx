import { cn } from '@/utils/cn'
import { Controller } from 'react-hook-form'
import { TextInput, TextInputProps, View } from 'react-native'
import { Text } from './Text'

interface InputProps extends TextInputProps {
  label?: string
  className?: string
  error?: string
  control?: any
  name?: string
}

export function Input({
  label,
  className,
  error,
  control,
  name,
  ...rest
}: InputProps) {
  return (
    <View>
      {label && (
        <Text color='label' size='sm'>
          {label}
        </Text>
      )}

      <Controller
        control={control}
        name={name || ''}
        render={({ field: { value, onBlur, onChange } }) => (
          <TextInput
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            className={cn(
              'border rounded-lg bg-gray-50',
              error ? 'border-red-300' : 'border-gray-300',
              className
            )}
            placeholderTextColor='#9CA3AF'
            {...rest}
          />
        )}
      />

      {error && (
        <Text color='error' size='xs'>
          {error}
        </Text>
      )}
    </View>
  )
}
