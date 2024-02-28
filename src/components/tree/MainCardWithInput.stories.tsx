import { Meta, StoryObj } from '@storybook/react';
import MainCardWithInput from './MainCardWithInput';
import { ComponentProps } from 'react';

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
export const Default: Story = { args: {} };
