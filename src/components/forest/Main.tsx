'use client';

import { useState } from 'react';
import MainCardWithInput from '../../components/tree/MainCardWithInput';
import MainCardWithMoneyResult from '../../components/tree/MainCardWithMoneyResult';
import MainCardTop from '../tree/MainCardWithLogo';
import MainCardWithCommodityResult from '../tree/MainCardWithCommodityResult';
import PriceContext from './PriceContext';

interface Commodity {
  name: string;
  price: number;
  imagePath: string;
  altText: string;
  title: string;
}

type ActiveLeftCard = 'inputCard' | 'topCard';
type ActiveRightCard = 'moneyResultCard' | 'commodityResultCard';

const Main = () => {
  const [activeLeftCard, setActiveLeftCard] = useState<ActiveLeftCard>('inputCard');
  const [activeRightCard, setActiveRightCard] = useState<ActiveRightCard>('moneyResultCard');
  const commodities: Commodity[] = [
    { name: 'りんご', price: 100, imagePath: 'images/icon_negate.jpeg', altText: 'Apple', title: 'Apple' },
    { name: 'みかん', price: 200, imagePath: 'images/icon_negate.jpeg', altText: 'Orange', title: 'Orange' },
    { name: 'バナナ', price: 300, imagePath: 'images/icon_negate.jpeg', altText: 'Banana', title: 'Banana' },
    {
      name: 'パイナップル',
      price: 400,
      imagePath: 'images/icon_negate.jpeg',
      altText: 'Pineapple',
      title: 'Pineapple',
    },
    { name: 'ぶどう', price: 500, imagePath: 'images/icon_negate.jpeg', altText: 'Grape', title: 'Grape' },
  ];

  return (
    <PriceContext>
      <div className='flex h-full w-full items-center justify-center'>
        <div className='flex h-full w-3/5 items-center justify-around'>
          <div
            onClick={() => setActiveLeftCard('topCard')}
            className={activeLeftCard === 'inputCard' ? 'animate-rotate-scale-down-ver' : 'hidden'}
            data-testid='Main-inputCard'
          >
            <MainCardWithInput />
          </div>
          <div
            onClick={() => setActiveLeftCard('inputCard')}
            className={activeLeftCard !== 'inputCard' ? 'animate-rotate-scale-down-ver' : 'hidden'}
            data-testid='Main-topCard'
          >
            <MainCardTop />
          </div>
          <div
            onClick={() => setActiveRightCard('commodityResultCard')}
            className={activeRightCard === 'moneyResultCard' ? 'animate-rotate-scale-down-ver' : 'hidden'}
            data-testid='Main-moneyResultCard'
          >
            <MainCardWithMoneyResult />
          </div>
          <div
            onClick={() => setActiveRightCard('moneyResultCard')}
            className={activeRightCard !== 'moneyResultCard' ? 'animate-rotate-scale-down-ver' : 'hidden'}
            data-testid='Main-commodityResultCard'
          >
            <MainCardWithCommodityResult commodities={commodities} />
          </div>
        </div>
      </div>
    </PriceContext>
  );
};

export default Main;
