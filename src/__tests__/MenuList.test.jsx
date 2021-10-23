import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GlobalContext from '../providers/Global/GlobalContext';
import MenuList from '../components/MenuList';
import { actions } from '../utils/reducer/actions';

const mockDispatch = jest.fn();

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useHistory: () => ({
    push: mockDispatch,
  }),
}));

describe('MenuList tests', () => {
  const initialState = {
    state: {
      isDrawerOpen: false,
    },
    dispatch: jest.fn(),
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

    const menuList = screen.getByText('Home');

    fireEvent.click(menuList);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: actions.setIsDrawerOpen,
      payload: true,
    });
  });
});
