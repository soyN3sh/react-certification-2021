import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../components/Layout/Layout.component';

it('Layout to have class "container"', () => {
  const { container } = render(<Layout />);
  expect(container.getElementsByClassName('container').length).toBe(1);
});
