import { render, screen } from '@testing-library/react';
import MainCard from './MainCard';

describe('メインページ用カード（大枠）のテスト', () => {
  it('タイトルが表示されること', () => {
    render(
      <MainCard title='Time is Money' color='bg-cardHeaderBlue'>
        <h3>Test</h3>
      </MainCard>,
    );

    const element = screen.getByRole('heading', { name: 'Time is Money' });

    expect(element).toBeInTheDocument();
  });

  it('渡されたコンポーネントが表示されること', () => {
    render(
      <MainCard title='Time is Money' color='bg-cardHeaderBlue'>
        <h3>Pass the Component</h3>
      </MainCard>,
    );

    const element = screen.getByRole('heading', { name: 'Pass the Component' });

    expect(element).toBeInTheDocument();
  });
});
