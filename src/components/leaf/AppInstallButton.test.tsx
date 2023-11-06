import { render, screen } from '@testing-library/react';
import AppInstallButton from './AppInstallButton';

describe('AppInstallButton コンポーネントのテスト', () => {
  it('App Store ボタンが正しく表示されること', () => {
    render(<AppInstallButton platform='appStore' />);

    const linkElement = screen.getByRole('link', { name: /Download on the App Store/i }) as HTMLAnchorElement;
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.href).toBe(
      'https://apps.apple.com/jp/app/itunes-store/id915061235?itsct=apps_box_badge&itscg=30200',
    );
  });

  it('Google Play ボタンが正しく表示されること', () => {
    render(<AppInstallButton platform='googlePlay' />);

    const linkElement = screen.getByRole('link', { name: /Google Play で手に入れよう/i }) as HTMLAnchorElement;
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.href).toBe(
      'https://play.google.com/store/#?pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
    );
  });
});
