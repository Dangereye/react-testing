import { render, screen, act } from '@testing-library/react';
import user from '@testing-library/user-event';

// Components
import CounterTwo from './CounterTwo';

describe('Counter two', () => {
  test('Renders correctly.', () => {
    render(<CounterTwo count={0} />);
    const headingElement = screen.getByRole('heading', { name: 'Counter two' });
    expect(headingElement).toBeInTheDocument();
  });

  test('Function handlers are called.', async () => {
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );
    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    const decrementButton = screen.getByRole('button', { name: 'Decrement' });
    await act(() => user.click(incrementButton));
    await act(() => user.click(decrementButton));
    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
