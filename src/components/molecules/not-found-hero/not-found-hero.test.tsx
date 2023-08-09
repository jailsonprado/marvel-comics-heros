import { render, screen } from '@/utils/test-utils';
import { NotFoundHero } from './not-found-hero';

test('renders the NotFoundHero correctly when visible', () => {
  render(<NotFoundHero visible={true} />);

  expect(
    screen.getByText('Nenhum herói favorito encontrado!'),
  ).toBeInTheDocument();
  expect(screen.getByAltText('dead pool surpreso')).toBeInTheDocument();
  expect(
    screen.getByText('Adicione um herói aos favoritos'),
  ).toBeInTheDocument();
});

test('does not render the NotFoundHero when not visible', () => {
  render(<NotFoundHero visible={false} />);

  expect(
    screen.queryByText('Nenhum herói favorito encontrado!'),
  ).not.toBeInTheDocument();
  expect(screen.queryByAltText('DeadPool2')).not.toBeInTheDocument();
  expect(
    screen.queryByText('Adicione um herói aos favoritos'),
  ).not.toBeInTheDocument();
});
