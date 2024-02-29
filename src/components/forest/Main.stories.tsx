import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import Main from './Main';

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
