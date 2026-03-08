import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio navbar logo', () => {
  render(<App />);
  const logoElement = screen.getByText(/hari\.dev/i);
  expect(logoElement).toBeInTheDocument();
});
