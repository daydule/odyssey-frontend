import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import MainCardWithLogo from './MainCardWithLogo';

const meta: Meta<typeof MainCardWithLogo> = {
  component: MainCardWithLogo,
  title: 'Tree/MainCardWithLogo',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta> & { args: ComponentProps<typeof MainCardWithLogo> };

/**
 * トップカード表示
 */
export const Default: Story = {
  args: {},
};
