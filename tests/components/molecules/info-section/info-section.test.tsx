import { render } from '@testing-library/react';
import { InfoSection } from '@/components/molecules';
import { waitFor } from '@testing-library/dom';

describe('InfoSection component', () => {
  const defaultProps = {
    comicsCount: 10,
    moviesCount: 5,
    rating: 4,
    date: '2023-08-15',
  };

  it('should render InfoSection component with correct values', () => {
    const { getByText, getByAltText } = render(
      <InfoSection {...defaultProps} />,
    );

    expect(getByText('Quadrinhos')).toBeInTheDocument();
    expect(getByText('Filmes')).toBeInTheDocument();
    expect(getByText('Rating')).toBeInTheDocument();
    expect(getByText('Último quadrinho:')).toBeInTheDocument();

    expect(getByAltText('comics-icon')).toBeInTheDocument();
    expect(getByAltText('movies-icon')).toBeInTheDocument();
    expect(getByAltText('star-icon-1')).toBeInTheDocument();

    expect(getByText('10')).toBeInTheDocument();
    expect(getByText('5')).toBeInTheDocument();
    expect(getByText('2023-08-15')).toBeInTheDocument();

    const starIcons = document.querySelectorAll('img[alt="star-icon"]');
    waitFor(() => {
      expect(starIcons.length).toBe(defaultProps.rating);
    });
  });
});
