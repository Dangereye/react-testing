import { render, screen } from '@testing-library/react';
import Greet from './Greet';

describe('Greet', () => {
  it('Renders correctly.', () => {
    render(<Greet />);
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
  });

  it('Renders with a name.', () => {
    render(<Greet name='Craig' />);
    const textElement = screen.getByText('Hello Craig');
    expect(textElement).toBeInTheDocument();
  });
});
