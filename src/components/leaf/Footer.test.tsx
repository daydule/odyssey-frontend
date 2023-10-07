import { render, screen, getAllByRole } from '@testing-library/react';
import { Footer } from './Footer';

describe('フッターコンポーネントのテスト', () => {
  it('コピーライトが表示されること', () => {
    const { container } = render(<Footer />);

    expect(container.innerHTML).toMatch(/© 2023 Habitat Hub/);
  });
});
