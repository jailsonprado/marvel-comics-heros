/* eslint-disable @typescript-eslint/no-var-requires */
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HeaderDetails } from '@/components/organism';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('HeaderDetails component', () => {
  it('should render the logo and search input with the correct props', () => {
    render(
      <MemoryRouter>
        <HeaderDetails />
      </MemoryRouter>,
    );

    const logoElement = screen.getByAltText('logo marvel');
    const searchInput = screen.getByPlaceholderText('Procure por herois');

    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute('src', 'logo_menor.svg');
    expect(searchInput).toBeInTheDocument();
  });

  it('should call navigate when the search input is clicked', () => {
    const mockNavigate = jest.fn();
    require('react-router-dom').useNavigate.mockReturnValue(mockNavigate);

    render(
      <MemoryRouter>
        <HeaderDetails />
      </MemoryRouter>,
    );

    const searchInput = screen.getByPlaceholderText('Procure por herois');
    fireEvent.click(searchInput);

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
