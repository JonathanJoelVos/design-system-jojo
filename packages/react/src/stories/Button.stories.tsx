import { Button, ButtonVariantsProps } from '..'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as Meta<ButtonVariantsProps>

export const Primary: StoryObj<ButtonVariantsProps> = {
  args: {
    variant: 'primary',
  },
}

export const Secondary: StoryObj<ButtonVariantsProps> = {
  args: {
    variant: 'secondary',
  },
}
