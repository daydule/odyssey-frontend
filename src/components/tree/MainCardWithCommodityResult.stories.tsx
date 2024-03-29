import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import MainCardWithCommodityResult from './MainCardWithCommodityResult';

const meta: Meta<typeof MainCardWithCommodityResult> = {
  component: MainCardWithCommodityResult,
  title: 'Tree/MainCardWithCommodityResult',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta> & { args: ComponentProps<typeof MainCardWithCommodityResult> };

/**
 * メインページの商品一覧カード表示
 */
export const Default: Story = {
  args: {
    commodities: [
      {
        imagePath: '/images/icon_negate.jpeg',
        altText: 'altText',
        title: 'air pods2',
        price: 30000,
        url: 'http://example.com',
      },
      {
        imagePath: '/images/icon_negate.jpeg',
        altText: 'altText',
        title: 'air pods2 - テストテストテストテストテストテストテストテスト',
        price: 30000,
        url: 'http://example.com',
      },
      {
        imagePath: '/images/xxxx.jpeg',
        altText: 'altText',
        title: 'air pods2',
        price: 30000,
        url: 'http://example.com',
      },
    ],
  },
};

/**
 * 商品が多い場合
 */
export const ManyCommodities: Story = {
  args: {
    commodities: [
      {
        imagePath: '/images/icon_negate.jpeg',
        altText: 'altText',
        title: 'title',
        price: 1000,
        url: 'http://example.com',
      },
      {
        imagePath: '/images/icon_negate.jpeg',
        altText: 'altText',
        title: 'title',
        price: 1000,
        url: 'http://example.com',
      },
      {
        imagePath: '/images/icon_negate.jpeg',
        altText: 'altText',
        title: 'title',
        price: 1000,
        url: 'http://example.com',
      },
      {
        imagePath: '/images/icon_negate.jpeg',
        altText: 'altText',
        title: 'title',
        price: 1000,
        url: 'http://example.com',
      },
      {
        imagePath: '/images/icon_negate.jpeg',
        altText: 'altText',
        title: 'title',
        price: 1000,
        url: 'http://example.com',
      },
      {
        imagePath: '/images/icon_negate.jpeg',
        altText: 'altText',
        title: 'title',
        price: 1000,
        url: 'http://example.com',
      },
    ],
  },
};

/**
 * 商品がない場合
 */
export const NoCommodities: Story = {
  args: {
    commodities: [],
  },
};
