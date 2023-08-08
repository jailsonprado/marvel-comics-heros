import { renderHook, act, HooksProviders } from '@/tests/test-utils';
import useDebounce from '@/hooks/use-debounce/use-debounce';

jest.useFakeTimers();

test('useDebounce should debounce the value', () => {
  const { result } = renderHook(() => useDebounce('initial', 500), {
    wrapper: HooksProviders,
  });

  expect(result.current).toBe('initial');

  act(() => {
    jest.advanceTimersByTime(300);
    result.current = 'updated';
  });

  expect(result.current).toBe('updated');

  act(() => {
    jest.advanceTimersByTime(500);
  });

  expect(result.current).toBe('updated');
});
