import { Meta, StoryObj } from '@storybook/react';
import CommodityCard from './CommodityCard';

const meta: Meta<typeof CommodityCard> = {
  component: CommodityCard,
  title: 'Leaf/CommodityCard',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * メインページの商品カード表示
 */
export const Default: Story = {
  args: {
    imagePath: '/images/icon_negate.jpeg',
    altText: 'altText',
    title: 'air pods2',
    price: 30000,
  },
};
