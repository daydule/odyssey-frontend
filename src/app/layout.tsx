import { Metadata } from 'next';
import { M_PLUS_2 } from 'next/font/google';
import Layout from '@/components/forest/Layout';
import './globals.css';

const mPlus2 = M_PLUS_2({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Time is Money',
    default: 'Time is Money',
  },
  description: '「あなたが過ごした時間をお金に換算したらこれぐらいになります。」を知ってほしい。',
  openGraph: {
    title: 'Time is Money',
    description: 'あなたが過ごした時間をお金に換算してみませんか？',
    url: 'https://time-is-money.habitat-hub.com/',
    siteName: 'Time is Money',
    locale: 'ja_JP',
    type: 'website',
    images: '/images/favicon.png',
  },
  icons: [{ rel: 'icon', url: '/images/favicon.png' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={mPlus2.className}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
