import React, { useContext, useEffect, useState } from 'react';
import MainCard from '../../components/tree/MainCard';
import { useNotInitializingEffect } from '../../hooks/useNotInitializingEffect';
import { MainPriceContext } from '../forest/PriceContext';

interface MainCardWithMoneyResultProps {
  rotateCard?: () => void;
}

const MainCardWithMoneyResult = ({rotateCard}: MainCardWithMoneyResultProps) => {
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
    <MainCard title='Time is Money' headerBgColor='bg-cyan-400' rotateCard={rotateCard}>
      <div className='flex h-[124px] w-[173px] flex-col items-end justify-between'>
        <p className='text-[33px]'>¥ {mainPrice || 0}</p>
        <p className='text-[14px]'>前回：¥ {previousPrice || '---'}</p>
        <p className='text-[14px]'>差額：¥ {difference || '---'}</p>
      </div>
    </MainCard>
  );
};

export default MainCardWithMoneyResult;
