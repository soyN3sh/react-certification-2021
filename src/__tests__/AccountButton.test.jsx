import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GlobalContext from '../providers/Global/GlobalContext';
import { actions } from '../utils/reducer/actions';
import AccountButton from '../components/AccountButton/AccountButton.component';

describe('AccountButton tests', () => {
  const initialState = {
    state: {
      user: {
        authenticated: false,
      },
      isProfileMenuOpen: false,
      anchorEl: null,
    },
    dispatch: jest.fn(),
  };

  const AccountButtonWithContext = ({ state, dispatch }) => {
    return (
      <GlobalContext.Provider value={{ ...state, dispatch }}>
        <AccountButton />
      </GlobalContext.Provider>
    );
  };

  it('render account of current user label', () => {
    const state = initialState;
    const mockDispatch = jest.fn();

    render(<AccountButtonWithContext state={state} dispatch={mockDispatch} />);

    const accountButton = document.querySelector('#accountButton');

    fireEvent.click(accountButton);

    expect(mockDispatch).toBeCalledWith({
      type: actions.setAnchorEl,
      payload: accountButton,
    });

    expect(mockDispatch).toBeCalledWith({
      type: actions.toggleProfileMenu,
      payload: true,
    });
  });
});
