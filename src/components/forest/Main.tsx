'use client';

import { useState } from 'react';
import MainCardWithInput from '../../components/tree/MainCardWithInput';
import MainCardWithMoneyResult from '../../components/tree/MainCardWithMoneyResult';
import MainCardWithCommodityResult from '../tree/MainCardWithCommodityResult';
import PriceContext from './PriceContext';

interface Commodity {
  name: string;
  price: number;
  imagePath: string;
  altText: string;
  title: string;
}

type ActiveCard = 'moneyResult' | 'commodityResult';

const Main = () => {
  const [activeCard, setActiveCard] = useState<ActiveCard>('moneyResult');
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
          <div className='animate-rotate-scale-down-ver'>
            <MainCardWithInput />
          </div>
          <div
            onClick={() => setActiveCard('commodityResult')}
            className={activeCard === 'commodityResult' ? 'hidden' : 'animate-rotate-scale-down-ver'}
          >
            <MainCardWithMoneyResult />
          </div>
          <div
            onClick={() => setActiveCard('moneyResult')}
            className={activeCard === 'moneyResult' ? 'hidden' : 'animate-rotate-scale-down-ver'}
          >
            <MainCardWithCommodityResult commodities={commodities} />
          </div>
        </div>
      </div>
    </PriceContext>
  );
};

export default Main;
