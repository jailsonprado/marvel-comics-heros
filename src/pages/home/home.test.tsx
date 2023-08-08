import { render } from '@testing-library/react';

import { HomePage } from '@/pages/home/home';
import { waitFor } from '@testing-library/dom';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { BrowserRouter } from 'react-router-dom';

jest.mock('@/assets/svg/svg-mapped', () => ({
  Favorito01Svg: 'favorito01.svg',
  Favorito02Svg: 'favorito02.svg',
  LogoSvg: 'logo.svg',
  IcHeroiSvg: 'ic_heroi.svg',
  ToggleOffSvg: 'toggle_off.svg',
  ToggleOnSvg: 'toggle_on.svg',
  IcBuscaMenorSvg: 'ic_busca_menor.svg',
}));

describe('HomePage test render screen', () => {
  test('should render home page', () => {
    const home = render(
      <Provider store={store}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </Provider>,
    );

    waitFor(() => {
      expect(home).toBeDefined();
    });
  });
});
