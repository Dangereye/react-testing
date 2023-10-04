import { render, screen, act } from '@testing-library/react';
import user from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter', () => {
  test('Renders correctly.', () => {
    render(<Counter />);

    const countElement = screen.getByRole('heading');
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    expect(incrementButton).toBeInTheDocument();
  });

  test('Renders initial state count of 0.', () => {
    render(<Counter />);
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('0');
  });

  test('Renders a count of 1 after clicking the Increment button.', async () => {
    user.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    await act(() => user.click(incrementButton));

    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('1');
  });

  test('Renders a count of 2 after clicking the Increment button twice', async () => {
    user.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    await act(() => user.dblClick(incrementButton));

    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('2');
  });
});
