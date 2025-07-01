import { cn } from '@/utils/cn'
import { Text as RNText, type TextProps as RNTextProps } from 'react-native'

type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'hd'
type TextColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'label'
  | 'error'
  | 'success'
  | 'warning'
  | 'info'

interface TextProps extends RNTextProps {
  children: React.ReactNode
  size?: TextSize
  bold?: boolean
  color?: TextColor
  center?: boolean
  className?: string
}

export function Text({
  children,
  size = 'md',
  bold = false,
  color = 'primary',
  center = false,
  className,
}: TextProps) {
  return (
    <RNText
      className={cn(
        size === 'xs' &&
          'text-xs font-poppins-light text-light-text dark:text-dark-text dark:bg-dark-background bg-light-background',
        size === 'sm' &&
          'text-sm font-poppins-regular text-light-text dark:text-dark-text dark:bg-dark-background bg-light-background',
        size === 'md' &&
          'text-base font-poppins-regular text-light-text dark:text-dark-text dark:bg-dark-background bg-light-background',
        size === 'lg' &&
          'text-lg font-poppins-medium text-light-text dark:text-dark-text dark:bg-dark-background bg-light-background',
        size === 'hd' &&
          'text-xl font-poppins-bold text-light-text dark:text-dark-text dark:bg-dark-background bg-light-background',
        bold && 'font-bold',
        color === 'primary' && 'text-black',
        color === 'secondary' && 'text-gray-500',
        color === 'tertiary' && 'text-gray-400',
        color === 'label' && 'text-gray-700',
        color === 'error' && 'text-red-500',
        color === 'success' && 'text-green-500',
        color === 'warning' && 'text-yellow-500',
        color === 'info' && 'text-blue-500',
        center && 'text-center',
        className
      )}
    >
      {children}
    </RNText>
  )
}
