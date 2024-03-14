import { render, screen } from '@testing-library/react';
import { useRouter, usePathname } from 'next/navigation';
import { Header } from './Header';

// `next/navigation` と `react-device-detect` をモック
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));
jest.mock('react-device-detect', () => ({
  ...jest.requireActual('react-device-detect'),
}));

describe('ヘッダーコンポーネントのテスト', () => {
  const push = jest.fn();

  beforeEach(() => {
    push.mockReset();
    (useRouter as jest.Mock).mockReturnValue({ push });
  });

  it('モバイルの場合にAboutリンクが表示されないこと', () => {
    (usePathname as jest.Mock).mockReturnValue('/'); // 任意のパス
    require('react-device-detect').isMobile = true; // モバイルであることを模擬

    render(<Header />);

    const aboutLink = screen.queryByTestId('Header_About_Link');
    expect(aboutLink).not.toBeInTheDocument(); // Aboutリンクが表示されないことを検証
  });

  it('Aboutページの場合にAboutリンクが表示されないこと', () => {
    (usePathname as jest.Mock).mockReturnValue('/about'); // `/about` パスを模擬
    require('react-device-detect').isMobile = false; // モバイルでないことを模擬

    render(<Header />);

    const aboutLink = screen.queryByTestId('Header_About_Link');
    expect(aboutLink).not.toBeInTheDocument(); // Aboutリンクが表示されないことを検証
  });

  it('モバイルの場合にヘッダーのロゴをクリックしてもmainページに飛ばないこと', () => {
    (usePathname as jest.Mock).mockReturnValue('/'); // 任意のパス
    require('react-device-detect').isMobile = true; // モバイルでないことを模擬

    render(<Header />);

    const headerLogo = screen.queryByTestId('Header_Logo');
    headerLogo?.click();
    expect(push).not.toHaveBeenCalled(); // push関数が呼び出されないことを検証
  });

  it('モバイルでない場合にヘッダーのロゴクリックでmainページに飛ぶこと', () => {
    (usePathname as jest.Mock).mockReturnValue('/'); // 任意のパス
    require('react-device-detect').isMobile = false; // モバイルでないことを模擬

    render(<Header />);

    const headerLogo = screen.queryByTestId('Header_Logo');
    headerLogo?.click();
    expect(push).toHaveBeenCalledWith('/main'); // push関数が `/main` で呼び出されることを検証
  });

  it('モバイルではない場合にAboutリンクを押すとpush関数が実行されること', () => {
    (usePathname as jest.Mock).mockReturnValue('/'); // 任意のパス
    require('react-device-detect').isMobile = false; // モバイルでないことを模擬

    render(<Header />);

    const aboutLink = screen.getByTestId('Header_About_Link');
    aboutLink.click();

    expect(push).toHaveBeenCalledWith('/about'); // push関数が `/about` で呼び出されることを検証
  });
});
