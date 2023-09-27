import { ComponentProps, ElementType } from 'react'
import { cn } from '../utils/cn'

export interface BoxProps extends ComponentProps<'div'> {
  as?: ElementType
}

export function Box({ as: Component = 'div', className, ...rest }: BoxProps) {
  return (
    <Component className={cn('rounded-lg p-4 border', className)} {...rest} />
  )
}
