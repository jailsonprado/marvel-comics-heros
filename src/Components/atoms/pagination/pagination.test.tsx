import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from './pagination';
import { calculatePagesToShow } from '@/components/atoms/pagination/utils/pagination.utils';
import { waitFor } from '@testing-library/dom';

describe('calculatePagesToShow', () => {
  it('should return correct pages array when totalPages is less than pagesToShow', () => {
    const currentPage = 1;
    const totalPages = 4;
    const pagesToShow = 5;
    const expectedPages = [1, 2, 3, 4];

    const result = calculatePagesToShow(currentPage, totalPages, pagesToShow);

    waitFor(() => {
      expect(result).toEqual(expectedPages);
    });
  });

  it('should return correct pages array when totalPages is greater than pagesToShow', async () => {
    const currentPage = 4;
    const totalPages = 10;
    const pagesToShow = 5;
    const expectedPages = [2, 3, 4, 5, 6];

    const result = calculatePagesToShow(currentPage, totalPages, pagesToShow);

    waitFor(() => {
      expect(result).toEqual(expectedPages);
    });
  });
});

describe('Pagination', () => {
  const onPageChangeMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the correct number of pages', () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={10}
        onPageChange={onPageChangeMock}
      />,
    );

    const paginationItems = screen.getAllByTestId('pagination-container');
    waitFor(() => {
      expect(paginationItems.length).toBe(5);
    });
  });

  it('should highlight the active page correctly', () => {
    render(
      <Pagination
        currentPage={5}
        totalPages={10}
        onPageChange={onPageChangeMock}
      />,
    );

    const activePage = screen.getByTestId('pagination-5');
    expect(activePage.textContent).toBe('5');
  });

  it('should call onPageChange when a page is clicked', () => {
    render(
      <Pagination
        currentPage={3}
        totalPages={5}
        onPageChange={onPageChangeMock}
      />,
    );

    const secondPage = screen.getByText('2');
    fireEvent.click(secondPage);

    expect(onPageChangeMock).toHaveBeenCalledTimes(1);
    expect(onPageChangeMock).toHaveBeenCalledWith(2);
  });

  it('should disable previous and next buttons correctly', () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={onPageChangeMock}
      />,
    );

    const nextButton = screen.getByTestId('pagination-next');

    waitFor(() => {
      expect(nextButton).not.toBeDisabled();
    });

    fireEvent.click(nextButton);

    expect(onPageChangeMock).toHaveBeenCalledTimes(1);
    expect(onPageChangeMock).toHaveBeenCalledWith(2);
  });
  it('should enable previous and next buttons correctly', () => {
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPageChange={onPageChangeMock}
      />,
    );

    const previousButton = screen.getByTestId('pagination-previous');

    waitFor(() => {
      expect(previousButton).not.toBeDisabled();
    });

    fireEvent.click(previousButton);

    expect(onPageChangeMock).toHaveBeenCalledTimes(1);
  });
});
