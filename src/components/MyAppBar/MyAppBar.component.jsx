import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import ModeSwitch from '../ModeSwitch/ModeSwitch.component';
import MenuButton from '../MenuButton/MenuButton.component';
import SearchBar from '../SearchBar/SearchBar.component';

const MyAppBar = () => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <MenuButton />
          <SearchBar />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <ModeSwitch />
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default MyAppBar;
