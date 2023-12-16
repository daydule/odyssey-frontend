import dynamic from 'next/dynamic';
import { useMemo, useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { AboutCardWithImageProps } from '../leaf/AboutCardWithImage';
import { AboutCardWithText, AboutCardWitTextProps } from '../leaf/AboutCardWithText';
import AppInstallButton from '../leaf/AppInstallButton';

const AboutCardWithImage = dynamic<AboutCardWithImageProps>(
  () => import('../leaf/AboutCardWithImage.tsx').then((module) => module.AboutCardWithImage),
  { ssr: false },
);

export const About = () => {
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isSmallScreen = windowWidth < 769;

  const titleStyle = 'text-center text-3xl font-medium';
  const mainText =
    'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト';

  const aboutCardsWithImage = () => {
    const aboutCardWithTextInfo: AboutCardWithImageProps[] = [
      {
        imagePath: '/images/icon_negate.jpeg',
        title: 'Time is Money',
        text: 'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',
      },
      {
        imagePath: '/images/icon_negate.jpeg',
        title: 'Time is Money',
        text: 'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',
      },
      {
        imagePath: '/images/icon_negate.jpeg',
        title: 'Time is Money',
        text: 'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',
      },
    ];

    const baseStyle = 'flex justify-center mx-10 md:mx-20';
    return aboutCardWithTextInfo.map((info, index) => {
      return (
        <div key={'aboutCartsWithImage_' + index} className={twMerge(baseStyle, index !== 0 ? 'mt-20' : 'mt-10')}>
          <AboutCardWithImage
            imagePath={info.imagePath}
            title={info.title}
            text={info.text}
            isImageLeft={isSmallScreen || index % 2 === 0}
          />
        </div>
      );
    });
  };

  return (
    <div className='w-full'>
      <section>
        <p className={titleStyle}>Time is Moneyとは</p>
        <div className='mt-10 flex justify-center'>
          <AboutCardWithText text={mainText} />
        </div>
      </section>
      <section className='mt-24'>
        <p className={titleStyle}>機能紹介</p>
        {aboutCardsWithImage()}
      </section>
      <section className='mt-24'>
        <p className={titleStyle}>アプリインストール</p>
        <div className='mt-10 flex flex-wrap justify-center'>
          <div className='min-w-[64px]'>
            <AppInstallButton platform='appStore' />
          </div>
          <div className='min-w-[64px]'>
            <AppInstallButton platform='googlePlay' />
          </div>
        </div>
      </section>
    </div>
  );
};
