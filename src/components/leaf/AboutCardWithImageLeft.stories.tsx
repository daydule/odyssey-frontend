import { Meta, StoryObj } from '@storybook/react';
import { AboutCardWithImageLeft } from './AboutCardWithImageLeft';
import { ComponentProps } from 'react';

const meta: Meta<typeof AboutCardWithImageLeft> = {
  component: AboutCardWithImageLeft,
  title: 'Leaf/AboutCardWithImageLeft',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta> & { args: ComponentProps<typeof AboutCardWithImageLeft> };

/**
 * 画像(左側)ありの説明カード
 */
export const LeftImage: Story = {
  args: {
    imagePath: '/images/icon_negate.jpeg',
    title: 'Time is Money',
    text: 'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',
  },
};

/**
 * 画像なしの説明カード
 */
export const NoImage: Story = {
  args: {
    imagePath: '/images/xxx.jpeg',
    title: 'Time is Money',
    text: 'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',
  },
};
