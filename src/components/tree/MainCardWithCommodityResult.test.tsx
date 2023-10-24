import { render, screen } from '@testing-library/react';
import MainCardWithCommodityResult from './MainCardWithCommodityResult';

describe('商品一覧表示カードコンポーネントのテスト', () => {
  const commodities = [
    {
      imagePath: '/images/icon_negate.jpeg',
      altText: 'altText',
      title: 'air pods2',
      price: 30000,
    },
    {
      imagePath: '/images/icon_negate.jpeg',
      altText: 'altText',
      title: 'air pods2 - テストテストテストテストテストテストテストテスト',
      price: 30000,
    },
    {
      imagePath: '/images/xxxx.jpeg',
      altText: 'altText',
      title: 'air pods2',
      price: 30000,
    },
  ];

  it('商品一覧が表示されること', () => {
    render(<MainCardWithCommodityResult commodities={commodities} />);

    const listItem = screen.getAllByRole('listitem');

    expect(listItem.length).toBe(commodities.length);
    expect(listItem[0].innerHTML).toMatch(/air pods2/);
    expect(listItem[0].innerHTML).toMatch(/¥30,000/);
  });
});
