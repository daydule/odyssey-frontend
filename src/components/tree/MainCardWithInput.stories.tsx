import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import MainCardWithInput from './MainCardWithInput';

const meta: Meta<typeof MainCardWithInput> = {
  component: MainCardWithInput,
  title: 'Tree/MainCardWithInput',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta> & { args: ComponentProps<typeof MainCardWithInput> };

/**
 * 情報入力カード
 */
export const Default: Story = {
  args: {
    setCommodities: () => {},
  },
};
