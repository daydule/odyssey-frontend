import React from 'react';
import MainCard from './MainCard';

interface MainCardWithLogoProps {
  rotateCard?: () => void;
}

const MainCardWithLogo = ({ rotateCard }: MainCardWithLogoProps) => {
  return (
    <MainCard title='Time is Money' headerBgColor='bg-yellow-200' rotateCard={rotateCard}>
      <div className='m-auto'>
        <img
          className='mt-[-60px] h-full w-auto object-contain'
          src={'/images/header_logo.png'}
          alt='トップカード画像'
        />
      </div>
    </MainCard>
  );
};

export default MainCardWithLogo;
