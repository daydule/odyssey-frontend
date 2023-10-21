import { useContext, useEffect, useState } from 'react';
import { SetMainPriceContext } from '@/components/forest/Main';
import Button from '@/components/leaf/Button';
import Input from '@/components/leaf/Input';
import MainCard from '@/components/tree/MainCard';
import { useNotInitializingEffect } from '@/hooks/useNotInitializingEffect';

const MainCardWithMoneyResult = () => {
  // 入力フォームのアクティブ管理
  const [active, setActive] = useState<string>('年収');

  // ユーザー入力値
  const [changeState, setChangeState] = useState<number>(0);
  const [annualIncome, setAnnualIncome] = useState<number>(0);
  const [monthlyIncome, setMonthlyIncome] = useState<number>(0);
  const [hourlyWage, setHourlyWage] = useState<number>(0);
  const [hour, setHour] = useState<number>(0);

  const { setMainPrice } = useContext(SetMainPriceContext);

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

      switch (active) {
        case '年収':
          monthlyIncomeData = changeState / 12;
          hourlyWage = monthlyIncomeData / 173;

          setAnnualIncome(changeState);

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
        case '月収':
          annualIncomeData = changeState * 12;
          hourlyWage = changeState / 173;

          setMonthlyIncome(changeState);
          setAnnualIncome(annualIncomeData);

          if (hourlyWage > 1) {
            setHourlyWage(Math.round(hourlyWage));
          } else {
            setHourlyWage(0);
          }
          break;
        case '時給':
          monthlyIncomeData = changeState * 173;
          annualIncomeData = monthlyIncomeData * 12;

          setHourlyWage(changeState);
          setMonthlyIncome(monthlyIncomeData);
          setAnnualIncome(annualIncomeData);
          break;
      }
    }
  }, [changeState]);

  return (
    <MainCard title='Time is Money' headerBgColor='bg-cyan-400'>
      <div className='flex h-full w-full flex-col justify-between'>
        <Input
          label='年収'
          handleChange={setChangeState}
          value={annualIncome}
          handleActive={active === '年収' ? '' : setActive}
        />
        <Input
          label='月収'
          handleChange={setChangeState}
          value={monthlyIncome}
          handleActive={active === '月収' ? '' : setActive}
        />
        <Input
          label='時給'
          handleChange={setChangeState}
          value={hourlyWage}
          handleActive={active === '時給' ? '' : setActive}
        />
        <Input label='稼働時間' handleChange={setHour} value={hour} handleActive={''} />
        <Button buttonColor='bg-cyan-400' buttonText='計算' handleClick={calcMainPrice} />
      </div>
    </MainCard>
  );
};

export default MainCardWithMoneyResult;
