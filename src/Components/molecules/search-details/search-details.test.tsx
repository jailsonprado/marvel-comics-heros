import { render, fireEvent, screen } from '@testing-library/react';
import { SearchHeroDetails } from '@/components/molecules';
describe('SearchHeroDetails component', () => {
  const mockHandleChange = jest.fn();
  const mockPlaceholder = 'Search heroes...';

  it('should render search input with placeholder', () => {
    render(
      <SearchHeroDetails
        handleChange={mockHandleChange}
        placeholder={mockPlaceholder}
      />,
    );

    const searchInput = screen.getByPlaceholderText(mockPlaceholder);
    expect(searchInput).toBeInTheDocument();
  });

  it('should call handleChange when search input is clicked', () => {
    render(
      <SearchHeroDetails
        handleChange={mockHandleChange}
        placeholder={mockPlaceholder}
      />,
    );

    const searchInput = screen.getByPlaceholderText(mockPlaceholder);
    fireEvent.click(searchInput);
    expect(mockHandleChange).toHaveBeenCalled();
  });

  it('should render search icon', () => {
    render(
      <SearchHeroDetails
        handleChange={mockHandleChange}
        placeholder={mockPlaceholder}
      />,
    );

    const searchIcon = screen.getByTestId('icone-de-busca');
    expect(searchIcon).toBeInTheDocument();
  });
});
