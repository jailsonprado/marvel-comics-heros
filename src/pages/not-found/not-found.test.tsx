import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { NotFoundPage } from './not-found';

import { BrowserRouter } from 'react-router-dom';

test('renders the NotFoundPage correctly', () => {
  render(
    <BrowserRouter>
      <NotFoundPage />
    </BrowserRouter>,
  );

  expect(screen.getByText('404')).toBeInTheDocument();
  expect(screen.getByText('Pagina não encontrada...')).toBeInTheDocument();
  expect(screen.getByAltText('dead pool surpreso')).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: 'Ir para Home' }),
  ).toBeInTheDocument();
});

test('navigates to home page when button is clicked', () => {
  const mockNavigate = jest.fn();
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
  }));

  render(
    <BrowserRouter>
      <NotFoundPage />
    </BrowserRouter>,
  );

  fireEvent.click(screen.getByRole('button', { name: 'Ir para Home' }));
  waitFor(() => {
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
