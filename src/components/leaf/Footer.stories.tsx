import { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: 'Leaf/Footer',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * フッター
 */
export const Default: Story = {
  args: {},
};
