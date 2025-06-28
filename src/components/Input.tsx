import { Text } from '@/components/Text'
import { cn } from '@/utils/cn'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { TextInput, TextInputProps, View } from 'react-native'

interface InputProps<T extends FieldValues> extends TextInputProps {
  label?: string
  className?: string
  control: Control<T>
  name: Path<T>
}

export function Input<T extends FieldValues>({
  label,
  className,
  control,
  name,
  ...rest
}: InputProps<T>) {
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
