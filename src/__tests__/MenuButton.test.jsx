import React from 'react';
import { render, screen } from '@testing-library/react';
import MenuButton from '../components/MenuButton/MenuButton.component';

it('render dark mode label', () => {
  render(<MenuButton />);
  expect(screen.getByLabelText('open drawer')).toBeInTheDocument();
});
