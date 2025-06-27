import { cn } from '@/utils/cn'
import { Pressable, PressableProps, Text } from 'react-native'

type ButtonTheme = 'primary' | 'secondary' | 'tertiary'

interface ButtonProps extends PressableProps {
  title: string
  onPress?: () => void
  theme?: ButtonTheme
  disabled?: boolean
}

export function Button({
  title,
  theme = 'primary',
  disabled = false,
  ...rest
}: ButtonProps) {
  return (
    <Pressable
      className={cn(
        'flex-row items-center justify-center rounded-md px-5 py-3 border',
        theme === 'primary' && 'bg-[#007AFF] border-[#007AFF]',
        theme === 'secondary' && 'bg-white border-gray-300',
        theme === 'tertiary' && 'bg-transparent border-transparent',
        disabled && 'opacity-50'
      )}
      disabled={disabled}
      {...rest}
    >
      <Text
        className={cn(
          'font-semibold text-lg tracking-wider',
          theme === 'secondary' && 'text-black',
          theme === 'primary' && 'text-white',
          theme === 'tertiary' && 'text-gray-800'
        )}
      >
        {title} {disabled}
      </Text>
    </Pressable>
  )
}
