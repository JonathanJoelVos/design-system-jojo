import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps, ElementType } from 'react'
import { cn } from '../utils/cn'

const textVariants = cva('text-gray-900 font-default', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl',
    },
  },
  defaultVariants: {
    size: 'base',
  },
})

export interface TextProps
  extends ComponentProps<'p'>,
    VariantProps<typeof textVariants> {
  as?: ElementType
}
export function Text({
  as: Component = 'p',
  className,
  size,
  ...rest
}: TextProps) {
  return (
    <Component className={cn(textVariants({ size, className }))} {...rest} />
  )
}
