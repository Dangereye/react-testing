import { render, screen } from '../../TestUtils';
import MuiMode from './MuiMode';

describe('MuiMode', () => {
  test('Renders text correctly.', () => {
    render(<MuiMode />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toHaveTextContent('dark mode');
  });
});
