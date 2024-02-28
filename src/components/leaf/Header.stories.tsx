import { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { ComponentProps } from 'react';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Leaf/Header',
  tags: ['autodocs'],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta> & { args: ComponentProps<typeof Header> };

/**
 * ヘッダー
 */
export const Default: Story = {
  args: {},
};
