import { Meta, StoryObj } from '@storybook/react';
import MainCard from './MainCard';
import { ComponentProps } from 'react';

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
