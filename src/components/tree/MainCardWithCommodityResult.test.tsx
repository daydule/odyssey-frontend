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

  it('商品がない場合、文言が表示されること', () => {
    const { container } = render(<MainCardWithCommodityResult commodities={[]} />);

    const listItem = screen.queryAllByRole('listitem');

    expect(container.innerHTML).toMatch(/ここには購入可能な商品が表示されます。/);
    expect(listItem.length).toBe(0);
  });
});
