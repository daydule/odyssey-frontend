import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { SetMainPriceContext } from '../forest/PriceContext';
import MainCardWithMoneyResult from './MainCardWithInput';
import { CONSTANT } from '@/constant/default';

const annualIncomeInputTestId = 'MainCardInput-' + CONSTANT.LABEL.ANNUAL_INCOME;
const annualIncomeButtonTestId = 'MainCardInputButton-' + CONSTANT.LABEL.ANNUAL_INCOME;

const monthlyIncomeInputTestId = 'MainCardInput-' + CONSTANT.LABEL.MONTHLY_INCOME;
const monthlyIncomeButtonTestId = 'MainCardInputButton-' + CONSTANT.LABEL.MONTHLY_INCOME;

const hourlyIncomeInputTestId = 'MainCardInput-' + CONSTANT.LABEL.HOURLY_WAGE;
const hourlyIncomeButtonTestId = 'MainCardInputButton-' + CONSTANT.LABEL.HOURLY_WAGE;

const hourInputTestId = 'MainCardInput-' + CONSTANT.LABEL.HOUR;
const hourButtonTestId = 'MainCardInputButton-' + CONSTANT.LABEL.HOUR;

describe('MainCardWithMoneyResult', () => {
  const setMainPrice = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderComponent = () =>
    render(
      <SetMainPriceContext.Provider value={{ setMainPrice }}>
        <MainCardWithMoneyResult />
      </SetMainPriceContext.Provider>,
    );

  test('コンポーネントが正しくレンダリングされる', () => {
    const { getByText } = renderComponent();
    expect(getByText('Time is Money')).toBeInTheDocument();
  });

  test('年収入力時の状態が正しいこと', () => {
    renderComponent();

    const monthlyIncomeInputElement = screen.getByTestId(monthlyIncomeInputTestId) as HTMLInputElement;
    const hourlyIncomeInputElement = screen.getByTestId(hourlyIncomeInputTestId) as HTMLInputElement;

    // ボタンを入力しフォームアクティブ化
    fireEvent.click(screen.getByTestId(annualIncomeButtonTestId));
    // 年収の入力
    fireEvent.change(screen.getByTestId(annualIncomeInputTestId), {
      target: { value: '1200000' },
    });

    // 月収と時給の計算を確認
    const monthlyIncome = 1200000 / CONSTANT.CALC.MONTH_OF_THE_YEAR;
    const hourlyWage = monthlyIncome / CONSTANT.CALC.ONE_MONTH_WORKING_HOUR;

    expect(monthlyIncomeInputElement.value).toBe(Math.round(monthlyIncome).toString());
    expect(hourlyIncomeInputElement.value).toBe(Math.round(hourlyWage).toString());

    // 年収の入力（0の場合）
    fireEvent.change(screen.getByTestId(annualIncomeInputTestId), {
      target: { value: '0' },
    });

    // 月収と時給の計算を確認
    const monthlyIncomeZero = 0 / CONSTANT.CALC.MONTH_OF_THE_YEAR;
    const hourlyWageZero = monthlyIncomeZero / CONSTANT.CALC.ONE_MONTH_WORKING_HOUR;

    expect(monthlyIncomeInputElement.value).toBe('0');
    expect(hourlyIncomeInputElement.value).toBe('0');
  });

  test('月収入力時の状態が正しいこと', () => {
    renderComponent();

    const annualIncomeInputElement = screen.getByTestId(annualIncomeInputTestId) as HTMLInputElement;
    const hourlyIncomeInputElement = screen.getByTestId(hourlyIncomeInputTestId) as HTMLInputElement;

    // ボタンを入力しフォームアクティブ化
    fireEvent.click(screen.getByTestId(monthlyIncomeButtonTestId));
    // 月収の入力
    fireEvent.change(screen.getByTestId(monthlyIncomeInputTestId), { target: { value: '100000' } });

    // 年収と時給の計算を確認
    const annualIncome = 100000 * CONSTANT.CALC.MONTH_OF_THE_YEAR;
    const hourlyWage = 100000 / CONSTANT.CALC.ONE_MONTH_WORKING_HOUR;

    expect(annualIncomeInputElement.value).toBe(annualIncome.toString());
    expect(hourlyIncomeInputElement.value).toBe(Math.round(hourlyWage).toString());

    // 月収の入力(0の場合)
    fireEvent.change(screen.getByTestId(monthlyIncomeInputTestId), { target: { value: '0' } });

    // 年収と時給の計算を確認
    const annualIncomeZero = 0 * CONSTANT.CALC.MONTH_OF_THE_YEAR;
    const hourlyWageZero = 0 / CONSTANT.CALC.ONE_MONTH_WORKING_HOUR;

    expect(annualIncomeInputElement.value).toBe(annualIncomeZero.toString());
    expect(hourlyIncomeInputElement.value).toBe('0');
  });

  test('時給入力時の状態が正しいこと', () => {
    renderComponent();

    const monthlyIncomeInputElement = screen.getByTestId(monthlyIncomeInputTestId) as HTMLInputElement;
    const annualIncomeInputElement = screen.getByTestId(annualIncomeInputTestId) as HTMLInputElement;

    // ボタンを入力しフォームアクティブ化
    fireEvent.click(screen.getByTestId(hourlyIncomeButtonTestId));
    // 時給の入力
    fireEvent.change(screen.getByTestId(hourlyIncomeInputTestId), { target: { value: '1100' } });

    // 月収と年収の計算を確認
    const monthlyIncome = 1100 * CONSTANT.CALC.ONE_MONTH_WORKING_HOUR;
    const annualIncome = monthlyIncome * CONSTANT.CALC.MONTH_OF_THE_YEAR;

    expect(monthlyIncomeInputElement.value).toBe(monthlyIncome.toString());
    expect(annualIncomeInputElement.value).toBe(annualIncome.toString());

    // 時給の入力（0の場合）
    fireEvent.change(screen.getByTestId(hourlyIncomeInputTestId), { target: { value: '0' } });

    // 月収と年収の計算を確認
    const monthlyIncomeZero = 0 * CONSTANT.CALC.ONE_MONTH_WORKING_HOUR;
    const annualIncomeZero = monthlyIncomeZero * CONSTANT.CALC.MONTH_OF_THE_YEAR;

    expect(monthlyIncomeInputElement.value).toBe(monthlyIncomeZero.toString());
    expect(annualIncomeInputElement.value).toBe(annualIncomeZero.toString());
  });

  // ボタンクリックイベントのテスト
  it('計算ボタンクリック時にsetMainPriceが呼ばれる', () => {
    const { getByText } = renderComponent();
    const calculateButton = getByText('計算');

    // ボタンを入力しフォームアクティブ化
    fireEvent.click(screen.getByTestId(hourlyIncomeButtonTestId));
    // 時給の入力
    fireEvent.change(screen.getByTestId(hourlyIncomeInputTestId), { target: { value: '1000' } });
    // ボタンを入力しフォームアクティブ化
    fireEvent.click(screen.getByTestId(hourButtonTestId));
    // 時間の入力
    fireEvent.change(screen.getByTestId(hourInputTestId), { target: { value: '100' } });

    fireEvent.click(calculateButton);
    expect(setMainPrice).toHaveBeenCalled();
  });
  it('稼働時間を0で入力している場合、計算ボタンクリック時にsetMainPriceが呼ばれない', () => {
    const { getByText } = renderComponent();
    const calculateButton = getByText('計算');

    // ボタンを入力しフォームアクティブ化
    fireEvent.click(screen.getByTestId(hourlyIncomeButtonTestId));
    // 時給の入力
    fireEvent.change(screen.getByTestId(hourlyIncomeInputTestId), { target: { value: '1000' } });
    // ボタンを入力しフォームアクティブ化
    fireEvent.click(screen.getByTestId(hourButtonTestId));
    // 時間の入力
    fireEvent.change(screen.getByTestId(hourInputTestId), { target: { value: '0' } });

    fireEvent.click(calculateButton);
    expect(setMainPrice).not.toHaveBeenCalled();
  });
});
