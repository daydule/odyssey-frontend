import { render, screen } from '@testing-library/react';
import MainCard from './MainCard';

describe('メインページ用カード（大枠）のテスト', () => {
  it('タイトルが表示されること', () => {
    render(
      <MainCard title='Time is Money' headerBgColor='bg-cardHeaderBlue'>
        <h3>Test</h3>
      </MainCard>,
    );

    const element = screen.getByTestId('MainCard_Title');
    expect(element).toHaveTextContent('Time is Money');
  });

  it('渡されたコンポーネントが表示されること', () => {
    render(
      <MainCard title='Time is Money' headerBgColor='bg-cardHeaderBlue'>
        <h3>Pass the Component</h3>
      </MainCard>,
    );

    const element = screen.getByTestId('MainCard_Children').firstChild;
    expect(element).toHaveTextContent('Pass the Component');
  });
});
