import { useContext, useEffect, useState } from 'react';
import { SetMainPriceContext } from '../../components/forest/PriceContext';
import Button from '../../components/leaf/Button';
import MainCard from '../../components/tree/MainCard';
import { CONSTANT } from '../../constant/default';
import { useNotInitializingEffect } from '../../hooks/useNotInitializingEffect';
import MainCardInput from '../leaf/MainCardInput';

const MainCardWithMoneyResult = () => {
  // 入力フォームのアクティブ管理
  const [activeInput, setActiveInput] = useState<string>(CONSTANT.LABEL.ANNUAL_INCOME);

  // 収入（年収・月給・時給）入力値
  const [currentInput, setCurrentInput] = useState<number>(0);
  const [annualIncome, setAnnualIncome] = useState<number>(0);
  const [monthlyIncome, setMonthlyIncome] = useState<number>(0);
  const [hourlyWage, setHourlyWage] = useState<number>(0);
  const [hour, setHour] = useState<number>(0);

  const { setMainPrice } = useContext(SetMainPriceContext);

  // 無駄な計算処理が走らないよう、初回レンダリング時にはEffectが動作しない処理を実行
  const isFirstRender = useNotInitializingEffect();

  const calcMainPrice = () => {
    if (!hour) return;

    const mainPrice = hourlyWage * hour;
    setMainPrice(mainPrice);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      let monthlyIncomeData = 0;
      let annualIncomeData = 0;
      let hourlyWage = 0;

      switch (activeInput) {
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
  }, [currentInput]);

  return (
    <MainCard title='Time is Money' headerBgColor='bg-cyan-400'>
      <div className='flex h-full w-full flex-col justify-between'>
        <MainCardInput
          label={CONSTANT.LABEL.ANNUAL_INCOME}
          handleChange={setCurrentInput}
          value={annualIncome}
          placeholder='入力してください'
          handleActive={activeInput === CONSTANT.LABEL.ANNUAL_INCOME ? undefined : setActiveInput}
        />
        <MainCardInput
          label={CONSTANT.LABEL.MONTHLY_INCOME}
          handleChange={setCurrentInput}
          value={monthlyIncome}
          placeholder='入力してください'
          handleActive={activeInput === CONSTANT.LABEL.MONTHLY_INCOME ? undefined : setActiveInput}
        />
        <MainCardInput
          label={CONSTANT.LABEL.HOURLY_WAGE}
          handleChange={setCurrentInput}
          value={hourlyWage}
          placeholder='入力してください'
          handleActive={activeInput === CONSTANT.LABEL.HOURLY_WAGE ? undefined : setActiveInput}
        />
        <MainCardInput label={CONSTANT.LABEL.HOUR} handleChange={setHour} value={hour} placeholder='入力してください' />
        <Button buttonColor='bg-cyan-400' buttonText='計算' handleClick={calcMainPrice} />
      </div>
    </MainCard>
  );
};

export default MainCardWithMoneyResult;
