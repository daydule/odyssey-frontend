import { render, screen, fireEvent, getAllByRole } from '@testing-library/react';
import { AboutCardWithImageLeft } from './AboutCardWithImageLeft';

describe('画像あり説明カードコンポーネントのテスト', () => {
  it('左に画像がある説明カードが表示されること', () => {
    render(
      <AboutCardWithImageLeft
        imagePath='/images/icon_negate.jpeg'
        title='Time is Money'
        text='テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト'
      />,
    );

    const aboutCardWithImage = screen.getByTestId('AboutCardWithImage');
    const divDoms = getAllByRole(aboutCardWithImage, 'generic');

    expect(divDoms.length).toBe(2);
    expect(divDoms[0].dataset.testid).toBe('AboutCardWithImage_ImageArea');
    expect(divDoms[1].dataset.testid).toBe('AboutCardWithImage_TextArea');
  });
});
