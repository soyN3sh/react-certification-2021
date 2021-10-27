import React, { useContext } from 'react';
import { Menu, MenuItem } from '@mui/material';
import GlobalContext from '../../providers/Global/GlobalContext';
import { actions } from '../../utils/reducer/actions';
import LoginDialog from '../LoginDialog/LoginDialog.component';
import { storage } from '../../utils/storage';

const LoginMenu = () => {
  const {
    state: { user, isProfileMenuOpen, anchorEl },
    dispatch,
  } = useContext(GlobalContext);

  const handleLoginClick = () => {
    dispatch({ type: actions.toggleLoginDialog, payload: true });
  };

  const handleLogoutClick = (e) => {
    e.preventDefault();
    storage.remove('user');
    dispatch({ type: actions.setUser, payload: { authenticated: false } });
  };

  const handleClose = () => {
    dispatch({ type: actions.setAnchorEl, payload: null });
    dispatch({ type: actions.toggleProfileMenu, payload: false });
  };

  return (
    <div>
      <Menu
        id="loginMenu"
        anchorEl={anchorEl}
        open={isProfileMenuOpen}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {user.authenticated ? (
          <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
        ) : (
          <MenuItem onClick={handleLoginClick}>Login</MenuItem>
        )}
        <LoginDialog />
      </Menu>
    </div>
  );
};

export default LoginMenu;
