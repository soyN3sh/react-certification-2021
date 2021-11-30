import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GlobalContext from '../providers/Global/GlobalContext';
import LoginDialog from '../components/LoginDialog/LoginDialog.component';
import { actions } from '../utils/reducer/actions';

describe('LoginDialog tests', () => {
  const initialState = {
    state: {
      user: {
        authenticated: false,
      },
      isProfileMenuOpen: true,
      isLoginDialogOpen: true,
    },
    dispatch: jest.fn(),
  };

  const LoginDialogWithContext = ({ state, dispatch }) => {
    return (
      <GlobalContext.Provider value={{ ...state, dispatch }}>
        <LoginDialog />
      </GlobalContext.Provider>
    );
  };

  it('render LoginDialog', () => {
    const state = initialState;
    render(<LoginDialogWithContext state={state} />);

    const loginDialog = document.querySelector('#loginDialog');

    expect(loginDialog).toBeInTheDocument();
  });

  it('test handleFormClose', () => {
    const state = initialState;
    const mockDispatch = jest.fn();
    render(<LoginDialogWithContext state={state} dispatch={mockDispatch} />);

    const cancelButton = document.querySelector('#cancelButton');

    fireEvent.click(cancelButton);

    expect(mockDispatch).toBeCalledWith({
      type: actions.toggleLoginDialog,
      payload: false,
    });
  });
});
