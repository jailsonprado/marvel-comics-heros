// pagination.tsx
import * as S from './pagination.styles';
import { calculatePagesToShow } from '@/components/atoms/pagination/utils/pagination.utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pagesToShow = 5;
  const pages = calculatePagesToShow(currentPage, totalPages, pagesToShow);

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  return (
    <S.PaginationContainer data-testid="pagination-container">
      {currentPage > 1 && (
        <S.PageButton
          active="true"
          onClick={() => handlePageClick(currentPage - 1)}
          data-testid="pagination-previous"
        >
          &laquo;
        </S.PageButton>
      )}

      {pages.map((page) => (
        <S.PageButton
          key={page}
          active={currentPage === page ? 'true' : 'false'}
          onClick={() => handlePageClick(page)}
          data-testid={`pagination-${page}`}
        >
          {page}
        </S.PageButton>
      ))}

      {currentPage < totalPages && (
        <S.PageButton
          active="true"
          onClick={() => handlePageClick(currentPage + 1)}
          data-testid="pagination-next"
        >
          &raquo;
        </S.PageButton>
      )}
    </S.PaginationContainer>
  );
};
