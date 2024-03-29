import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Leaf/Button',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta> & { args: ComponentProps<typeof Button> };

/**
 * ボタン
 */
export const Default: Story = {
  args: {
    buttonColor: 'bg-cyan-400',
    buttonText: '計算',
    handleClick: action('Clicked'),
  },
};
