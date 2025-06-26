import { cn } from '@/utils/cn'
import { Text as RNText, type TextProps as RNTextProps } from 'react-native'

type TextSize = 'sm' | 'md' | 'lg' | 'hd'
type TextColor = 'primary' | 'secondary' | 'tertiary'

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
        size === 'sm' && 'text-sm',
        size === 'md' && 'text-base',
        size === 'lg' && 'text-lg',
        size === 'hd' && 'text-xl',
        bold && 'font-bold',
        color === 'primary' && 'text-black',
        color === 'secondary' && 'text-gray-500',
        color === 'tertiary' && 'text-gray-400',
        center && 'text-center',
        className
      )}
    >
      {children}
    </RNText>
  )
}
