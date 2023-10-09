import type { Preview } from '@storybook/react';
import '../src/app/globals.css';
import Image from 'next/image';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

Image.propTypes = {
  unoptimized: undefined,
};

Image.defaultProps = {
  unoptimized: true,
};

export default preview;
