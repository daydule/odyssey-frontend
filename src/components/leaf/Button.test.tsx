import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Buttonコンポーネントのテスト', () => {
  it('ボタンが正しく表示されること', () => {
    const buttonColor = 'bg-blue-500';
    const buttonText = 'Click me';
    const handleClick = jest.fn();

    render(<Button buttonColor={buttonColor} buttonText={buttonText} handleClick={handleClick} />);

    const button = screen.getByRole('button', { name: buttonText });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(buttonColor);
    expect(button).toHaveValue(buttonText);
  });

  it('ボタンがクリックされた時に、指定された関数が呼ばれること', () => {
    const buttonColor = 'bg-red-500';
    const buttonText = 'Delete';
    const handleClick = jest.fn();

    render(<Button buttonColor={buttonColor} buttonText={buttonText} handleClick={handleClick} />);

    const button = screen.getByRole('button', { name: buttonText });

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });
});
