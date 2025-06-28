import { Text } from '@/components/Text'
import { cn } from '@/utils/cn'
import { Controller } from 'react-hook-form'
import { TextInput, TextInputProps, View } from 'react-native'

interface InputProps extends TextInputProps {
  label?: string
  className?: string
  control?: any
  name: string
}

export function Input({
  label,
  className,
  control,
  name,
  ...rest
}: InputProps) {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        render={({
          field: { value, onBlur, onChange },
          fieldState: { error },
        }) => (
          <>
            <Text color='label' size='sm'>
              {label}
            </Text>
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
            <Text color='error' size='xs'>
              {error?.message}
            </Text>
          </>
        )}
      />
    </View>
  )
}
