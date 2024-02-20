import { twMerge } from 'tailwind-merge';
import { AboutCardWithImageProps } from '../../type/AboutCardWithImageProps';
import { AboutCardWithImageLeft } from '../leaf/AboutCardWithImageLeft';
import { AboutCardWithImageRight } from '../leaf/AboutCardWithImageRight';
import { AboutCardWithText, AboutCardWitTextProps } from '../leaf/AboutCardWithText';
import AppInstallButton from '../leaf/AppInstallButton';

export const About = () => {
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
      const isLeft = index % 2 === 0;
      return (
        <div key={'aboutCartsWithImage_' + index} className={twMerge(baseStyle, index !== 0 ? 'mt-20' : 'mt-10')}>
          {isLeft ? (
            <AboutCardWithImageLeft imagePath={info.imagePath} title={info.title} text={info.text} />
          ) : (
            <AboutCardWithImageRight imagePath={info.imagePath} title={info.title} text={info.text} />
          )}
        </div>
      );
    });
  };

  return (
    <div className='w-full'>
      <section>
        <p className={titleStyle}>Time is Moneyとは</p>
        <div className='mx-10 mt-10 flex justify-center md:mx-20'>
          <AboutCardWithText text={mainText} />
        </div>
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
      <section className='mt-24'>
        <p className={titleStyle}>機能紹介</p>
        {aboutCardsWithImage()}
      </section>
    </div>
  );
};
