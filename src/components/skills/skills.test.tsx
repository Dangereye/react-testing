import { render, screen, logRoles } from '@testing-library/react';

// Components
import Skills from './Skills';

// Data
import { skills } from '../../data/skills';

describe('Skills', () => {
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

  test('Renders Login button.', () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole('button', { name: 'Login' });
    expect(loginButton).toBeInTheDocument();
  });

  test('Start learning button is NOT rendered.', () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole('button', {
      name: 'Start learning',
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  test('Start learning button displays after 500ms', async () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container);
    // screen.debug();
    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: 'Start learning',
      },
      { timeout: 2000 }
    );
    // screen.debug();
    expect(startLearningButton).toBeInTheDocument();
  });
});
