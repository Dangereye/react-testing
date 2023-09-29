import { render, screen } from '@testing-library/react';
import Greet from '../components/greet/Greet';

describe('Greet', () => {
  test('Renders correctly.', () => {
    render(<Greet />);
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
  });

  test('Renders with a name.', () => {
    render(<Greet name='Craig' />);
    const textElement = screen.getByText('Hello Craig');
    expect(textElement).toBeInTheDocument();
  });
});
