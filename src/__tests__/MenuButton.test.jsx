import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MenuButton from '../components/MenuButton/MenuButton.component';
import GlobalContext from '../providers/Global/GlobalContext';
import { actions } from '../utils/reducer/actions';

describe('MenuButton tests', () => {
  const initialState = {
    state: {
      isDrawerOpen: false,
    },
    dispatch: jest.fn(),
  };

  const MenuButtonWithContext = ({ state, dispatch }) => {
    return (
      <GlobalContext.Provider value={{ ...state, dispatch }}>
        <MenuButton />
      </GlobalContext.Provider>
    );
  };

  it('render open drawer label', () => {
    const state = initialState;
    render(<MenuButtonWithContext state={state} />);
    expect(screen.getByLabelText('open drawer')).toBeInTheDocument();
  });

  it('call dispatch when button is clicked', () => {
    const state = initialState;
    const mockDispatch = jest.fn();

    render(<MenuButtonWithContext state={state} dispatch={mockDispatch} />);

    const menuButton = screen.getByLabelText('open drawer');

    fireEvent.click(menuButton);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: actions.toggleDrawer,
      payload: true,
    });
  });
});
