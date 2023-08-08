import { render } from '@testing-library/react';
import RoutesManager from '@/routes';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

jest.mock('@/assets/svg/svg-mapped', () => ({
  Favorito01Svg: 'favorito01.svg',
  Favorito02Svg: 'favorito02.svg',
  LogoSvg: 'logo.svg',
  IcHeroiSvg: 'ic_heroi.svg',
  ToggleOffSvg: 'toggle_off.svg',
  ToggleOnSvg: 'toggle_on.svg',
  IcBuscaMenorSvg: 'ic_busca_menor.svg',
}));

test('renders RoutesManager without errors', () => {
  render(
    <Provider store={store}>
      <RoutesManager />
    </Provider>,
  );
});
