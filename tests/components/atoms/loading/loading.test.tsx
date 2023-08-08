import { Loading } from '@/components/atoms';

import { render, screen } from '@testing-library/react';

test('renders spinner and text when loading is true', () => {
  render(<Loading loading={true} />);

  const spinner = screen.getByTestId('loading-spinner');
  expect(spinner).toBeInTheDocument();

  const textElement = screen.getByText('Um momento...', { exact: false });
  expect(textElement).toBeInTheDocument();
});

test('does not render spinner and text when loading is false', () => {
  render(<Loading loading={false} />);

  const spinner = screen.queryByTestId('loading-spinner');
  expect(spinner).not.toBeInTheDocument();

  const textElement = screen.queryByText('Um momento...', { exact: false });
  expect(textElement).not.toBeInTheDocument();
});
