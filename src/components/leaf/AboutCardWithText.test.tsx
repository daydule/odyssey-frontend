import { render, screen, fireEvent, getAllByRole } from '@testing-library/react';
import { AboutCardWithText } from './AboutCardWithText';

describe('説明カードコンポーネントのテスト', () => {
  it('propsで渡したテキストが説明カードに表示されること', () => {
    render(
      <AboutCardWithText text='テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト' />,
    );

    const aboutCardWithText = screen.getByTestId('AboutCardWithText');

    expect(aboutCardWithText.innerHTML).toMatch(
      /テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト/,
    );
  });
});
