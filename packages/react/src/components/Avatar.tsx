import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { ElementRef, forwardRef } from 'react'
import { cn } from '../utils/cn'

export type AvatarProps = AvatarPrimitive.AvatarProps

const Avatar = forwardRef<ElementRef<typeof AvatarPrimitive.Root>, AvatarProps>(
  ({ className, ...rest }, ref) => {
    return (
      <AvatarPrimitive.Root
        className={cn(
          'flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
          className,
        )}
        ref={ref}
        {...rest}
      />
    )
  },
)

Avatar.displayName = AvatarPrimitive.Root.displayName

export type AvatarImageProps = AvatarPrimitive.AvatarImageProps

const AvatarImage = forwardRef<
  ElementRef<typeof AvatarPrimitive.AvatarImage>,
  AvatarImageProps
>(({ className, ...rest }, ref) => {
  return (
    <AvatarPrimitive.AvatarImage
      className={cn('rounded-full w-full h-full', className)}
      ref={ref}
      {...rest}
    />
  )
})

AvatarImage.displayName = AvatarPrimitive.AvatarImage.displayName

export type AvatarFallbackProps = AvatarPrimitive.AvatarFallbackProps

const AvatarFallback = forwardRef<
  ElementRef<typeof AvatarPrimitive.AvatarFallback>,
  AvatarFallbackProps
>(({ className, ...rest }, ref) => {
  return (
    <AvatarPrimitive.AvatarFallback
      className={cn(
        'h-full w-full text-gray100 flex justify-center items-center rounded-full bg-jojo300',
        className,
      )}
      ref={ref}
      {...rest}
    />
  )
})

AvatarFallback.displayName = AvatarPrimitive.AvatarFallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
