import { Meta, StoryObj } from '@storybook/react';
import { About } from './About';

const meta: Meta<typeof About> = {
  component: About,
  title: 'Forest/About',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

Default.decorators = [
  (Story) => (
    <div className='w-full bg-about-page-image bg-cover bg-no-repeat py-10'>
      <Story />
    </div>
  ),
];
