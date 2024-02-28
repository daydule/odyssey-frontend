import { Meta, StoryObj } from '@storybook/react';
import { MainPriceContext } from '../../components/forest/PriceContext';
import MainCardWithMoneyResult from './MainCardWithMoneyResult';
import { ComponentProps } from 'react';

const meta: Meta<typeof MainCardWithMoneyResult> = {
  component: MainCardWithMoneyResult,
  title: 'Tree/MainCardWithMoneyResult',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta> & { args: ComponentProps<typeof MainCardWithMoneyResult> };

/**
 * 計算結果表示カード
 */
export const Default: Story = {
  args: {},
  decorators: [
    (Story) => {
      return (
        <MainPriceContext.Provider value={{ mainPrice: 10000 }}>
          <Story />
        </MainPriceContext.Provider>
      );
    },
  ],
};
