import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '../';

test('renders component successfully', () => {
  render(<Button  />);
  const element = screen.getByTestId(/test/i);
  expect(element).toBeInTheDocument();
});
