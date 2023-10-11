import { render, screen } from '@testing-library/react';

// Components
import CounterTwo from './CounterTwo';

describe('Counter two', () => {
  test('Renders correctly', () => {
    render(<CounterTwo count={0} />);
    const headingElement = screen.getByRole('heading', { name: 'Counter two' });
    expect(headingElement).toBeInTheDocument();
  });
});
