import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Main from './Main';

describe('Main', () => {
  test('初期表示で左側にinputCard、右側にmoneyResultCardが表示されていること', () => {
    render(<Main />);

    const inputCard = screen.getByTestId('Main-inputCard');
    const topCard = screen.getByTestId('Main-topCard');
    const commodityResultCard = screen.getByTestId('Main-commodityResultCard');
    const moneyResultCard = screen.getByTestId('Main-moneyResultCard');

    waitFor(() => {
      expect(inputCard).toBeVisible();
      expect(topCard).not.toBeVisible();
      expect(commodityResultCard).not.toBeVisible();
      expect(moneyResultCard).toBeVisible();
    });
  });

  test('左側のカードを押下すると左側のカードの表示が切り替わること', () => {
    render(<Main />);

    const inputCard = screen.getByTestId('Main-inputCard');
    const topCard = screen.getByTestId('Main-topCard');

    userEvent.click(inputCard);

    waitFor(() => {
      expect(topCard).toBeVisible();
      expect(inputCard).not.toBeVisible();
    });
  });

  test('右側のカードを押下すると右側のカードの表示が切り替わること', () => {
    render(<Main />);

    const commodityResultCard = screen.getByTestId('Main-commodityResultCard');
    const moneyResultCard = screen.getByTestId('Main-moneyResultCard');

    userEvent.click(commodityResultCard);

    waitFor(() => {
      expect(moneyResultCard).toBeVisible();
      expect(commodityResultCard).not.toBeVisible();
    });
  });
});
