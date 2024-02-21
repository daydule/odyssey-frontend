import { Metadata } from 'next';
import Layout from '@/components/forest/Layout';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Time is Money',
    default: 'Time is Money',
  },
  description: '「あなたが過ごした時間をお金に換算したらこれぐらいになります。」を知ってほしい。',
  openGraph: {
    title: 'Time is Money',
    description: 'あなたが過ごした時間をお金に換算してみませんか？',
    // TODO: 本番ドメインが確定次第、以下の項目を修正する
    url: '本番のドメイン',
    siteName: 'Time is Money',
    locale: 'ja_JP',
    type: 'website',
    images: '/images/favicon.png',
  },
  icons: [{ rel: 'icon', url: '/images/favicon.png' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
