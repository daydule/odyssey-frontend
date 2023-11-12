'use client';

import { useState, createContext, useMemo, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
type MainPrice = {
  mainPrice: number;
};
type SetMainPrice = {
  setMainPrice: React.Dispatch<React.SetStateAction<number>>;
};

export const MainPriceContext = createContext({} as MainPrice);
export const SetMainPriceContext = createContext({} as SetMainPrice);

const PriceContext = ({ children }: Props) => {
  // 計算結果
  const [mainPrice, setMainPrice] = useState<number>(0);

  const mainPriceContextValue = useMemo(
    () => ({
      mainPrice,
    }),
    [mainPrice],
  );
  const setMainPriceContextValue = useMemo(
    () => ({
      setMainPrice,
    }),
    [],
  );

  return (
    <MainPriceContext.Provider value={mainPriceContextValue}>
      <SetMainPriceContext.Provider value={setMainPriceContextValue}>{children}</SetMainPriceContext.Provider>
    </MainPriceContext.Provider>
  );
};

export default PriceContext;
