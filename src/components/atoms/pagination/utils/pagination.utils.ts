export function calculatePagesToShow(
  currentPage: number,
  totalPages: number,
  pagesToShow: number,
): number[] {
  const halfPagesToShow = Math.floor(pagesToShow / 2);
  const startPage = Math.max(1, currentPage - halfPagesToShow);
  const endPage = Math.min(totalPages, currentPage + halfPagesToShow);

  return Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index,
  );
}
