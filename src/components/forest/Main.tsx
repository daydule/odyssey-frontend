'use client';

import { useState, createContext } from 'react';
import MainCardWithInput from '../../components/tree/MainCardWithInput';
import MainCardWithMoneyResult from '../../components/tree/MainCardWithMoneyResult';

type MainPriceContext = {
  mainPrice: number;
};

type SetMainPriceContext = {
  setMainPrice: React.Dispatch<React.SetStateAction<number>>;
};

export const MainPriceContext = createContext({} as MainPriceContext);
export const SetMainPriceContext = createContext({} as SetMainPriceContext);

const Main = () => {
  // 計算結果
  const [mainPrice, setMainPrice] = useState<number>(0);

  return (
    <MainPriceContext.Provider value={{ mainPrice }}>
      <SetMainPriceContext.Provider value={{ setMainPrice }}>
        <div className='flex min-h-screen items-center justify-center bg-gray-100'>
          <MainCardWithInput />
          <MainCardWithMoneyResult />
        </div>
      </SetMainPriceContext.Provider>
    </MainPriceContext.Provider>
  );
};

export default Main;

// <Circle variant="orange"></Circle>
