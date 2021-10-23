import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GlobalContext from '../providers/Global/GlobalContext';
import SearchBar from '../components/SearchBar/SearchBar.component';
import { actions } from '../utils/reducer/actions';

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('SearchBar tests', () => {
  const initialState = {
    state: {
      apiParams: {
        q: '',
      },
    },
    dispatch: jest.fn(),
  };

  const SearchBarWithContext = ({ state, dispatch }) => {
    return (
      <GlobalContext.Provider value={{ ...state, dispatch }}>
        <SearchBar />
      </GlobalContext.Provider>
    );
  };

  it('render Search placeholder', () => {
    const state = initialState;
    render(<SearchBarWithContext state={state} />);
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('changes value when onChange and calls dispatch on enter', () => {
    const state = initialState;
    const dispatchMock = jest.fn();
    render(<SearchBarWithContext state={state} dispatch={dispatchMock} />);

    const searchBar = screen.getByPlaceholderText('Search...');

    fireEvent.change(searchBar, {
      target: {
        value: 'mock value',
      },
    });

    expect(searchBar).toHaveAttribute('value', 'mock value');

    fireEvent.keyDown(searchBar, {
      key: 'Enter',
    });

    expect(dispatchMock).toHaveBeenCalledWith({
      type: actions.setQuery,
      payload: 'mock value',
    });
  });

  it('dispach wont get called when hitting other key', () => {
    const state = initialState;
    const dispatchMock = jest.fn();
    render(<SearchBarWithContext state={state} dispatch={dispatchMock} />);

    const searchBar = screen.getByPlaceholderText('Search...');

    fireEvent.keyDown(searchBar, {
      key: 'Mock',
    });

    expect(dispatchMock).not.toHaveBeenCalled();
  });
});
