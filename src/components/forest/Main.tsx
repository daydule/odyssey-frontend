'use client';

import { useEffect, useState } from 'react';
import MainCardWithInput from '../../components/tree/MainCardWithInput';
import MainCardWithMoneyResult from '../../components/tree/MainCardWithMoneyResult';
import { Commodity } from '../leaf/CommodityCard';
import MainCardWithCommodityResult from '../tree/MainCardWithCommodityResult';
import MainCardWithLogo from '../tree/MainCardWithLogo';
import PriceContext from './PriceContext';

type ActiveLeftCard = 'inputCard' | 'topCard';
type ActiveRightCard = 'moneyResultCard' | 'commodityResultCard';

const Main = () => {
  const [activeLeftCard, setActiveLeftCard] = useState<ActiveLeftCard>('inputCard');
  const [activeRightCard, setActiveRightCard] = useState<ActiveRightCard>('moneyResultCard');
  const [commodities, setCommodities] = useState<Commodity[]>([]);

  return (
    <PriceContext>
      <div className='flex h-full w-full items-center justify-center'>
        <div className='flex h-full w-3/5 items-center justify-around'>
          <div
            className={activeLeftCard === 'inputCard' ? 'animate-rotate-scale-down-ver' : 'hidden'}
            data-testid='Main-inputCard'
          >
            <MainCardWithInput setCommodities={setCommodities} rotateCard={() => setActiveLeftCard('topCard')} />
          </div>
          <div
            className={activeLeftCard !== 'inputCard' ? 'animate-rotate-scale-down-ver' : 'hidden'}
            data-testid='Main-topCard'
          >
            <MainCardWithLogo rotateCard={() => setActiveLeftCard('inputCard')} />
          </div>
          <div
            className={activeRightCard === 'moneyResultCard' ? 'animate-rotate-scale-down-ver' : 'hidden'}
            data-testid='Main-moneyResultCard'
          >
            <MainCardWithMoneyResult rotateCard={() => setActiveRightCard('commodityResultCard')} />
          </div>
          <div
            className={activeRightCard !== 'moneyResultCard' ? 'animate-rotate-scale-down-ver' : 'hidden'}
            data-testid='Main-commodityResultCard'
          >
            <MainCardWithCommodityResult
              commodities={commodities}
              rotateCard={() => setActiveRightCard('moneyResultCard')}
            />
          </div>
        </div>
      </div>
    </PriceContext>
  );
};

export default Main;
