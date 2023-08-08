import { render, screen } from '@/test-utils';
import { Footer } from './footer';

test('renders Footer component', () => {
  render(<Footer />);

  const devTextElement = screen.getByText('Desenvolvido por Jailson Prado');
  const marvelTextElement = screen.getByText(
    'Data provided by Marvel. © 2023 MARVEL',
  );

  expect(devTextElement).toBeInTheDocument();
  expect(marvelTextElement).toBeInTheDocument();
});
