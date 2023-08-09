import { render, screen } from '@/utils/test-utils';
import { AlertMessage } from './alert-message';

test('renders the AlertMessage correctly when visible', () => {
  render(<AlertMessage visible={true} />);

  expect(
    screen.getByText('Máximo de 5 heróis favoritos atingidos!'),
  ).toBeInTheDocument();
});

test('does not render the AlertMessage when not visible', () => {
  render(<AlertMessage visible={false} />);

  expect(
    screen.queryByText('Máximo de 5 heróis favoritos atingidos!'),
  ).not.toBeInTheDocument();
});
