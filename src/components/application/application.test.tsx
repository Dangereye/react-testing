import { render, screen } from '@testing-library/react';
import Application from './Application';

describe('Application', () => {
  test('Renders correctly', () => {
    render(<Application />);

    const pageHeading = screen.getByRole('heading', { level: 1 });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole('heading', { level: 2 });
    expect(sectionHeading).toBeInTheDocument();

    const paragraphElement = screen.getByText('All fields are mandatory.');
    expect(paragraphElement).toBeInTheDocument();

    const nameElement = screen.getByRole('textbox', { name: 'Name' });
    expect(nameElement).toBeInTheDocument();

    const nameElementTwo = screen.getByLabelText('Name');
    expect(nameElementTwo).toBeInTheDocument();

    const nameElementThree = screen.getByPlaceholderText('Fullname');
    expect(nameElementThree).toBeInTheDocument();

    const nameElementFour = screen.getByDisplayValue('Craig');
    expect(nameElementFour).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox', { name: 'Bio' });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole('checkbox');
    expect(termsElement).toBeInTheDocument();

    const termsElementTwo = screen.getByLabelText(
      'I agree to the terms and conditions'
    );
    expect(termsElementTwo).toBeInTheDocument();

    const submitButtonElement = screen.getByRole('button');
    expect(submitButtonElement).toBeInTheDocument();
  });
});
