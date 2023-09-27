import { Text, TextProps } from '../components/Text'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam a sed, dolore inventore veritatis, recusandae molestias provident tempora assumenda reprehenderit expedita alias, fugit magnam dicta repellendus placeat nisi minima iste?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
  args: {
    size: 'base',
  },
}
