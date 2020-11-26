import React from 'react';
import { render, screen } from '@testing-library/react';
import { Box } from '../';

test('renders learn react link', () => {
  render(<Box color="red" />);
  const element = screen.getByTestId(/box/i);
  expect(element).toBeInTheDocument();
});
