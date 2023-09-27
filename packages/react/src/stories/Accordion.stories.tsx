import { Meta, StoryObj } from '@storybook/react'
import * as Accordion from '../components/Accordion'

export default {
  title: 'Accordion',
  component: Accordion.Root,
  args: {
    children: (
      <>
        <Accordion.Item value="1">
          <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
          <Accordion.Content>
            Yes. It adheres to the WAI-ARIA design pattern.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="2">
          <Accordion.Trigger>Is it styled?</Accordion.Trigger>
          <Accordion.Content>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="3">
          <Accordion.Trigger>Is it animated?</Accordion.Trigger>
          <Accordion.Content>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </Accordion.Content>
        </Accordion.Item>
      </>
    ),
  },
} as Meta

export const Primary: StoryObj = {}
