import { useState } from 'react';
import { useCounterProps } from './useCounter.types';

export default function useCounter({ initialCount = 0 }: useCounterProps = {}) {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  return { count, increment, decrement };
}
