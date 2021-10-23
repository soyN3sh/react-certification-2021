import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GlobalContext from '../providers/Global/GlobalContext';
import { actions } from '../utils/reducer/actions';
import ModeSwitch from '../components/ModeSwitch/ModeSwitch.component';

describe('ModeSwitch tests', () => {
  const initialState = {
    state: {
      toggleMode: false,
    },
  };

  const ModeSwitchWithContext = ({ state, dispatch = jest.fn() }) => {
    return (
      <GlobalContext.Provider value={{ ...state, dispatch }}>
        <ModeSwitch />
      </GlobalContext.Provider>
    );
  };

  it('render dark mode label', () => {
    const state = initialState;
    render(<ModeSwitchWithContext state={state} />);
    expect(screen.getByText('Dark mode')).toBeInTheDocument();
  });

  it('calls dispatch on Switch change', () => {
    const state = initialState;
    const dispatchMock = jest.fn();
    render(<ModeSwitchWithContext state={state} dispatch={dispatchMock} />);

    const modeSwitch = document.querySelector('#modeSwitch');

    fireEvent(
      modeSwitch,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(dispatchMock).toHaveBeenCalledWith({
      type: actions.setToggleMode,
      payload: true,
    });
  });
});
