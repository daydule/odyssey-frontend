import { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Leaf/Header',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * ヘッダー
 */
export const Default: Story = {
  args: {},
};
