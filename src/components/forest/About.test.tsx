import { render, screen, getAllByRole } from '@testing-library/react';
import { About } from './About';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));
jest.mock('react-device-detect', () => ({
  ...jest.requireActual('react-device-detect'),
}));

describe('Aboutページのforestコンポーネントのテスト', () => {
  it('画像付き説明テキストが複数あるとき、奇数番目は左に、偶数番目は右に画像が表示されること', () => {
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
  it('モバイルの場合にお試しリンクが表示されないこと', () => {
    require('react-device-detect').isMobile = true; // モバイルでないことを模擬

    render(<About />);

    expect(screen.queryByTestId('About_Try_Link')).not.toBeInTheDocument();
  });
  it('モバイルではない場合にお試しリンクが表示されること', () => {
    require('react-device-detect').isMobile = false;

    render(<About />);

    expect(screen.queryByTestId('About_Try_Link')).toBeInTheDocument();
  });
});
