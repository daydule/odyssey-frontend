import { render, screen } from '@testing-library/react';
import MainCardWithMoneyResult from './MainCardWithMoneyResult';
import { MainPriceContext } from '../forest/PriceContext';

describe('MainCardWithMoneyResultコンポーネントのテスト', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('正しい価格が表示されること', () => {
    const mainPrice = 1000;
    render(
      <MainPriceContext.Provider value={{ mainPrice }}>
        <MainCardWithMoneyResult />
      </MainPriceContext.Provider>,
    );
    const priceElement = screen.getByText(`¥ ${mainPrice}`);
    expect(priceElement).toBeInTheDocument();
  });

  it('前回の価格が表示されること', () => {
    const previousPrice = 800;
    const mainPrice = 1000;
    localStorage.setItem('previousPrice', String(previousPrice));
    render(
      <MainPriceContext.Provider value={{ mainPrice }}>
        <MainCardWithMoneyResult />
      </MainPriceContext.Provider>,
    );
    const previousPriceElement = screen.getByText(`前回：¥ ${previousPrice}`);
    expect(previousPriceElement).toBeInTheDocument();
  });

  it('差額が表示されること', () => {
    const mainPrice = 1000;
    const previousPrice = 800;
    localStorage.setItem('previousPrice', String(previousPrice));
    render(
      <MainPriceContext.Provider value={{ mainPrice }}>
        <MainCardWithMoneyResult />
      </MainPriceContext.Provider>,
    );
    const difference = mainPrice - previousPrice;
    const differenceElement = screen.getByText(`差額：¥ ${difference}`);
    expect(differenceElement).toBeInTheDocument();
  });
});
