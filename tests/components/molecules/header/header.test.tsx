import { render, screen } from '@/tests/test-utils';
import { Header } from '@/components/organism';

test('renders Header component', () => {
  render(<Header />);

  const exploreTextElement = screen.getByText(/EXPLORE O UNIVERSO/i);
  const descriptionTextElement = screen.getByText(
    /Mergulhe no dominio deslumbrante de todos os personagens classicos que voce ama - e aqueles que voce descobrira em breve!/i,
  );

  expect(exploreTextElement).toBeInTheDocument();
  expect(descriptionTextElement).toBeInTheDocument();
});
