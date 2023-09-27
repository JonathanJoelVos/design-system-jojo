import { Heading, HeadingProps } from '../components/Heading'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'JOJO UI',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {
  args: {
    size: 'base',
  },
}
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    size: 'base',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão, o componente Heading renderiza um h2. Você pode alterar isso com a prop as.',
      },
    },
  },
}
