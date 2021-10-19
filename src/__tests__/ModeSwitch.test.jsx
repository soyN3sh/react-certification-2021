import React from 'react';
import { render, screen } from '@testing-library/react';
import ModeSwitch from '../components/ModeSwitch/ModeSwitch.component';

it('render dark mode label', () => {
  render(<ModeSwitch />);
  expect(screen.getByText('Dark mode')).toBeInTheDocument();
});
