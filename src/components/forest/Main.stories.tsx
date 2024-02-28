import { Meta, StoryObj } from '@storybook/react';
import Main from './Main';
import { ComponentProps } from 'react';

const meta: Meta<typeof Main> = {
  component: Main,
  title: 'Forest/Main',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta> & { args: ComponentProps<typeof Main> };

/**
 * メインページ
 */
export const Default: Story = {
  args: {},
};
