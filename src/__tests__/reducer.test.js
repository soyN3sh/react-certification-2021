import { reducer } from '../utils/reducer/reducer';
import { actions } from '../utils/reducer/actions';

describe('reducer tests', () => {
  it('test setToggleMode', () => {
    const initialState = {
      toggleMode: false,
    };

    const newState = reducer(initialState, {
      type: actions.setToggleMode,
      payload: true,
    });

    expect(newState.toggleMode).toBeTruthy();
  });

  it('test setIsDrawerOpen', () => {
    const initialState = {
      isDrawerOpen: false,
    };

    const newState = reducer(initialState, {
      type: actions.setIsDrawerOpen,
      payload: true,
    });

    expect(newState.isDrawerOpen).toBeTruthy();
  });

  it('test setQuery', () => {
    const initialState = {
      apiParams: {
        q: '',
      },
    };

    const newState = reducer(initialState, {
      type: actions.setQuery,
      payload: 'mock value',
    });

    expect(newState.apiParams.q).toBe('mock value');
  });

  it('test setApiParams', () => {
    const initialState = {};

    const newState = reducer(initialState, {
      type: actions.setApiParams,
      payload: {
        apiParams: {},
      },
    });

    expect(newState.apiParams).not.toBeNull();
  });

  it('test default', () => {
    const initialState = {};

    const newState = reducer(initialState, {
      type: '',
    });

    expect(newState).toEqual(initialState);
  });
});
