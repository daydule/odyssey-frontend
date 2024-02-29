import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import MainCard from './MainCard';

const meta: Meta<typeof MainCard> = {
  component: MainCard,
  title: 'Tree/MainCard',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta> & { args: ComponentProps<typeof MainCard> };

/**
 * メインページのカード表示
 */
export const Default: Story = {
  args: {
    title: 'Time is Money',
    children: <>Hello</>,
    headerBgColor: 'bg-cyan-400',
  },
};
