import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import CommodityCard from './CommodityCard';

const meta: Meta<typeof CommodityCard> = {
  component: CommodityCard,
  title: 'Leaf/CommodityCard',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta> & { args: ComponentProps<typeof CommodityCard> };

/**
 * メインページの商品カード表示
 */
export const Default: Story = {
  args: {
    commodity: {
      imagePath: '/images/icon_negate.jpeg',
      altText: 'altText',
      title: 'air pods2',
      price: 30000,
    },
  },
};

Default.decorators = [
  (Story) => (
    <div className='w-1/3'>
      <ul className='box-content h-full w-full overflow-y-scroll pr-4'>
        <li className='[&:not(:first-child)]:mt-6'>
          <Story />
        </li>
      </ul>
    </div>
  ),
];
