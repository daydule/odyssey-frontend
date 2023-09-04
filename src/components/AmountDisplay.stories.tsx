import { Meta, StoryObj } from '@storybook/react';
import AmountDisplay from './AmountDisplay';

const meta: Meta<typeof AmountDisplay> = {
  component: AmountDisplay,
  title: 'Test/AmountDisplay',
  argTypes: {
    //以下のようにすると、デフォルトのラジオボタンから選択ボックスに変更できる
    variant: {
      control: { type: 'select' },
      options: ['white', 'gray', 'dark'],
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 白色のディスプレイです。
 */
export const BaseDisplay: Story = {
  args: {
    variant: 'white',
    amount: 1111,
  },
};

/**
 * グレーのディスプレイです。
 */
export const GrayDisplay: Story = {
  args: {
    variant: 'gray',
    amount: 1111,
  },
};

/**
 * ダークグレーのディスプレイです。
 */
export const DarkDisplay: Story = {
  args: {
    variant: 'dark',
    amount: 1111,
  },
};

export const GroupedDisplay = {
  render: () => (
    <div>
      <AmountDisplay variant='white' amount={1111} />
      <AmountDisplay variant='gray' amount={1111} />
      <AmountDisplay variant='dark' amount={1111} />
    </div>
  ),
};
