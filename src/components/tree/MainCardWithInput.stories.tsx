import { Meta, StoryObj } from '@storybook/react';
import MainCardWithInput from './MainCardWithInput';

const meta: Meta<typeof MainCardWithInput> = {
  component: MainCardWithInput,
  title: 'Tree/MainCardWithInput',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 情報入力カード
 */
export const Default: Story = {};
