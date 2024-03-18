import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { getProducts } from '../../api/getProduct';
import { SetMainPriceContext } from '../../components/forest/PriceContext';
import Button from '../../components/leaf/Button';
import MainCard from '../../components/tree/MainCard';
import { CONSTANT } from '../../constant/default';
import { useNotInitializingEffect } from '../../hooks/useNotInitializingEffect';
import { Commodity } from '../leaf/CommodityCard';
import MainCardInput from '../leaf/MainCardInput';

interface MainCardWithInputProps {
  setCommodities: React.Dispatch<React.SetStateAction<Commodity[]>>;
  rotateCard?: () => void;
}

const MainCardWithInput = ({ setCommodities, rotateCard }: MainCardWithInputProps) => {
  const firstInputState = (stateType: string): number => {
    const previousHourlyWage = Number(localStorage.getItem('hourlyWage'));

    if (previousHourlyWage) {
      switch (stateType) {
        case CONSTANT.LABEL.ANNUAL_INCOME:
          return currentInput * CONSTANT.CALC.ONE_MONTH_WORKING_HOUR * CONSTANT.CALC.MONTH_OF_THE_YEAR;
        case CONSTANT.LABEL.MONTHLY_INCOME:
          return currentInput * CONSTANT.CALC.ONE_MONTH_WORKING_HOUR;
        case CONSTANT.LABEL.HOURLY_WAGE:
          return previousHourlyWage;
      }
    }

    return 0;
  };
  // 入力フォームのアクティブ管理
  const [handleClick, setHandleClick] = useState<string>('');

  // 収入（年収・月給・時給）入力値
  const [currentInput, setCurrentInput] = useState<number>(() => {
    return firstInputState(CONSTANT.LABEL.HOURLY_WAGE);
  });
  const [annualIncome, setAnnualIncome] = useState<number>(() => {
    return firstInputState(CONSTANT.LABEL.ANNUAL_INCOME);
  });
  const [monthlyIncome, setMonthlyIncome] = useState<number>(() => {
    return firstInputState(CONSTANT.LABEL.MONTHLY_INCOME);
  });
  const [hourlyWage, setHourlyWage] = useState<number>(() => {
    return firstInputState(CONSTANT.LABEL.HOURLY_WAGE);
  });
  const [hour, setHour] = useState<number>(0);

  const { setMainPrice } = useContext(SetMainPriceContext);

  // 無駄な計算処理が走らないよう、初回レンダリング時にはEffectが動作しない処理を実行
  const isFirstRender = useNotInitializingEffect();

  const calcMainPrice = () => {
    if (!hour) return;

    const mainPrice = hourlyWage * hour;
    setMainPrice(mainPrice);

    localStorage.setItem('hourlyWage', String(hourlyWage));

    async function fetchData() {
      const randomKeyword = CONSTANT.PRODUCT_KEYWORDS[Math.floor(Math.random() * CONSTANT.PRODUCT_KEYWORDS.length)];

      const products = await getProducts({
        keyword: randomKeyword,
        genreId: '0',
        minPrice: Math.round(mainPrice * 0.9),
        maxPrice: mainPrice,
        hits: 5,
      });
      setCommodities(products);
    }
    void fetchData();
  };

  useEffect(() => {
    if (isFirstRender.current) {
      let monthlyIncomeData = 0;
      let annualIncomeData = 0;
      let hourlyWage = 0;

      switch (handleClick) {
        case CONSTANT.LABEL.ANNUAL_INCOME:
          monthlyIncomeData = currentInput / CONSTANT.CALC.MONTH_OF_THE_YEAR;
          hourlyWage = monthlyIncomeData / CONSTANT.CALC.ONE_MONTH_WORKING_HOUR;

          setAnnualIncome(currentInput);

          if (monthlyIncomeData > 1) {
            setMonthlyIncome(Math.round(monthlyIncomeData));
          } else {
            setMonthlyIncome(0);
          }

          if (hourlyWage > 1) {
            setHourlyWage(Math.round(hourlyWage));
          } else {
            setHourlyWage(0);
          }
          break;
        case CONSTANT.LABEL.MONTHLY_INCOME:
          annualIncomeData = currentInput * CONSTANT.CALC.MONTH_OF_THE_YEAR;
          hourlyWage = currentInput / CONSTANT.CALC.ONE_MONTH_WORKING_HOUR;

          setMonthlyIncome(currentInput);
          setAnnualIncome(annualIncomeData);

          if (hourlyWage > 1) {
            setHourlyWage(Math.round(hourlyWage));
          } else {
            setHourlyWage(0);
          }
          break;
        case CONSTANT.LABEL.HOURLY_WAGE:
          monthlyIncomeData = currentInput * CONSTANT.CALC.ONE_MONTH_WORKING_HOUR;
          annualIncomeData = monthlyIncomeData * CONSTANT.CALC.MONTH_OF_THE_YEAR;

          setHourlyWage(currentInput);
          setMonthlyIncome(monthlyIncomeData);
          setAnnualIncome(annualIncomeData);
          break;
      }
    }
  }, [currentInput, handleClick, isFirstRender]);

  return (
    <MainCard title='Time is Money' headerBgColor='bg-cyan-400' rotateCard={rotateCard}>
      <div className='flex h-full w-full flex-col justify-between'>
        <MainCardInput
          label={CONSTANT.LABEL.ANNUAL_INCOME}
          handleChange={setCurrentInput}
          value={annualIncome}
          placeholder='入力してください'
          handleClick={setHandleClick}
          isActive={handleClick !== CONSTANT.LABEL.ANNUAL_INCOME}
          unit='¥'
          unitPosition='left'
        />
        <MainCardInput
          label={CONSTANT.LABEL.MONTHLY_INCOME}
          handleChange={setCurrentInput}
          value={monthlyIncome}
          placeholder='入力してください'
          handleClick={setHandleClick}
          isActive={handleClick !== CONSTANT.LABEL.MONTHLY_INCOME}
          unit='¥'
          unitPosition='left'
        />
        <MainCardInput
          label={CONSTANT.LABEL.HOURLY_WAGE}
          handleChange={setCurrentInput}
          value={hourlyWage}
          placeholder='入力してください'
          handleClick={setHandleClick}
          isActive={handleClick !== CONSTANT.LABEL.HOURLY_WAGE}
          unit='¥'
          unitPosition='left'
        />
        <MainCardInput
          label={CONSTANT.LABEL.HOUR}
          handleChange={setHour}
          value={hour}
          placeholder='入力してください'
          handleClick={setHandleClick}
          isActive={handleClick !== CONSTANT.LABEL.HOUR}
          unit='h'
          unitPosition='right'
        />
        <Button buttonColor='bg-cyan-400' buttonText='計算' handleClick={calcMainPrice} />
      </div>
    </MainCard>
  );
};

export default MainCardWithInput;
