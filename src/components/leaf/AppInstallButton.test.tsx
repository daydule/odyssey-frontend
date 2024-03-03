import { render, screen } from '@testing-library/react';
import AppInstallButton from './AppInstallButton';

describe('AppInstallButton コンポーネントのテスト', () => {
  it('App Store ボタンが正しく表示されること', () => {
    render(<AppInstallButton platform='appStore' />);

    const linkElement = screen.getByRole('link', { name: /Download on the App Store/i }) as HTMLAnchorElement;
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.href).toBe('http://localhost/#');
  });

  it('Google Play ボタンが正しく表示されること', () => {
    render(<AppInstallButton platform='googlePlay' />);

    const linkElement = screen.getByRole('link', { name: /Google Play で手に入れよう/i }) as HTMLAnchorElement;
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.href).toBe('http://localhost/#');
  });
});
