import '@testing-library/jest-dom';

import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import config from 'theme/config';

const ThemeRenderer: FC = ({ children }) => (
  <ThemeProvider theme={config}>{children}</ThemeProvider>
);

const customRenderer = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult =>
  render(ui, {
    wrapper: ThemeRenderer,
    ...options,
  });

export * from '@testing-library/react';
export { customRenderer as render };
