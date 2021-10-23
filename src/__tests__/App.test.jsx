import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../components/App/App.component';

describe('App tests', () => {
  it('Renders App', () => {
    render(<App />);

    expect(screen.getByText('Dark mode')).toBeInTheDocument();
  });

  it('navigates to home', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    act(() => {
      const menuButton = screen.getByLabelText('open drawer');

      fireEvent.click(menuButton);
    });
  });
});
