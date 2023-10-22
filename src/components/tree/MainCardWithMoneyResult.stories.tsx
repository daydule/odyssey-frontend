import { Meta, StoryObj } from '@storybook/react';
import { MainPriceContext } from '../../components/forest/Main';
import MainCardWithMoneyResult from './MainCardWithMoneyResult';

const meta: Meta<typeof MainCardWithMoneyResult> = {
  component: MainCardWithMoneyResult,
  title: 'Tree/MainCardWithMoneyResult',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 計算結果表示カード
 */
export const Default: Story = {
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
