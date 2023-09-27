import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { ElementRef, forwardRef } from 'react'
import { cn } from '../utils/cn'

const Root = AccordionPrimitive.Root

type AccordionItemProps = AccordionPrimitive.AccordionItemProps
const Item = forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>(({ className, ...rest }, ref) => {
  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn('mb-1 border-b shadow-sm rounded-lg', className)}
      {...rest}
    />
  )
})

Item.displayName = AccordionPrimitive.Item.displayName

type TriggerProps = AccordionPrimitive.AccordionTriggerProps

const Trigger = forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  TriggerProps
>(({ className, children, ...rest }, ref) => {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          'flex-1 flex items-center justify-between p-4 [&[data-state="open"]>svg]:rotate-180',
          className,
        )}
        {...rest}
      >
        {children}
        <ChevronDown className="w-4 h-4 shrink-0 duration-200 transition-transform" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
})

Trigger.displayName = AccordionPrimitive.Trigger.displayName

export type ContentProps = AccordionPrimitive.AccordionContentProps

const Content = forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ContentProps
>(({ className, children, ...rest }, ref) => {
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(
        'data-[state="open"]:animate-accordion-down data-[state="closed"]:animate-accordion-up overflow-hidden text-sm transition-all',
        className,
      )}
      {...rest}
    >
      <div className="p-4">{children}</div>
    </AccordionPrimitive.Content>
  )
})

Content.displayName = AccordionPrimitive.Content.displayName

export { Root, Item, Trigger, Content }
