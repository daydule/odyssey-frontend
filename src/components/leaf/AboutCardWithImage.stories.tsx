import { Meta, StoryObj } from '@storybook/react';
import { AboutCardWithImage } from './AboutCardWithImage';

const meta: Meta<typeof AboutCardWithImage> = {
  component: AboutCardWithImage,
  title: 'Leaf/AboutCardWithImage',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 画像(左側)ありの説明カード
 */
export const Default: Story = {
  args: {
    imagePath: '/images/icon_negate.jpeg',
    title: 'Time is Money',
    text: 'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',
    isImageLeft: true,
  },
};

/**
 * 画像(右側)ありの説明カード
 */
export const RightImage: Story = {
  args: {
    imagePath: '/images/icon_negate.jpeg',
    title: 'Time is Money',
    text: 'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',
    isImageLeft: false,
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
    isImageLeft: false,
  },
};
