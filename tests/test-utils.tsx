import { render, RenderOptions, RenderResult } from '@testing-library/react';
import actualAxios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import { BrowserRouter } from 'react-router-dom';

import { HookProvider } from '@/context';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

// Wrap all necessary providers here
const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <HookProvider>{children}</HookProvider>
      </Provider>
    </BrowserRouter>
  );
};

// The main wrapper for the test, providing all necessary context and providers
const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything from '@testing-library/react'
// eslint-disable-next-line import/export
export * from '@testing-library/react';

// Override render method with customRender
// eslint-disable-next-line import/export
export { customRender as render, AllTheProviders as HooksProviders };

// Export custom axios mock adapter and its instance
export const mockAxios = Object.assign(jest.fn(actualAxios), actualAxios);
export const axiosAdapter = new AxiosMockAdapter(mockAxios, {
  delayResponse: 100,
  onNoMatch: 'throwException',
}) as AxiosMockAdapter & {
  axiosInstance: typeof mockAxios;
};
