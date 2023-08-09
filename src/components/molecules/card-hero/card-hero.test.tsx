import { fireEvent, render, screen } from '@/utils/test-utils';
import { CardHero } from './card-hero';
import { waitFor } from '@testing-library/dom';

describe('CardHero component', () => {
  const mockProps = {
    id: 1,
    source: 'hero-image.jpg',
    altImage: 'image-hero',
    legend: 'Hero Legend',
    handleClick: jest.fn(),
    handleRemove: jest.fn(),
    navigateTo: jest.fn(),
    isFavorited: false,
    disabled: false,
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

  it('should call navigateTo when card is clicked', () => {
    render(<CardHero {...mockProps} />);

    const cardElement = screen.getByAltText('image-hero');
    fireEvent.click(cardElement);

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
  it('should not call handleClick when favorite logo is clicked and button is disabled', () => {
    const disabledProps = { ...mockProps, disabled: true };
    render(<CardHero {...disabledProps} />);

    const favoriteLogoElement = screen.getByAltText('favorite logo add');
    fireEvent.click(favoriteLogoElement);

    waitFor(() => {
      expect(mockProps.handleClick).not.toHaveBeenCalled();
    });
  });
});
