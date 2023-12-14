import { Meta, StoryObj } from '@storybook/react';
import Main from './Main';

const meta: Meta<typeof Main> = {
  component: Main,
  title: 'Forest/Main',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * メインページ
 */
export const Default: Story = {};
