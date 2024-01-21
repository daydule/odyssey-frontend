import { Meta, StoryObj } from '@storybook/react';
import MainCardTop from './MainCardTop';

const meta: Meta<typeof MainCardTop> = {
  component: MainCardTop,
  title: 'Tree/MainCardTop',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * トップカード表示
 */
export const Default: Story = {
  args: {},
};
