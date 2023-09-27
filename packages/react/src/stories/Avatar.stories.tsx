import { Meta, StoryObj } from '@storybook/react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarProps,
} from '../components/Avatar'

export default {
  title: 'Surfaces/Avatar',
  component: Avatar,
  args: {
    children: (
      <>
        <AvatarImage src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg" />
        <AvatarFallback>JD</AvatarFallback>
      </>
    ),
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const Fallback: StoryObj<AvatarProps> = {
  args: {
    children: (
      <>
        <AvatarImage src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jp" />
        <AvatarFallback>JD</AvatarFallback>
      </>
    ),
  },
}
