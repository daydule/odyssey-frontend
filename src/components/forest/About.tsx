import { twMerge } from 'tailwind-merge';
import { AboutCardWithImageProps } from '../../type/AboutCardWithImageProps';
import { AboutCardWithImageLeft } from '../leaf/AboutCardWithImageLeft';
import { AboutCardWithImageRight } from '../leaf/AboutCardWithImageRight';
import { AboutCardWithText } from '../leaf/AboutCardWithText';
import AppInstallButton from '../leaf/AppInstallButton';

export const About = () => {
  const titleStyle = 'text-center text-3xl font-medium';
  const mainText =
    'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト';

  const aboutCardsWithImage = () => {
    const aboutCardWithTextInfo: AboutCardWithImageProps[] = [
      {
        imagePath: '/images/about_card_first.png',
        title: 'Time is Money',
        text: 'まずは自分の収入や時給を入力し、さらに稼働時間を追加します。入力が完了したら、カード下部にある「計算」ボタンをクリックしてみましょう。すると、入力した情報をもとに次のカードに結果が表示されます。',
      },
      {
        imagePath: '/images/about_card_second.png',
        title: 'Time is Money',
        text: '結果表示用のカードでは、自分の時間がどれくらいの価値になるかがわかります。計算結果と前回の結果を比較して、自分の時間の使い方を考え直すことができます。また、カード内をクリックすると、裏面に切り替わります。',
      },
      {
        imagePath: '/images/about_card_third.png',
        title: 'Time is Money',
        text: '裏面では、自分の時間が購入できる商品に換算されます。具体的な商品としてイメージすることで、時間の使い方を再考するのに役立ちます。',
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
      <section className='relative mt-24'>
        <div
          className='absolute inset-x-0 m-auto flex h-full w-[16rem] items-center justify-center rounded-lg bg-gray-100/90 text-4xl font-bold text-purple-400 sm:w-[32rem]'
          aria-label='アプリ公開予定'
        >
          アプリ公開予定
        </div>
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
