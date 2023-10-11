import { renderHook } from '@testing-library/react';

// Hooks
import useCounter from './useCounter';

describe('useCounter', () => {
  test('Renders initial count.', () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test('Renders initial count provided via initialCount prop.', () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 10 },
    });
    expect(result.current.count).toBe(10);
  });
});
