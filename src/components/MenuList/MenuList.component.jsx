import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Box, List, Divider, ListItem, ListItemText } from '@mui/material';
import GlobalContext from '../../providers/Global/GlobalContext';
import { actions } from '../../utils/reducer/actions';

const MenuList = () => {
  const {
    state: { isDrawerOpen },
    dispatch,
  } = useContext(GlobalContext);

  const toggleDrawer = () => {
    dispatch({ type: actions.setIsDrawerOpen, payload: !isDrawerOpen });
  };

  const history = useHistory();

  const handleClick = () => {
    history.push('/');
    toggleDrawer();
  };

  return (
    <Box sx={{ width: '250px' }} role="presentation" onClick={handleClick}>
      <List>
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
      </List>
      <Divider />
    </Box>
  );
};

export default MenuList;
