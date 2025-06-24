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
        size === 'sm' && 'text-sm mb-2',
        size === 'md' && 'text-base mb-3',
        size === 'lg' && 'text-lg mb-4',
        size === 'hd' && 'text-xl mb-5',
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
