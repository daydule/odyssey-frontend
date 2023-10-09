import { render, screen, fireEvent, getAllByRole } from '@testing-library/react';
import { AboutCardWithImage } from './AboutCardWithImage';

describe('画像あり説明カードコンポーネントのテスト', () => {
  it('左側に画像がある説明カードが表示されること', () => {
    render(
      <AboutCardWithImage
        imagePath='/images/icon_negate.jpeg'
        title='Time is Money'
        text='テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト'
        isImageLeft={true}
      />,
    );

    const aboutCardWithImage = screen.getByTestId('AboutCardWithImage');
    const divDoms = getAllByRole(aboutCardWithImage, 'generic');

    expect(divDoms.length).toBe(2);
    expect(divDoms[0].dataset.testid).toBe('AboutCardWithImage_ImageArea');
    expect(divDoms[1].dataset.testid).toBe('AboutCardWithImage_TextArea');
  });
  it('右側に画像がある説明カードが表示されること', () => {
    render(
      <AboutCardWithImage
        imagePath='/images/icon_negate.jpeg'
        title='Time is Money'
        text='テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト'
        isImageLeft={false}
      />,
    );

    const aboutCardWithImage = screen.getByTestId('AboutCardWithImage');
    const divDoms = getAllByRole(aboutCardWithImage, 'generic');

    expect(divDoms.length).toBe(2);
    expect(divDoms[0].dataset.testid).toBe('AboutCardWithImage_TextArea');
    expect(divDoms[1].dataset.testid).toBe('AboutCardWithImage_ImageArea');
  });
});
