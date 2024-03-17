import { Meta, StoryObj } from '@storybook/react'
import { Text } from '../components/Text'

const meta: Meta<typeof Text> = {
  title: 'Example/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Text>

export const Paragraph: Story = {
  args: {
    variant: 'paragraph',
    children:
      'MTWUI is a simple tailwindcss component library made for React and Typescript. It comes with built in dark mode theming and is easy to use and configure',
  },
}

export const Small: Story = {
  args: {
    variant: 'small',
    children:
      'MTWUI is a simple tailwindcss component library made for React and Typescript. It comes with built in dark mode theming and is easy to use and configure',
  },
}

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
}

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
}

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3',
  },
}

export const Heading4: Story = {
  args: {
    variant: 'h4',
    children: 'Heading 4',
  },
}

export const Heading5: Story = {
  args: {
    variant: 'h5',
    children: 'Heading 5',
  },
}

export const Heading6: Story = {
  args: {
    variant: 'h6',
    children: 'Heading 6',
  },
}

export const OverrideBase: Story = {
  args: {
    variant: 'paragraph',
    children: 'This is actually a h1 element',
    as: 'h1',
  },
}
