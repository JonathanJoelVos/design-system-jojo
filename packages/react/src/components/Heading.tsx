import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps, ElementType } from 'react'
import { cn } from '../utils/cn'

const headingVariants = cva(
  'text-gray-900 font-default font-bold tracking-tighter',
  {
    variants: {
      size: {
        sm: 'text-xl',
        base: 'text-2xl',
        lg: 'text-3xl',
        xl: 'text-4xl',
        '2xl': 'text-5xl',
        '3xl': 'text-6xl',
        '4xl': 'text-7xl',
        '5xl': 'text-8xl',
        '6xl': 'text-9xl',
      },
    },
    defaultVariants: {
      size: 'base',
    },
  },
)

export interface HeadingProps
  extends ComponentProps<'h2'>,
    VariantProps<typeof headingVariants> {
  as?: ElementType
}
export function Heading({
  as: Component = 'h2',
  className,
  size,
  ...rest
}: HeadingProps) {
  return (
    <Component className={cn(headingVariants({ className, size }))} {...rest} />
  )
}
