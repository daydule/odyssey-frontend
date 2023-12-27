import { Meta, StoryObj } from '@storybook/react';
import { AboutCardWithImageRight } from './AboutCardWithImageRight';

const meta: Meta<typeof AboutCardWithImageRight> = {
  component: AboutCardWithImageRight,
  title: 'Leaf/AboutCardWithImageRight',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 画像(右側)ありの説明カード
 */
export const RightImage: Story = {
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
