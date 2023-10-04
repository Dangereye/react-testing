import { render, screen } from '@testing-library/react';
import Skills from './Skills';

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'JavaScript'];
  test('Renders correctly.', () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  test('Renders a list of skills.', () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(skills.length);
  });
});
