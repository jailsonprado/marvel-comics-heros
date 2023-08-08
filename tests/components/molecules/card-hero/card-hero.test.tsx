import { render, screen, fireEvent } from '@/tests/test-utils';
import { CardHero } from '@/components/molecules';
import { waitFor } from '@testing-library/dom';

describe('CardHero component', () => {
  const mockProps = {
    id: 1,
    source: 'hero-image.jpg',
    altImage: 'Hero Image',
    legend: 'Hero Legend',
    handleClick: jest.fn(),
    handleRemove: jest.fn(),
    navigateTo: jest.fn(),
    isFavorited: false,
  };

  it('should render the CardHero component with the correct props', () => {
    render(<CardHero {...mockProps} />);

    const imageElement = screen.getByAltText(mockProps.altImage);
    const legendElement = screen.getByText(mockProps.legend);
    const favoriteLogoElement = screen.getByAltText('favorite logo add');

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', mockProps.source);
    expect(legendElement).toBeInTheDocument();
    expect(favoriteLogoElement).toBeInTheDocument();
  });

  it('should call handleClick when favorite logo is not favorited', () => {
    render(<CardHero {...mockProps} />);

    const favoriteLogoElement = screen.getByAltText('favorite logo add');
    fireEvent.click(favoriteLogoElement);

    expect(mockProps.handleClick).toHaveBeenCalledTimes(1);
  });

  it('should call handleClick navigateTo', () => {
    render(<CardHero {...mockProps} />);

    const navigateButton = screen.getByAltText('Hero Image');
    fireEvent.click(navigateButton);

    waitFor(() => {
      expect(mockProps.navigateTo).toHaveBeenCalledTimes(1);
    });
  });

  it('should call handleRemove when favorite logo is favorited', () => {
    const favoritedProps = { ...mockProps, isFavorited: true };
    render(<CardHero {...favoritedProps} />);

    const favoriteLogoElement = screen.getByAltText('favorite logo remove');
    fireEvent.click(favoriteLogoElement);

    expect(mockProps.handleRemove).toHaveBeenCalledTimes(1);
  });
});
