import React, { useContext } from 'react';
import { IconButton, Avatar } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import GlobalContext from '../../providers/Global/GlobalContext';
import { actions } from '../../utils/reducer/actions';
import LoginMenu from '../LoginMenu/LoginMenu.component';

const AccountButton = () => {
  const {
    state: { user },
    dispatch,
  } = useContext(GlobalContext);

  const handleClick = (e) => {
    dispatch({ type: actions.setAnchorEl, payload: e.currentTarget });
    dispatch({ type: actions.toggleProfileMenu, payload: true });
  };

  return (
    <div>
      <IconButton
        id="accountButton"
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-haspopup="true"
        color="inherit"
        onClick={handleClick}
      >
        {user.authenticated ? (
          <Avatar alt={user.name} src={user.avatarUrl} />
        ) : (
          <AccountCircle />
        )}
      </IconButton>
      <LoginMenu />
    </div>
  );
};

export default AccountButton;
