import { render, screen } from '@testing-library/react';
import CommodityCard from './CommodityCard';

const mockCommodity = {
  imagePath: 'test-image.jpg',
  altText: 'Test Image',
  title: 'Test Commodity',
  price: 1000,
};

describe('CommodityCardコンポーネントのテスト', () => {
  it('商品画像が正しく表示されること', () => {
    render(<CommodityCard commodity={mockCommodity} />);

    const image = screen.getByAltText(mockCommodity.altText);

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockCommodity.imagePath);
  });

  it('商品タイトルと価格が正しく表示されること', () => {
    render(<CommodityCard commodity={mockCommodity} />);

    const title = screen.getByText(mockCommodity.title);
    const price = screen.getByText(`¥${mockCommodity.price.toLocaleString()}`);

    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
});
