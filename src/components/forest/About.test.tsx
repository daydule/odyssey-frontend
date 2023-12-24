import { render, screen, fireEvent, getAllByRole } from '@testing-library/react';
import { About } from './About';

describe('Aboutページのforestコンポーネントのテスト', () => {
  it('奇数番目は左に、偶数番目は右に画像が表示されること', () => {
    render(<About />);

    const aboutCardWithImages = screen.getAllByTestId('AboutCardWithImage');
    const divDomsInCard = aboutCardWithImages.map((card) => {
      return getAllByRole(card, 'generic');
    });

    // カードは3つ
    expect(divDomsInCard.length).toBe(3);

    // 奇数番目は左に画像
    expect(divDomsInCard[0][0].dataset.testid).toBe('AboutCardWithImage_ImageArea');
    expect(divDomsInCard[2][0].dataset.testid).toBe('AboutCardWithImage_ImageArea');

    // 偶数番目は右に画像
    expect(divDomsInCard[1][1].dataset.testid).toBe('AboutCardWithImage_ImageArea');
  });
});
