import React from 'react';
import { render } from '@testing-library/react';
import GlobalContext from '../providers/Global/GlobalContext';
import LoginMenu from '../components/LoginMenu/LoginMenu.component';

describe('LoginMenu tests', () => {
  const myDiv = document.createElement('div');

  const initialState = {
    state: {
      user: {
        authenticated: false,
      },
      isProfileMenuOpen: true,
      anchorEl: myDiv,
    },
    dispatch: jest.fn(),
  };

  const LoginMenuWithContext = ({ state, dispatch }) => {
    return (
      <GlobalContext.Provider value={{ ...state, dispatch }}>
        <LoginMenu />
      </GlobalContext.Provider>
    );
  };

  it('render LoginMenu', () => {
    const state = initialState;
    render(<LoginMenuWithContext state={state} />);

    const loginMenu = document.querySelector('#loginMenu');

    expect(loginMenu).toBeInTheDocument();
  });
});
