'use client';

import MainCardWithInput from '../../components/tree/MainCardWithInput';
import MainCardWithMoneyResult from '../../components/tree/MainCardWithMoneyResult';
import PriceContext from './PriceContext';

const Main = () => {
  return (
    <PriceContext>
      <div className='flex min-h-screen items-center justify-center bg-gray-100'>
        <MainCardWithInput />
        <MainCardWithMoneyResult />
      </div>
    </PriceContext>
  );
};

export default Main;
