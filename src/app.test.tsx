import App from '@/App';
import { render } from '@testing-library/react';

jest.mock('@/assets/svg/svg-mapped', () => ({
  Favorito01Svg: 'favorito01.svg',
  Favorito02Svg: 'favorito02.svg',
  LogoSvg: 'logo.svg',
  IcHeroiSvg: 'ic_heroi.svg',
  ToggleOffSvg: 'toggle_off.svg',
  ToggleOnSvg: 'toggle_on.svg',
  IcBuscaMenorSvg: 'ic_busca_menor.svg',
}));
describe('App render screen', () => {
  it('should render component', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('icone-de-busca')).toBeInTheDocument();
  });
});
