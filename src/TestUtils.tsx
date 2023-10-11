import { render, RenderOptions } from '@testing-library/react';

// Components
import AppProviders from './components/providers/AppProviders';

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AppProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
