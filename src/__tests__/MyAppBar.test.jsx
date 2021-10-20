import React from 'react';
import { render, screen } from '@testing-library/react';

import MyAppBar from '../components/MyAppBar/MyAppBar.component';

it('Renders MyAppBar texts', () => {
  render(<MyAppBar />);
  expect(screen.getByLabelText('open drawer')).toBeInTheDocument();
  expect(screen.getByText('Dark mode')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
});
