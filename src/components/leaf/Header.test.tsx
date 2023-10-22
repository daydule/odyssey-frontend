import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import { Header } from './Header';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

(useRouter as jest.Mock).mockReturnValue({
  query: {},
  push: jest.fn(),
});

describe('ヘッダーコンポーネントのテスト', () => {
  it('ロゴとaboutページへのリンクが表示されていることが表示されること', () => {
    render(<Header />);

    const headerLogo = screen.getByTestId('Header_Logo');
    const aboutLink = screen.getByTestId('Header_About_Link');

    expect(headerLogo).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });
});
