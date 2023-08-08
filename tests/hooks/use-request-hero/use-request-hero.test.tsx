/* eslint-disable @typescript-eslint/no-explicit-any */
import { HooksProviders, renderHook } from '@/tests/test-utils';
import axios from 'axios'; // Import axios or your mock library

import { waitFor } from '@testing-library/dom';
import { useRequestHero } from '@/hooks/use-request-hero/use-request-hero';

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

describe('useRequestHero hook', () => {
  it('should fetch comics data and return the correct values', async () => {
    const { result } = renderHook(() => useRequestHero(), {
      wrapper: HooksProviders,
    });

    waitFor(() => {
      expect(result.current.hero).toEqual([]);
      expect(result.current.loading).toBe(true);
      expect(result.current.error).toBeUndefined();
    });

    waitFor(() => {
      expect(result.current.hero).toEqual(mockResponse.data.data.results);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBeUndefined();
    });
  });

  it('should handle API error and set the error state', async () => {
    const mockError = {
      response: { data: { code: 404, message: 'Internal server error' } },
    };
    (axios.get as jest.Mock).mockRejectedValueOnce(mockError);

    const { result } = renderHook(() => useRequestHero(), {
      wrapper: HooksProviders,
    });

    waitFor(() => {
      expect(result.current.hero).toEqual([]);
      expect(result.current.loading).toBe(true);
      expect(result.current.error).toBeUndefined();
    });

    waitFor(() => {
      expect(result.current.hero).toEqual([]);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toEqual({ message: 'API Error' });
    });
  });
});
