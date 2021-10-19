import React from 'react';
import { render, screen } from '@testing-library/react';
import MenuButton from '../components/MenuButton/MenuButton.component';

it('render open drawer label', () => {
  render(<MenuButton />);
  expect(screen.getByLabelText('open drawer')).toBeInTheDocument();
});
