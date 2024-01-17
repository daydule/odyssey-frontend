import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import MainCardInput from './MainCardInput';

describe('MainCardInputコンポーネント', () => {
  test('正しくコンポーネントがレンダリングされていること', () => {
    const handleChange = jest.fn();
    render(
      <MainCardInput
        label='Test'
        handleChange={handleChange}
        value={0}
        placeholder='Test Placeholder'
        isActive={false}
      />,
    );
    expect(screen.getByLabelText('Test')).toBeInTheDocument();
  });

  test('入力変更時にhandleChangeが呼び出される', () => {
    const handleChange = jest.fn();
    render(
      <MainCardInput
        label='Test'
        handleChange={handleChange}
        value={0}
        placeholder='Test Placeholder'
        isActive={false}
      />,
    );
    fireEvent.change(screen.getByTestId('MainCardInput-Test'), { target: { value: '23' } });
    expect(handleChange).toHaveBeenCalledWith(23);
  });

  test('入力変更時に数値以外を入力した場合にhandleChangeが呼び出されないこと', () => {
    const handleChange = jest.fn();
    render(
      <MainCardInput
        label='Test'
        handleChange={handleChange}
        value={0}
        placeholder='Test Placeholder'
        isActive={false}
      />,
    );
    fireEvent.change(screen.getByTestId('MainCardInput-Test'), { target: { value: 'aaa' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('isActiveプロパティに基づいて異なる入力タイプをレンダリングする', () => {
    const handleChange = jest.fn();
    const { rerender } = render(
      <MainCardInput
        label='Test'
        handleChange={handleChange}
        value={0}
        placeholder='Test Placeholder'
        isActive={false}
      />,
    );
    expect(screen.getByTestId('MainCardInput-Test')).not.toBeDisabled();

    rerender(
      <MainCardInput
        label='Test'
        handleChange={handleChange}
        value={0}
        placeholder='Test Placeholder'
        isActive={true}
      />,
    );
    expect(screen.getByTestId('MainCardInput-Test')).toBeDisabled();
  });

  test('SVGアイコンがクリックされた時にhandleClickが呼び出される', () => {
    const handleClick = jest.fn();
    render(
      <MainCardInput
        label='Test'
        handleChange={() => {}}
        value={0}
        placeholder='Test Placeholder'
        handleClick={handleClick}
        isActive={true}
      />,
    );
    fireEvent.click(screen.getByTestId('MainCardInputButton-Test'));
    expect(handleClick).toHaveBeenCalledWith('Test');
  });
});
