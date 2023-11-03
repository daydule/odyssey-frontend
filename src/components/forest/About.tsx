import { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { AboutCardWithImage, AboutCardWithImageProps } from '../leaf/AboutCardWithImage';
import { AboutCardWitTextProps, AboutCardWithText } from '../leaf/AboutCardWithText';
import AppInstallButton from '../leaf/AppInstallButton';

export const About = () => {
  const aboutCardsWithText = useMemo(() => {
    const aboutCardWithTextInfo: AboutCardWitTextProps[] = [
      {
        text: 'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',
      },
    ];

    const baseStyle = 'flex justify-center';
    return aboutCardWithTextInfo.map((info, index) => {
      return (
        <div key={'aboutCartsWithText_' + index} className={twMerge(baseStyle, index !== 0 ? 'mt-20' : 'mt-10')}>
          <AboutCardWithText text={info.text} />
        </div>
      );
    });
  }, []);

  const aboutCardsWithImage = useMemo(() => {
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

    const baseStyle = 'flex justify-center';
    return aboutCardWithTextInfo.map((info, index) => {
      return (
        <div key={'aboutCartsWithImage_' + index} className={twMerge(baseStyle, index !== 0 ? 'mt-20' : 'mt-10')}>
          <AboutCardWithImage
            imagePath={info.imagePath}
            title={info.title}
            text={info.text}
            isImageLeft={index % 2 === 0}
          />
        </div>
      );
    });
  }, []);

  const titleStyle = 'text-center text-3xl font-medium';

  return (
    <div className='w-full'>
      <section>
        <p className={titleStyle}>Time is Moneyとは</p>
        {aboutCardsWithText}
      </section>
      <section className='mt-24'>
        <p className={titleStyle}>機能紹介</p>
        {aboutCardsWithImage}
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
