import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import MainCardTop from './MainCardWithLogo';

const meta: Meta<typeof MainCardTop> = {
  component: MainCardTop,
  title: 'Tree/MainCardTop',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta> & { args: ComponentProps<typeof MainCardTop> };

/**
 * トップカード表示
 */
export const Default: Story = {
  args: {},
};
