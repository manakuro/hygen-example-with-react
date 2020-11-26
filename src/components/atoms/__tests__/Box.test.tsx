import React from 'react';
import { render, screen } from '@testing-library/react';
import Box from '../Box';

test('renders learn react link', () => {
  render(<Box />);
  const element = screen.getByTestId(/box/i);
  expect(element).toBeInTheDocument();
});
