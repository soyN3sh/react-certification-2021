import React, { useContext } from 'react';
import { IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuList from '../MenuList/MenuList.component';
import GlobalContext from '../../providers/Global/GlobalContext';
import { actions } from '../../utils/reducer/actions';

const MenuButton = () => {
  const {
    state: { isDrawerOpen },
    dispatch,
  } = useContext(GlobalContext);

  const toggleDrawer = () => {
    dispatch({ type: actions.setIsDrawerOpen, payload: !isDrawerOpen });
  };

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <MenuList />
      </Drawer>
    </>
  );
};

export default MenuButton;
