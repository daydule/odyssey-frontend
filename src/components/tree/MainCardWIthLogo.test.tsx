import { render } from '@testing-library/react';
import React from 'react';
import MainCardWithLogo from './MainCardWithLogo';

describe('MainCardWithLogo', () => {
  it('renders the MainCard component with correct props', () => {
    const { getByText, getByAltText } = render(<MainCardWithLogo />);

    // Assert that the MainCard component is rendered
    const mainCardElement = getByText('Time is Money');
    expect(mainCardElement).toBeInTheDocument();

    // Assert that the header background color is set correctly
    expect(mainCardElement).toHaveStyle('background-color: bg-yellow-200');

    // Assert that the logo image is rendered with the correct alt text
    const logoImage = getByAltText('トップカード画像');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', '/images/header_logo.png');
  });
});
