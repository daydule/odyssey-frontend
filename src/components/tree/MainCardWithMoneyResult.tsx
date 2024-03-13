import React, { useContext, useEffect, useState } from 'react';
import MainCard from '../../components/tree/MainCard';
import { useNotInitializingEffect } from '../../hooks/useNotInitializingEffect';
import { MainPriceContext } from '../forest/PriceContext';

interface MainCardWithMoneyResultProps {
  rotateCard?: () => void;
}

const MainCardWithMoneyResult = ({ rotateCard }: MainCardWithMoneyResultProps) => {
  const { mainPrice } = useContext(MainPriceContext);
  const isFirstRender = useNotInitializingEffect();

  const [previousPrice, setPreviousPrice] = useState<number | null>(null);
  const [difference, setDifference] = useState<number | null>(null);

  useEffect(() => {
    if (isFirstRender.current) {
      const previousPriceData = Number(localStorage.getItem('previousPrice'));
      if (previousPriceData) {
        setPreviousPrice(previousPriceData);

        const differenceData = previousPriceData ? mainPrice - Number(previousPriceData) : 0;
        setDifference(differenceData);
      }

      localStorage.setItem('previousPrice', String(mainPrice));
    }
  }, [isFirstRender, mainPrice]);

  return (
    <MainCard title='得した金額/損した金額' headerBgColor='bg-cyan-400' rotateCard={rotateCard}>
      <div className='flex h-[124px] flex-col items-end justify-between'>
        <p className='text-4xl'>¥ {mainPrice.toLocaleString()}</p>
        <p className='text-base'>前回：¥ {previousPrice !== null ? previousPrice.toLocaleString() : '---'}</p>
        <p className='text-base'>差額：¥ {difference !== null ? difference.toLocaleString() : '---'}</p>
      </div>
    </MainCard>
  );
};

export default MainCardWithMoneyResult;
