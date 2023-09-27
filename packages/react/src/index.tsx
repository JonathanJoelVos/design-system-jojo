import './index.css'
import { ComponentProps } from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from './utils/cn'

const buttonVariants = cva(
  'py-2 px-3 rounded-lg flex items-center gap-2 text-sm',
  {
    variants: {
      variant: {
        primary: 'bg-jojo700 enabled:hover:bg-jojo500 text-gray-100',
        secondary: 'border border-jojo700 text-jojo700 font-semibold',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
)

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>

interface ButtonProps extends ComponentProps<'button'>, ButtonVariantsProps {}

export function Button({ variant, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ className, variant }), '')}
      {...props}
    />
  )
}
