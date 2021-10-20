import React from 'react';
import { render, screen } from '@testing-library/react';
import AccountButton from '../components/AccountButton/AccountButton.component';

it('render account of current user label', () => {
  render(<AccountButton />);
  expect(screen.getByLabelText('account of current user')).toBeInTheDocument();
});
