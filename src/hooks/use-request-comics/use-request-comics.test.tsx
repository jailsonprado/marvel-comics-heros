/* eslint-disable @typescript-eslint/no-explicit-any */
import { HooksProviders, renderHook } from '@/test-utils';
import axios from 'axios';
import { useRequestComics } from '@/hooks/use-request-comics/use-request-comics';
import { waitFor } from '@testing-library/dom';

const mockResponse = {
  data: {
    data: {
      results: [
        {
          id: 1,
          name: 'Comic 1',
          description: 'Description for Comic 1',
          thumbnail: {
            path: 'path-to-thumbnail-1',
            extension: 'jpg',
          },
          comics: {
            available: 5,
            items: [],
          },
          modified: '2023-08-01T10:00:00Z',
          series: {
            available: 5,
          },
        },
      ],
    },
  },
};

jest.mock('axios');
(axios.get as jest.Mock).mockResolvedValueOnce(mockResponse);

describe('useRequestComics hook', () => {
  it('should fetch comics data and return the correct values', async () => {
    const { result } = renderHook(() => useRequestComics(), {
      wrapper: HooksProviders,
    });

    waitFor(() => {
      expect(result.current.comics).toEqual([]);
      expect(result.current.loadingData).toBe(true);
      expect(result.current.error).toBeUndefined();
    });

    waitFor(() => {
      expect(result.current.comics).toEqual(mockResponse.data.data.results);
      expect(result.current.loadingData).toBe(false);
      expect(result.current.error).toBeUndefined();
    });
  });

  it('should handle API error and set the error state', async () => {
    const mockError = {
      response: { data: { code: 404, message: 'Internal server error' } },
    };
    (axios.get as jest.Mock).mockRejectedValueOnce(mockError);

    const { result } = renderHook(() => useRequestComics(), {
      wrapper: HooksProviders,
    });

    waitFor(() => {
      expect(result.current.comics).toEqual([]);
      expect(result.current.loadingData).toBe(true);
      expect(result.current.error).toBeUndefined();
    });

    waitFor(() => {
      expect(result.current.comics).toEqual([]);
      expect(result.current.loadingData).toBe(false);
      expect(result.current.error).toEqual({ message: 'API Error' });
    });
  });
});
