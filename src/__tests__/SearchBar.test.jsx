import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from '../components/SearchBar/SearchBar.component';

it('render wizeline placeholder', () => {
  render(<SearchBar />);
  expect(screen.getByPlaceholderText('wizeline')).toBeInTheDocument();
});
