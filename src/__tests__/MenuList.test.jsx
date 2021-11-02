import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GlobalContext from '../providers/Global/GlobalContext';
import MenuList from '../components/MenuList';
import { actions } from '../utils/reducer/actions';

const mockDispatch = jest.fn();

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('MenuList tests', () => {
  const initialState = {
    state: {
      user: {
        authenticated: false,
      },
      isDrawerOpen: false,
    },
  };

  const MenuListWithContext = ({ state, dispatch }) => {
    return (
      <GlobalContext.Provider value={{ ...state, dispatch }}>
        <MenuList />
      </GlobalContext.Provider>
    );
  };

  it('MenuList renders Home text', () => {
    const state = initialState;
    render(<MenuListWithContext state={state} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('MenuList calls dispatch when item is clicked', () => {
    const state = initialState;
    render(<MenuListWithContext state={state} dispatch={mockDispatch} />);

    const homeOption = screen.getByText('Home');

    fireEvent.click(homeOption);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: actions.toggleDrawer,
      payload: false,
    });
  });
});
