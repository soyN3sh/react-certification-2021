import React, { useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MyAppBar from '../MyAppBar/MyAppBar.component';
import Layout from '../Layout';
import { Routes } from '../../routes/Routes';
import GlobalContext from '../../providers/Global/GlobalContext';
import { reducer } from '../../utils/reducer/reducer';
import { storage } from '../../utils/storage';

function App() {
  const [state, dispatch] = useReducer(reducer, {
    favoriteVideos: storage.get('favoriteVideos') || [],
    user: storage.get('user') || { authenticated: false },
    showButton: false,
    anchorEl: null,
    isProfileMenuOpen: false,
    isLoginDialogOpen: false,
    isDrawerOpen: false,
    toggleMode: false,
    apiParams: {
      q: 'wizeline',
      maxResults: 25,
      type: 'video',
    },
  });

  const theme = createTheme({
    palette: {
      mode: state.toggleMode ? 'dark' : 'light',
    },
  });

  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{ state, dispatch }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <MyAppBar />
            <Routes />
          </Layout>
        </ThemeProvider>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
