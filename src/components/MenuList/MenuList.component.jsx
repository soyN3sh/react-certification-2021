import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Box, List, Divider, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import GlobalContext from '../../providers/Global/GlobalContext';
import { actions } from '../../utils/reducer/actions';
import routesList from '../../routes/routesList';

const MenuList = () => {
  const { dispatch } = useContext(GlobalContext);

  const validateRoute = (route) => {
    if (route.listed && route.private) {
      // if (user.isAuthenticated) {
      //   return route;
      // }
    } else if (route.listed && !route.private) {
      return route;
    }
  };

  const filteredRoutes = routesList.filter((route) => validateRoute(route));

  const toggleDrawer = () => {
    dispatch({ type: actions.toggleDrawer, payload: false });
  };

  const history = useHistory();

  const handleClick = (path) => {
    history.push(path);
    toggleDrawer();
  };

  return (
    <Box sx={{ width: '250px' }} role="presentation">
      <List>
        {filteredRoutes.map((route) => {
          const Component = route.icon;

          return (
            <ListItem
              key={route.path}
              button
              onClick={() => {
                handleClick(route.path);
              }}
            >
              <ListItemText primary={route.name} />
              <ListItemIcon>
                <Component />
              </ListItemIcon>
            </ListItem>
          );
        })}
      </List>
      <Divider />
    </Box>
  );
};

export default MenuList;
