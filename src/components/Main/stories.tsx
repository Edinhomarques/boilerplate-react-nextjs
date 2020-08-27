import { Story, Meta } from '@storybook/react/types-6-0'
// import { } from '@storybook/addon-essentials'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Title Default',
    description: 'description Default'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
// Basic.args = {
//   title: 'mdiwkjpwk',
//   description: 'dkpdokod'
// }

export const Default: Story = (args) => <Main {...args} />
// Default.args = {
//   title: 'Default',
//   description: 'Default Description'
// }
