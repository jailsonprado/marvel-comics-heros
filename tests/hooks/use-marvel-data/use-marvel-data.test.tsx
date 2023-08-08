/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMarvelData } from '@/hooks/use-marvel-data/use-marvel-data';
import { HooksProviders, act, renderHook } from '@/tests/test-utils';
import { waitFor } from '@testing-library/dom';
import axios from 'axios';

jest.mock('axios');

describe('useMarvelData', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockApiResponse = {
    data: {
      data: {
        results: [
          {
            id: 1,
            name: 'Spider-Man',
            description: 'Friendly neighborhood superhero',
            thumbnail: {
              path: 'https://example.com/spiderman',
              extension: 'jpg',
            },
            comics: {
              items: [
                {
                  name: 'The Amazing Spider-Man',
                  type: 'comic',
                },
              ],
            },
          },
        ],
        total: 100,
      },
    },
  };

  it('should fetch data correctly', async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce(mockApiResponse);

    const { result } = renderHook(() => useMarvelData(), {
      wrapper: HooksProviders,
    });

    waitFor(() => {
      expect(result.current.loading).toBe(true);
    });

    waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.data).toEqual(mockApiResponse.data.data.results);
      expect(result.current.totalItems).toBe(mockApiResponse.data.data.total);
    });
  });

  it('should handle errors correctly', async () => {
    const mockError = {
      response: { data: { code: 404, message: 'Not Found' } },
    };
    (axios.get as jest.Mock).mockRejectedValueOnce(mockError);

    const { result } = renderHook(() => useMarvelData(), {
      wrapper: HooksProviders,
    });

    waitFor(() => {
      expect(result.current.loading).toBe(true);
    });

    waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toEqual(mockError);
      expect(result.current.data).toEqual([]);
      expect(result.current.totalItems).toBe(0);
    });
  });

  it('should update search value correctly', () => {
    const { result } = renderHook(() => useMarvelData(), {
      wrapper: HooksProviders,
    });

    act(() => {
      result.current.setSearchValue('Spider');
    });

    expect(result.current.searchValue).toBe('Spider');
  });

  it('should handle page changes correctly', async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce(mockApiResponse);

    const { result } = renderHook(() => useMarvelData(), {
      wrapper: HooksProviders,
    });

    waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.currentPage).toBe(1);
    });

    act(() => {
      result.current.handlePageChange(2);
    });

    waitFor(() => {
      expect(result.current.loading).toBe(true);
    });

    waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.currentPage).toBe(2);
    });
  });
});
