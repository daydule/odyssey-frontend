import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import { Header } from './Header';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const push = jest.fn();
(useRouter as jest.Mock).mockReturnValue({
  query: {},
  push,
});

describe('ヘッダーコンポーネントのテスト', () => {
  it('ロゴとaboutページへのリンクが表示されていることが表示されること', () => {
    render(<Header />);

    const headerLogo = screen.getByTestId('Header_Logo');
    const aboutLink = screen.getByTestId('Header_About_Link');

    expect(headerLogo).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });
  it('Aboutリンクを押下するとpush関数が実行されること', () => {
    render(<Header />);

    const aboutLink = screen.getByTestId('Header_About_Link');
    aboutLink.click();

    expect(push).toHaveBeenCalled();
  });
  it('Headerロゴを押下するとpush関数が実行されること', () => {
    render(<Header />);

    const headerLogo = screen.getByTestId('Header_Logo');
    headerLogo.click();

    expect(push).toHaveBeenCalled();
  });
});
