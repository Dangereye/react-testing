import { CounterTwoProps } from './CounterTwo.types';

export default function CounterTwo({
  count,
  handleIncrement,
  handleDecrement,
}: CounterTwoProps) {
  return (
    <div>
      <h1>Counter two</h1>
      <p>{count}</p>
      {handleIncrement && <button onClick={handleIncrement}>Increment</button>}
      {handleDecrement && <button onClick={handleDecrement}>Decrement</button>}
    </div>
  );
}
