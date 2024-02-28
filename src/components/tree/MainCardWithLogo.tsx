import React from 'react';
import MainCard from './MainCard';

const MainCardWithLogo = () => {
  return (
    <MainCard title='Time is Money' headerBgColor='bg-yellow-200'>
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
