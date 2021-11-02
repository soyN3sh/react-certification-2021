import React from 'react';
import { render, screen } from '@testing-library/react';
import GlobalContext from '../providers/Global/GlobalContext';

import MyAppBar from '../components/MyAppBar/MyAppBar.component';

describe('MyAppBar tests', () => {
  const initialState = {
    state: {
      toggleMode: false,
      apiParams: {
        q: 'wizeline',
      },
      user: {
        authenticated: false,
      },
      isProfileMenuOpen: false,
      anchorEl: null,
    },
    dispatch: jest.fn(),
  };

  const MyAppBarWithContext = ({ state }) => {
    return (
      <GlobalContext.Provider value={{ ...state }}>
        <MyAppBar />
      </GlobalContext.Provider>
    );
  };

  it('Renders MyAppBar texts', () => {
    render(<MyAppBarWithContext state={initialState} />);
    expect(screen.getByLabelText('open drawer')).toBeInTheDocument();
    expect(screen.getByText('Dark mode')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });
});
