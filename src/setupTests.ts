// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/dom';

jest.mock('@/assets/svg/svg-mapped', () => ({
  Favorito01Svg: 'favorito01.svg',
  Favorito02Svg: 'favorito02.svg',
  LogoSvg: 'logo.svg',
  IcHeroiSvg: 'ic_heroi.svg',
  ToggleOffSvg: 'toggle_off.svg',
  ToggleOnSvg: 'toggle_on.svg',
  IcBuscaMenorSvg: 'ic_busca_menor.svg',
  DeadPool: 'deadpool.png',
}));
