// eslint-disable-next-line import/default

import '@testing-library/jest-dom/extend-expect';
import App from '@/App';
import { render, screen } from '@testing-library/react';

jest.mock('@/assets/svg/svg-mapped', () => ({
  Favorito01Svg: 'favorito01.svg',
  Favorito02Svg: 'favorito02.svg',
  LogoSvg: 'logo.svg',
  IcHeroiSvg: 'ic_heroi.svg',
  ToggleOffSvg: 'toggle_off.svg',
  ToggleOnSvg: 'toggle_on.svg',
  IcBuscaMenorSvg: 'ic_busca_menor.svg',
}));
test('renders react component', () => {
  render(<App />);
  const divElement = screen.getByText(/EXPLORE O UNIVERSO/i);
  expect(divElement).toBeInTheDocument();
});
