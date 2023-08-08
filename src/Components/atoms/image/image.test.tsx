import { render, screen, fireEvent } from '@testing-library/react';
import { Image } from './image';
import { ImageProps } from './types';

describe('Image Component', () => {
  const defaultProps: ImageProps = {
    src: 'test.jpg',
    descriptionAlt: 'Test image',
  };

  it('renders the image with correct alt and src attributes', () => {
    render(<Image {...defaultProps} />);
    const imgElement = screen.getByAltText(defaultProps.descriptionAlt || '');
    expect(imgElement).toHaveAttribute('src', defaultProps.src);
  });

  it('calls the handleClick prop when the image is clicked', () => {
    const mockHandleClick = jest.fn();
    render(<Image {...defaultProps} handleClick={mockHandleClick} />);
    const imgElement = screen.getByAltText(defaultProps.descriptionAlt || '');
    fireEvent.click(imgElement);
    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });
});
