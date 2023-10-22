import React, { useContext, useEffect, useState } from 'react';
import { MainPriceContext } from '../../components/forest/Main';
import MainCard from '../../components/tree/MainCard';
import { useNotInitializingEffect } from '../../hooks/useNotInitializingEffect';

const MainCardWithMoneyResult = () => {
  const { mainPrice } = useContext(MainPriceContext);
  const isFirstRender = useNotInitializingEffect();

  const [previousPrice, setPreviousPrice] = useState<number>(0);
  const [difference, setDifference] = useState<number>(0);

  useEffect(() => {
    if (isFirstRender.current) {
      const previousPriceData = Number(localStorage.getItem('previousPrice'));
      setPreviousPrice(previousPriceData);

      const differenceData = previousPriceData ? mainPrice - Number(previousPriceData) : 0;
      setDifference(differenceData);

      localStorage.setItem('previousPrice', String(mainPrice));
    }
  }, [mainPrice]);

  return (
    <MainCard title='Time is Money' headerBgColor='bg-cyan-400'>
      <div className='flex h-[124px] w-[173px] flex-col items-end justify-between'>
        <p className='text-[33px]'>¥ {mainPrice || 0}</p>
        <p className='text-[14px]'>前回：¥ {previousPrice || '---'}</p>
        <p className='text-[14px]'>差額：¥ {difference || '---'}</p>
      </div>
    </MainCard>
  );
};

export default MainCardWithMoneyResult;
