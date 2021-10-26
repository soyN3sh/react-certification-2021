import { actions } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.toggleDarkMode:
      return { ...state, toggleMode: action.payload };
    case actions.toggleDrawer:
      return { ...state, isDrawerOpen: action.payload };
    case actions.setQuery:
      return { ...state, apiParams: { ...state.apiParams, q: action.payload } };
    case actions.setApiParams:
      return { ...state, apiParams: action.payload };
    default:
      return state;
  }
};
