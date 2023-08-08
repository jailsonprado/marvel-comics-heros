import { render, fireEvent } from '@testing-library/react';
import { DescriptionHero } from '@/components/molecules'; // Adjust the import path accordingly
import { waitFor } from '@testing-library/dom';

describe('DescriptionHero component', () => {
  const defaultProps = {
    hero: 'HULK',
    description: 'description hero anywhere',
    isFavorited: false,
    handleClick: jest.fn(),
    handleRemove: jest.fn(),
  };

  it('should render DescriptionHero component with correct values and add button when not favorited', () => {
    const { getByText, getByAltText, getByTestId } = render(
      <DescriptionHero {...defaultProps} />,
    );

    expect(getByText('HULK')).toBeInTheDocument();
    expect(getByText('description hero anywhere')).toBeInTheDocument();
    expect(getByAltText('favorite logo add')).toBeInTheDocument();
    waitFor(() => {
      expect(getByTestId('add-favorite-button')).toBeInTheDocument();
    });
  });

  it('should render DescriptionHero component with correct values and remove button when favorited', () => {
    const { getByText, getByAltText, getByTestId } = render(
      <DescriptionHero {...defaultProps} isFavorited={true} />,
    );

    expect(getByText('HULK')).toBeInTheDocument();
    expect(getByText('description hero anywhere')).toBeInTheDocument();
    expect(getByAltText('favorite logo remove')).toBeInTheDocument();
    waitFor(() => {
      expect(getByTestId('add-favorite-button')).toBeInTheDocument();
    });
  });

  it('should call handleClick when the add button is clicked', () => {
    const { getByAltText } = render(<DescriptionHero {...defaultProps} />);
    const addButton = getByAltText('favorite logo add');
    fireEvent.click(addButton);
    expect(defaultProps.handleClick).toHaveBeenCalled();
  });

  it('should call handleRemove when the remove button is clicked', () => {
    const { getByAltText } = render(
      <DescriptionHero {...defaultProps} isFavorited={true} />,
    );
    const removeButton = getByAltText('favorite logo remove');
    fireEvent.click(removeButton);
    expect(defaultProps.handleRemove).toHaveBeenCalled();
  });
});
