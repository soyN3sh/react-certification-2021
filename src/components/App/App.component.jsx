import React, { useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AuthProvider from '../../providers/Auth';
import MyAppBar from '../MyAppBar/MyAppBar.component';
import Layout from '../Layout';
import { Routes } from '../../routes/Routes';
import GlobalContext from '../../providers/Global/GlobalContext';
import { reducer } from '../../utils/reducer/reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, {
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
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout>
              <MyAppBar />
              <Routes />
            </Layout>
          </ThemeProvider>
        </AuthProvider>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
