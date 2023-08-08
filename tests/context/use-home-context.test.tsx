// useHomeContext.test.tsx
import { renderHook } from '@/tests/test-utils';
import { useHomeContext } from '@/context/useHomeContext';
import { HomeContext } from '@/context';

describe('useHomeContext', () => {
  test('should return the value from HomeContext', () => {
    const testValue = {
      time: 0,
      publicKey: 'xxxxx223ds',
      hash: '998271',
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const wrapper = ({ children }: any) => (
      <HomeContext.Provider value={testValue}>{children}</HomeContext.Provider>
    );

    const { result } = renderHook(() => useHomeContext(), { wrapper });

    expect(result.current).toBe(testValue);
  });
});
