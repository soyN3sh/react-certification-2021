import { actions } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.addFavoriteVideo:
      return { ...state, favoriteVideos: [...state.favoriteVideos, action.payload] };
    case actions.removeFavoriteVideo:
      return {
        ...state,
        favoriteVideos: state.favoriteVideos.filter((video) => {
          return video.id !== action.payload.id;
        }),
      };
    case actions.setQuery:
      return { ...state, apiParams: { ...state.apiParams, q: action.payload } };
    case actions.setApiParams:
      return { ...state, apiParams: action.payload };
    case actions.setAnchorEl:
      return { ...state, anchorEl: action.payload };
    case actions.setUser:
      return { ...state, user: action.payload };
    case actions.toggleDarkMode:
      return { ...state, toggleMode: action.payload };
    case actions.toggleDrawer:
      return { ...state, isDrawerOpen: action.payload };
    case actions.toggleProfileMenu:
      return { ...state, isProfileMenuOpen: action.payload };
    case actions.toggleLoginDialog:
      return { ...state, isLoginDialogOpen: action.payload };
    default:
      return state;
  }
};
