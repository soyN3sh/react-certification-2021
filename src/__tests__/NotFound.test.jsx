import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound/NotFound.page';

it('notFound renders correctly', () => {
  render(
    <MemoryRouter initialEntries={['/asdgf']}>
      <NotFound />
    </MemoryRouter>
  );

  const notFoundGif = document.querySelector('#notFoundGif');

  expect(notFoundGif).toBeInTheDocument();
});
