import { reducer } from '../utils/reducer/reducer';
import { actions } from '../utils/reducer/actions';

describe('reducer tests', () => {
  it('test addFavoriteVideo', () => {
    const initialState = {
      favoriteVideos: [],
    };

    const newState = reducer(initialState, {
      type: actions.addFavoriteVideo,
      payload: [{ id: 'test' }],
    });

    expect(newState.favoriteVideos.length).toBe(1);
  });

  it('test removeFavoriteVideo', () => {
    const initialState = {
      favoriteVideos: [{ id: 'test' }],
    };

    const newState = reducer(initialState, {
      type: actions.removeFavoriteVideo,
      payload: { id: 'test' },
    });

    expect(newState.favoriteVideos.length).toBe(0);
  });

  it('test toggleDarkMode', () => {
    const initialState = {
      toggleMode: false,
    };

    const newState = reducer(initialState, {
      type: actions.toggleDarkMode,
      payload: true,
    });

    expect(newState.toggleMode).toBeTruthy();
  });

  it('test toggleDrawer', () => {
    const initialState = {
      isDrawerOpen: false,
    };

    const newState = reducer(initialState, {
      type: actions.toggleDrawer,
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

  it('test setAnchorEl', () => {
    const inititalState = {
      anchorEl: null,
    };

    const newState = reducer(inititalState, {
      type: actions.setAnchorEl,
      payload: 'test',
    });

    expect(newState.anchorEl).not.toBeNull();
  });

  it('test setUser', () => {
    const inititalState = {
      user: null,
    };

    const newState = reducer(inititalState, {
      type: actions.setUser,
      payload: { id: '123' },
    });

    expect(newState.user).not.toBeNull();
  });

  it('test toggleProfileMenu', () => {
    const initialState = {
      isProfileMenuOpen: false,
    };

    const newState = reducer(initialState, {
      type: actions.toggleProfileMenu,
      payload: true,
    });

    expect(newState.isProfileMenuOpen).toBeTruthy();
  });

  it('test toggleLoginDialog', () => {
    const initialState = {
      isLoginDialogOpen: false,
    };

    const newState = reducer(initialState, {
      type: actions.toggleLoginDialog,
      payload: true,
    });

    expect(newState.isLoginDialogOpen).toBeTruthy();
  });

  it('test default', () => {
    const initialState = {};

    const newState = reducer(initialState, {
      type: '',
    });

    expect(newState).toEqual(initialState);
  });
});
