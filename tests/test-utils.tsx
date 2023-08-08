import { render, RenderOptions, RenderResult } from '@testing-library/react';
import actualAxios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import { BrowserRouter } from 'react-router-dom';

import { HookProvider } from '@/context';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

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

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything from '@testing-library/react'
// eslint-disable-next-line import/export
export * from '@testing-library/react';

// eslint-disable-next-line import/export
export { customRender as render, AllTheProviders as HooksProviders };

export const mockAxios = Object.assign(jest.fn(actualAxios), actualAxios);
export const axiosAdapter = new AxiosMockAdapter(mockAxios, {
  delayResponse: 100,
  onNoMatch: 'throwException',
}) as AxiosMockAdapter & {
  axiosInstance: typeof mockAxios;
};
